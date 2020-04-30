import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function Todo() {
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCompleteTodo = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCompleteTodo}>
        <View
          style={
            isCompleted ? styles.completedCircle : styles.uncompletedCircle
          }
        />
      </TouchableOpacity>
      <Text style={styles.text}>Hello todo</Text>
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
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    marginVertical: 20,
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
});
