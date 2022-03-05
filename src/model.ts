export interface Todo{
  id: number;
  todo: string;
  isDone: boolean;
}

type EditTodo = {
  id: number;
  editedTodo: string;
}

export type Actions = 
  | { type: 'add', payload: string }
  | { type: 'edit', payload: EditTodo }
  | { type: 'remove', payload: number }
  | { type: 'done', payload: number }
