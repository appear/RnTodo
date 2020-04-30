import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default function TextInputWrapper({}) {
  const [text, setText] = useState();

  const controlNewTodo = (text: string) => {
    setText(text);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="New To Do"
      value={text}
      onChangeText={controlNewTodo}
      placeholderTextColor="#999"
      returnKeyType="done"
      autoCorrect={false}
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
