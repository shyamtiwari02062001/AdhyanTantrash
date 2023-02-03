import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Game from '../components/game';
import Header from '../components/header';
import HeaderRight from '../components/headerRight';
import { NumberBodyParts } from '../constants/Game/numbersBodyParts';
const NumberBody = () => {
  const reduxGameData = useSelector(state => state.gameData.numberBodyPart);
  return (
    <View style={styles.body}>
      <Header title={'Medium'} right={<HeaderRight/>}/>
      <Game
        gameData={NumberBodyParts}
        gameName="@numberBody"
        reduxGameData={reduxGameData}
      />
    </View>
  );
};
export default NumberBody;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
