import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Rn Todo.</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="New To Do" />
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
  title: {
    color: '#fff',
    fontSize: 30,
    marginTop: 50,
    fontWeight: '200',
    marginBottom: 30,
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
  input: {},
});

export default App;
