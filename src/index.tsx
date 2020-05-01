import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, View, Dimensions, Platform, ScrollView} from 'react-native';

import store from './store';
import Header from './components/header';
import TextInput from './components/text-input';
import Todos from './components/todos';

const {width} = Dimensions.get('window');

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <View style={styles.card}>
          <TextInput />
          <ScrollView contentContainerStyle={styles.todoContainer}>
            <Todos />
          </ScrollView>
        </View>
      </View>
    </Provider>
  );
}

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
