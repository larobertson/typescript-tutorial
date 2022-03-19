import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import TodoItem from './TodoItem';
import "./styles.css";
import { Todo, Actions } from '../model';

interface Props {
  todos: Todo[];
  dispatch: React.Dispatch<Actions>;
  completedTodos: Todo[];
  completedDispatch: React.Dispatch<Actions>;
}

const TodoList: React.FC<Props> = ({todos, dispatch, completedTodos, completedDispatch}) => {
  return (
    <div className="container">
    <Droppable droppableId="TodosList">
      {(provided, snapshot) => {
        return (
        <div className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
          <span className="todos__heading">
            Active Tasks
          </span>
            {todos.map((todo, index) => (
              <TodoItem
                index={index}
                todo={todo}
                key={todo.id}
                todos={todos}
                dispatch={dispatch}
              />
            ))}
            {provided.placeholder}
        </div>
        )
      }}
    </Droppable>
    <Droppable droppableId="TodosRemove">
      {(provided, snapshot) => {
        return (
        <div className={`todos remove ${snapshot.isDraggingOver ? 'dragcomplete' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos__heading remove__heading">
              Completed Tasks
            </span>
            {completedTodos.map((todo, index) => (
              <TodoItem
                index={index}
                todo={todo}
                key={todo.id}
                todos={completedTodos}
                dispatch={completedDispatch}
              />
            ))}
            {provided.placeholder}
        </div>
        )
      }}
    </Droppable>
   </div>
  );
};

export default TodoList;

{/* <div className="todos">
{todos.map((todo) => (
  <TodoItem
    todo={todo}
    key={todo.id}
    todos={todos}
    dispatch={dispatch}
  />
))}
</div> */}