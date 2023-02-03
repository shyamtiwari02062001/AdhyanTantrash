import React from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import ImageGrid from '../components/imageGrid';
import Header from '../components/header';
import { CombinedBody } from '../constants/body/combined';
const BodyParts = () => {
  return (
    <View style={styles.body}>
      <Header title="Body Parts" />
      <ImageGrid data={CombinedBody} />
    </View>
  );
};
export default BodyParts;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
