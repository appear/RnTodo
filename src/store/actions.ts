import {ADD_TODO, UPDATE_STATUS, UPDATE_TEXT, DELETE_TODO} from './constants';

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
