import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Read from '../functions/read';
const ImageButton = ({text, speakText, image}) => {
  const val=text.split(' ');

  return (
    <TouchableOpacity style={styles.body} onPress={() => Read(speakText)}>
      <Image
        source={image}
        style={{
          borderRadius: 20,
          height: 150,
          width: 150,
        }}
      />
      <Text style={styles.text}>{val[0]}</Text>
      <Text style={styles.text1}>{val[1]}</Text>
      <Text style={styles.text2}>{val[2]}</Text>
    </TouchableOpacity>
  );
};
export default ImageButton;
const styles = StyleSheet.create({
  body: {
    padding: 15,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
  },  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop:5, color: 'yellow'
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop:5, color: 'cyan'
  },
  text2: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop:5, color: 'pink'
  },
});
