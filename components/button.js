import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import Read from '../functions/read';
const Button = ({text, speakText}) => {
  const val = text.split(' ');
  return (
    <TouchableOpacity style={styles.body} onPress={() => Read(speakText)}>
      {val.length === 3 ? (
        <>
          <Text style={styles.text}>{val[0]}</Text>
          <Text style={styles.text1}>{val[1]}</Text>
          <Text style={styles.text2}>{val[2]}</Text>
        </>
      ) : (
        <Text style={styles.simpleText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
export default Button;
const styles = StyleSheet.create({
  body: {
    padding: 15,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
  },
  simpleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    color: '#fff',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    color: 'yellow',
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    color: 'cyan',
  },
  text2: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    color: 'pink',
  },
});
