import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../store/types';
import TodoItem from './todo';

export default function Todos() {
  const tt = useSelector((state: RootState) => {
    console.log('state', state);
  });

  return (
    <View>
      {/* {todos.map((todo, idx) => (
        <TodoItem todo={todo} key={idx} />
      ))} */}
    </View>
  );
}
