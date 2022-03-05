import React, {useState, useRef, useEffect} from 'react';
import { Todo, Actions } from '../model';
import {AiFillEdit} from 'react-icons/ai';
import {MdDone, MdDelete} from 'react-icons/md';
import './styles.css'

type Props = {
  todo: Todo;
  todos: Todo[];
  dispatch: React.Dispatch<Actions>;
}

const TodoItem: React.FC<Props> = ({todo, todos, dispatch}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    dispatch({type: "done", payload: id})
    // setTodos(todos.map((todo) => 
    //   todo.id === id? {...todo, isDone: !todo.isDone} : todo
    // )
  // )
  };

  const handleDelete = (id: number) => {
    dispatch({type: "remove", payload: id})
    // setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleEdit = (e:React.FormEvent, id:number) => {
    e.preventDefault();
    dispatch({type: "edit", payload: {id, editedTodo: editTodo}})
    // setTodos(todos.map((todo) =>
    //   todo.id === id ? {...todo, todo: editTodo} : todo
    // ))
    setEdit(false);
  }
  
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);


  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {
        edit ? (
          <input
            ref={inputRef}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos__single--text"
          />
        ) : todo.isDone ? (
          <s className="todos__single--text">
            {todo.todo}
          </s>
        ) :
        (
          <span className="todos__single--text">
            {todo.todo}
          </span>
        )
      }
      <div>
        <span className="icon">
          <AiFillEdit onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}/>
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;