import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Game from '../components/game';
import Header from '../components/header';
import HeaderRight from '../components/headerRight';
import { AnimalGame } from '../constants/Game/animalGame';
const AnimalWordFormation = () => {
  const reduxGameData = useSelector(state => state.gameData.easyAnimal);
  return (
    <View style={styles.body}>
      <Header title={'Easy'} right={<HeaderRight/>}/>
      <Game
        gameData={AnimalGame}
        gameName="@easyAnimal"
        reduxGameData={reduxGameData}
      />
    </View>
  );
};
export default AnimalWordFormation;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
