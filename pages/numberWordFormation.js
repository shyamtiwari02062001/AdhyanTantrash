import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Game from '../components/game';
import Header from '../components/header';
import HeaderRight from '../components/headerRight';
import { NumbersGame } from '../constants/Game/numbers';
const NumberWordFormation = () => {
  const reduxGameData = useSelector(state => state.gameData.easyNumber);
  return (
    <View style={styles.body}>
      <Header title={'Easy'} right={<HeaderRight/>}/>
      <Game
        gameData={NumbersGame}
        gameName="@easyNumber"
        reduxGameData={reduxGameData}
      />
    </View>
  );
};
export default NumberWordFormation;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
