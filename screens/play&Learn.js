import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
const PlayLearn = () => {
  return (
    <View style={styles.container}>
      <Text>PLAY & LEARN</Text>
    </View>
  );
};
export default PlayLearn;
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000'
    }
})