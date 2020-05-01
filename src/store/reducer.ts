import {Todo} from '../types';
import {Action} from './types';
import {ADD_TODO, UPDATE_STATUS, UPDATE_TEXT, DELETE_TODO} from './constants';

interface State {
  todos: Todo[];
  editTodo?: Todo | null;
}

const INITIAL_VALUES: State = {
  todos: [],
  editTodo: undefined,
};

function reducer(state = INITIAL_VALUES, action: Action) {
  switch (action.type) {
    case ADD_TODO: {
      const {text} = action.payload;

      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text,
            isDone: false,
          },
        ],
      };
    }
    case UPDATE_STATUS: {
      const {id} = action.payload;

      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? {...todo, isDone: !todo.isDone} : todo,
        ),
      };
    }
    case UPDATE_TEXT: {
      const {id, text} = action.payload;

      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? {...todo, text} : todo,
        ),
      };
    }
    case DELETE_TODO: {
      const {id} = action.payload;

      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
