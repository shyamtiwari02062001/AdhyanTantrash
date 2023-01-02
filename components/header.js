import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Header = ({title}) => {
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
  },
  image: {
    tintColor: '#fff',
    height: 30,
    width: 30,
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
