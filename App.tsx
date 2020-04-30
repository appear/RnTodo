import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Platform, ScrollView} from 'react-native';

import Header from './src/components/header';
import TextInput from './src/components/text-input';
import Todo from './src/components/todo';

const {width} = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.card}>
        <TextInput />
        <ScrollView contentContainerStyle={styles.todoContainer}>
          <Todo />
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
