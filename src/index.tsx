import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Platform, ScrollView} from 'react-native';

import Header from './components/header';
import TextInput from './components/text-input';
import Todos from './components/todos';
import {Todo} from './types';

const {width} = Dimensions.get('window');

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: Date.now(),
      text: '리액트 공부하기',
      isDone: false,
    },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.card}>
        <TextInput />
        <ScrollView contentContainerStyle={styles.todoContainer}>
          <Todos todos={todos} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50, 50, 50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  todoContainer: {
    alignItems: 'center',
  },
});

export default App;
