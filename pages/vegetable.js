import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/header';
import ImageGrid from '../components/imageGrid';
import { CombinaedVegetables } from '../constants/vegetables/combined';
const VegetablaPage = () => {
  return (
    <View style={styles.body}>
      <Header title="Vegetables" />
      <ImageGrid data={CombinaedVegetables} />
    </View>
  );
};
export default VegetablaPage;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
