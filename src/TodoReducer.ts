import { Todo, Actions } from './model'

export const todoReducer = (todos:Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...todos,
        { id: Date.now(), todo: action.payload, isDone: false }
      ]
    case "edit":
      return todos.map((todo) => {
        return todo.id === action.payload.id ? {...todo, todo: action.payload.editedTodo} : todo
      }
      )
    case "remove":
      return todos.filter((todo) => todo.id !== action.payload);
    case "done":
      return todos.map((todo) => todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo);
    default:
      return todos;
  }
}

// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, [])
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default ReducerExample;