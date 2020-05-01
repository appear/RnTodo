import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {addTodo} from '../store/actions';

export default function TextInputWrapper({}) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleText = (text: string) => setText(text);
  const handleAddTodo = () => {
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="New To Do"
      value={text}
      onChangeText={handleText}
      placeholderTextColor="#999"
      returnKeyType="done"
      autoCorrect={false}
      onSubmitEditing={handleAddTodo}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 25,
  },
});
