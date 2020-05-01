import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

import {Todo} from '../../types';

const {width} = Dimensions.get('window');

interface TodoProps {
  todo: Todo;
}

export default function TodoItem({todo}: TodoProps) {
  const [editTodo, setEditTodo] = useState<Todo | null>(null);

  const {text, isDone} = todo;

  const handleEdit = () => {
    setEditTodo({...todo});
  };

  const isEditing = !!editTodo;

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <TouchableOpacity>
          <View
            style={isDone ? styles.completedCircle : styles.uncompletedCircle}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.text,
            isDone ? styles.completedText : styles.uncompletedText,
          ]}>
          {isEditing && editTodo ? editTodo.text : text}
        </Text>
      </View>
      <View>
        {isEditing ? (
          <View style={styles.actions}>
            <TouchableOpacity>
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
            <TouchableOpacity>
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
});
