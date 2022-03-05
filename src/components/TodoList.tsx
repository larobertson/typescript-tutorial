import React from 'react';
import TodoItem from './TodoItem';
import "./styles.css";
import { Todo, Actions } from '../model';

interface Props {
  todos: Todo[];
  dispatch: React.Dispatch<Actions>;
}

const TodoList: React.FC<Props> = ({todos, dispatch}) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          todos={todos}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default TodoList;