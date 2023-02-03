import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {CombinedNumbers} from '../constants/Numbers/combined';
import Button from '../components/button';
import Grid from '../components/grid';
import Header from '../components/header';
const Numbers = () => {
  return (
    <View style={styles.body}>
      <Header title="Numbers" />
      <Grid data={CombinedNumbers} />
    </View>
  );
};
export default Numbers;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
