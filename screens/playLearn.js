import React from 'react';
import {Text, View, LogBox, StyleSheet} from 'react-native';
import CardGrid from '../components/cardGrid';
import { CombinedGame } from '../constants/Game/combined';
LogBox.ignoreLogs(['new NativeEventEmitter']);
const PlayLearn = () => {
  return (
    <View style={styles.container}>
      <CardGrid data={CombinedGame} />
    </View>
  );
};
export default PlayLearn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
