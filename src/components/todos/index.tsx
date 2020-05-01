import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../store/types';
import TodoItem from './todo';

export default function Todos() {
  const {todos} = useSelector(({todo}: RootState) => todo);

  return (
    <View>
      {todos.map((todo, idx) => (
        <TodoItem todo={todo} key={idx} />
      ))}
    </View>
  );
}
