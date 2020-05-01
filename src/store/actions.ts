import {
  ADD_TODO,
  UPDATE_STATUS,
  UPDATE_TEXT,
  DELETE_TODO,
  SET_TODOS,
} from './constants';
import {Todo} from '../types';

export const setTodos = (payload: Todo[]) => ({
  type: SET_TODOS,
  payload,
});

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {text},
});

export const updateStatus = (id: number) => ({
  type: UPDATE_STATUS,
  payload: {id},
});

export const updateText = (payload: {id: number; text: string}) => ({
  type: UPDATE_TEXT,
  payload,
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: {id},
});
