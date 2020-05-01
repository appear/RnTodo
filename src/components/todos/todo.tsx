import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {Todo} from '../../types';
import {updateText, deleteTodo, updateStatus} from '../../store/actions';

const {width} = Dimensions.get('window');

interface TodoProps {
  todo: Todo;
}

export default function TodoItem({todo}: TodoProps) {
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const dispatch = useDispatch();

  const handleEdit = () => setEditTodo({...todo});
  const handleUpdateEditText = (text: string) => {
    if (!editTodo) {
      return;
    }

    setEditTodo({...editTodo, text});
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleUpdateEdit = () => {
    if (!editTodo) {
      return;
    }

    dispatch(updateText(editTodo));
    setEditTodo(null);
  };

  const handleUpdateStatus = () => {
    dispatch(updateStatus(todo.id));
  };

  const {text, isDone} = todo;

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <TouchableOpacity onPressOut={handleUpdateStatus}>
          <View
            style={isDone ? styles.completedCircle : styles.uncompletedCircle}
          />
        </TouchableOpacity>
        {editTodo ? (
          <TextInput
            style={[
              styles.text,
              styles.input,
              isDone ? styles.completedText : styles.uncompletedText,
            ]}
            value={editTodo.text}
            onChangeText={handleUpdateEditText}
            multiline={true}
          />
        ) : (
          <Text
            style={[
              styles.text,
              isDone ? styles.completedText : styles.uncompletedText,
            ]}>
            {text}
          </Text>
        )}
      </View>
      <View>
        {editTodo ? (
          <View style={styles.actions}>
            <TouchableOpacity onPressOut={handleUpdateEdit}>
              <View style={styles.actionContainer}>
                <Text>✅</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.actions}>
            <TouchableOpacity onPressOut={handleEdit}>
              <View style={styles.actionContainer}>
                <Text>✏️</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={handleDeleteTodo}>
              <View style={styles.actionContainer}>
                <Text>❌</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    marginVertical: 20,
  },
  completedText: {
    color: 'green',
    textDecorationLine: 'line-through',
  },
  uncompletedText: {
    color: '#F23657',
  },
  completedCircle: {
    width: 30,
    height: 30,
    borderColor: 'green',
    borderWidth: 3,
    borderRadius: 15,
    marginRight: 20,
  },
  uncompletedCircle: {
    width: 30,
    height: 30,
    borderColor: 'red',
    borderWidth: 3,
    borderRadius: 15,
    marginRight: 20,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width / 2,
  },
  actions: {
    flexDirection: 'row',
  },
  actionContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  actionText: {},
  input: {
    marginVertical: 15,
  },
});
