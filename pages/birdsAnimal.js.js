import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Game from '../components/game';
import Header from '../components/header';
import HeaderRight from '../components/headerRight';
import { AnimalBird } from '../constants/Game/animalBirds';
const BirdsAnimalGame = () => {
  const reduxGameData = useSelector(state => state.gameData.animalBirds);
  return (
    <View style={styles.body}>
      <Header title={'Medium'} right={<HeaderRight/>}/>
      <Game
        gameData={AnimalBird}
        gameName="@birdAnimal"
        reduxGameData={reduxGameData}
      />
    </View>
  );
};
export default BirdsAnimalGame;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
