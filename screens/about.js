import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/header';
const About = () => {
  return (
    <>
      <Header title={"About"} />
      <View style={styles.container}>
        <Text>About</Text>
      </View>
    </>
  );
};
export default About;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
