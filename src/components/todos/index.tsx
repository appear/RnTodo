import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {RootState} from '../../store/types';
import TodoItem from './todo';
import {useStorage, getTodosFormStorage} from '../../use-storage';
import {setTodos} from '../../store/actions';

export default function Todos() {
  const dispatch = useDispatch();

  useStorage();

  useEffect(() => {
    (async () => {
      dispatch(setTodos(await getTodosFormStorage()));
    })();
  }, []);

  const {todos} = useSelector(({todo}: RootState) => todo);

  return (
    <View>
      {todos.map((todo, idx) => (
        <TodoItem todo={todo} key={idx} />
      ))}
    </View>
  );
}
