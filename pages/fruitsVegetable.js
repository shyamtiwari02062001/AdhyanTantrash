import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Game from '../components/game';
import Header from '../components/header';
import HeaderRight from '../components/headerRight';
import { FruitVegetable } from '../constants/Game/fruitVegetable';
const FruitVegetableGame = () => {
  const reduxGameData = useSelector(state => state.gameData.fruitVegetable);
  return (
    <View style={styles.body}>
      <Header title={'Medium'}  right={<HeaderRight/>}/>
      <Game
        gameData={FruitVegetable}
        gameName="@fruitVegetable"
        reduxGameData={reduxGameData}
      />
    </View>
  );
};
export default FruitVegetableGame;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
