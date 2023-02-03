import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Header = ({title, right}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../assets/images/left-arrow.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <View style={{position: 'absolute', right: 10}}>{right}</View>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowColor: '#fff',
  },
  image: {
    tintColor: '#fff',
    height: 25,
    width: 25,
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
  button: {
    position: 'absolute',
    left: 10,
  },
});
