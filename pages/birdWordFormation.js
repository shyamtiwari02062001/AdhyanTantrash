import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Game from '../components/game';
import Header from '../components/header';
import HeaderRight from '../components/headerRight';
import { BirdGame } from '../constants/Game/birdGame';
const BirdWordFormation = () => {
  const reduxGameData = useSelector(state => state.gameData.easyBird);
  return (
    <View style={styles.body}>
      <Header title={'Easy'}  right={<HeaderRight/>}/>
      <Game
        gameData={BirdGame}
        gameName="@easyBird"
        reduxGameData={reduxGameData}
      />
    </View>
  );
};
export default BirdWordFormation;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
