import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Game from '../components/game';
import Header from '../components/header';
import HeaderRight from '../components/headerRight';
import { VegetableGame } from '../constants/Game/vegetableGame';
const VegetableWordFormation = () => {
  const reduxGameData = useSelector(state => state.gameData.easyVegetabel);
  return (
    <View style={styles.body}>
      <Header title={'Easy'} right={<HeaderRight/>}/>
      <Game
        gameData={VegetableGame}
        gameName="@easyVegetable"
        reduxGameData={reduxGameData}
      />
    </View>
  );
};
export default VegetableWordFormation;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
