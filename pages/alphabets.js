import React from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import Grid from '../components/grid';
import Header from '../components/header';
import {CombinedAlphabet} from '../constants/Alphabets/combined';
const Alphabets = () => {
  return (
    <View style={styles.body}>
      <Header title="Alphabets" />
      <Grid data={CombinedAlphabet} />
    </View>
  );
};
export default Alphabets;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#121212',
    flex: 1,
  },
});
