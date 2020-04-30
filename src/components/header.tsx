import React from 'react';
import {StatusBar, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Rn Todo.</Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 30,
    marginTop: 50,
    fontWeight: '200',
    marginBottom: 30,
  },
});
