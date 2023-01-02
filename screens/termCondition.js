import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/header';
const TermsCondition = () => {
  return (
    <>
      <Header title={"Terms Condition"} />
      <View style={styles.container}>
        <Text>Terms Condition</Text>
      </View>
    </>
  );
};
export default TermsCondition;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
