import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';


const App = () => (
    <>
      <ActivityIndicator size="large" color="#00ff00" />
    </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default App;