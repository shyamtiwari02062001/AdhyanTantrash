import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/header';
import ImageGrid from '../components/imageGrid';
import { CombinedAnimals } from '../constants/animals/combined';
const AnimalPage = () => {
  return (
    <View style={styles.body}>
      <Header title="Animals" />
      <ImageGrid data={CombinedAnimals} />
    </View>
  );
};
export default AnimalPage;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
