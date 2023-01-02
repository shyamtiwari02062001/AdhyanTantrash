import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/header';
const PrivacyPolicy = () => {
  return (
    <>
      <Header title={"Privacy Policy"} />
      <View style={styles.container}>
        <Text>Privacy Policy</Text>
      </View>
    </>
  );
};
export default PrivacyPolicy;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
