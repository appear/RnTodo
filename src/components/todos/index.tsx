import React from 'react';
import {View} from 'react-native';

import TodoItem from './todo';
import {Todo} from '../../types';

interface TodoProps {
  todos: Todo[];
}

export default function Todos({todos}: TodoProps) {
  return (
    <View>
      {todos.map((todo, idx) => (
        <TodoItem todo={todo} key={idx} />
      ))}
    </View>
  );
}
