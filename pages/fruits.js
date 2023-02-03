import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/header';
import ImageGrid from '../components/imageGrid';
import {CombinedFruits} from '../constants/fruits/combined';
const FruitPage = () => {
  return (
    <View style={styles.body}>
      <Header title="Fruits" />
      <ImageGrid data={CombinedFruits} />
    </View>
  );
};
export default FruitPage;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
