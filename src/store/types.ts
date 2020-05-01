import {
  addTodo,
  deleteTodo,
  updateStatus,
  updateText,
  setTodos,
} from './actions';
import {combinedReducers} from '.';

export type Action =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof updateStatus>
  | ReturnType<typeof updateText>
  | ReturnType<typeof setTodos>;

export type RootState = ReturnType<typeof combinedReducers>;
