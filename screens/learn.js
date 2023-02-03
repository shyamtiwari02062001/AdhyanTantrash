import React from 'react';
import {Text, View, LogBox, StyleSheet} from 'react-native';
import CardGrid from '../components/cardGrid';
LogBox.ignoreLogs(['new NativeEventEmitter']);
import Dashboard from '../constants/Dashboard/dashboard';
const Learn = () => {
  return (
    <View style={styles.container}>
      <CardGrid data={Dashboard} />
    </View>
  );
};
export default Learn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
