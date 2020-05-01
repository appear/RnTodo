import {addTodo, deleteTodo, updateStatus, updateText} from './actions';
import {combinedReducers} from '.';

export type Action =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof updateStatus>
  | ReturnType<typeof updateText>;

export type RootState = ReturnType<typeof combinedReducers>;
