import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <title>리액트네이티브 어플리케이션</title>





      <Text>안녕 안녕</Text>
      <button>버튼</button>
      <Text>버튼생성</Text>
      
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    Color : 'red',
    button : 'red'
  },
});
