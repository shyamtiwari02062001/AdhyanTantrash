import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/header';
import ImageGrid from '../components/imageGrid';
import { CombinedBirds } from '../constants/birds/combined';
const BirdPage = () => {
  return (
    <View style={styles.body}>
      <Header title="Birds" />
      <ImageGrid data={CombinedBirds} />
    </View>
  );
};
export default BirdPage;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
