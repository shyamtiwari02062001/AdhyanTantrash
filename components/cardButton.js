import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const CardButton = ({text, navigate, image}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.body}
      onPress={() => {
        navigation.navigate(navigate);
      }}>
      <Image source={image} style={{height: 150, width: 150}} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
export default CardButton;
const styles = StyleSheet.create({
  body: {
    padding: 15,
    backgroundColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#fff',
  },
  text: {
    padding: 5,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center', color: '#fff'
  },
});
