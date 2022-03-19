import React, { useState, useReducer } from 'react';
import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import './App.css';
import { Todo } from './model';
import { todoReducer } from './TodoReducer';

const App: React.FC = () => {
  const[todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])
  const [state, dispatch] = useReducer(todoReducer, todos)
  const [completedState, completedDispatch] = useReducer(todoReducer, completedTodos)

  const handleAdd=(e:React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      // setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      dispatch({type: 'add', payload: todo})
      setTodo('');
    }
  }

  const onDragEnd = (result:DropResult) => {
    console.log('result', result);
    const {source, destination} = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;
    let add,
      active = state,
      complete = completedTodos

    if (source.droppableId === 'TodosList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    
    setCompletedTodos(complete);
    setTodos(active);
  }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={state} dispatch={dispatch} completedTodos={completedState} completedDispatch={completedDispatch} />
      </div>
    </DragDropContext>
  );
}

export default App;
