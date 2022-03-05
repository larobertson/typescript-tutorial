import React, { useState, useReducer } from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import './App.css';
// import { Todo } from './model';
import { todoReducer } from './TodoReducer';

const App: React.FC = () => {
  const[todo, setTodo] = useState<string>("");
  const [state, dispatch] = useReducer(todoReducer, [])
  // const [todos, setTodos] = useState<Todo[]>(state)

  const handleAdd=(e:React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      // setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      dispatch({type: 'add', payload: todo})
      setTodo('');
    }
  }


  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
