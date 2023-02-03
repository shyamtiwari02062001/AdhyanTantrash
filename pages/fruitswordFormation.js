import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Game from '../components/game';
import Header from '../components/header';
import HeaderRight from '../components/headerRight';
import {FruitGame} from '../constants/Game/fruitGame';
const FruitWordFormation = () => {
  const reduxGameData = useSelector(state => state.gameData.easyFruit);
  return (
    <View style={styles.body}>
      <Header title={'Easy'} right={<HeaderRight/>}/>
      <Game
        gameData={FruitGame}
        gameName="@easyFruit"
        reduxGameData={reduxGameData}
      />
    </View>
  );
};
export default FruitWordFormation;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
