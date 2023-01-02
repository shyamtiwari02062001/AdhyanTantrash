import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
const Learn = () => {
  return (
    <View style={styles.container}>
      <Text>LEARN</Text>
    </View>
  );
};
export default Learn;
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000'
    }
})