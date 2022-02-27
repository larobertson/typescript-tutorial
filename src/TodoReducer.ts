import React, { useReducer } from 'react';
import { Todo } from './model'

type Actions = 
  | { type: 'add', payload: string }
  | { type: 'remove', payload: number }
  | { type: 'done', payload: number }

// const TodoReducer = (state:Todo[], action: Actions)

// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, [])
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default ReducerExample;