import {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector} from 'react-redux';

import {RootState} from './store/types';
import {Todo} from './types';

export function useStorage() {
  const {todos, isInitial} = useSelector(({todo}: RootState) => todo);

  useEffect(() => {
    if (isInitial) {
      return;
    }

    AsyncStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
}

export async function getTodosFormStorage(): Promise<Todo[]> {
  const todos = await AsyncStorage.getItem('todos');

  return todos ? JSON.parse(todos) : [];
}
