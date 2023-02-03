import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Game from '../components/game';
import Header from '../components/header';
import HeaderRight from '../components/headerRight';
import { BodyGame } from '../constants/Game/bodyGame';
const BodyWordFormation = () => {
  const reduxGameData = useSelector(state => state.gameData.easyBody);
  return (
    <View style={styles.body}>
      <Header title={'Easy'} right={<HeaderRight/>} />
      <Game
        gameData={BodyGame}
        gameName="@easyBody"
        reduxGameData={reduxGameData}
      />
    </View>
  );
};
export default BodyWordFormation;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
