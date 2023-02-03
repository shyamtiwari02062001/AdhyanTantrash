import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Game from '../components/game';
import Header from '../components/header';
import HeaderRight from '../components/headerRight';
import { All } from '../constants/Game/all';
const AllGame = () => {
  const reduxGameData = useSelector(state => state.gameData.all);
  return (
    <View style={styles.body}>
      <Header title={'Hard'} right={<HeaderRight/>}/>
      <Game
        gameData={All}
        gameName="@all"
        reduxGameData={reduxGameData}
      />
    </View>
  );
};
export default AllGame;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 1,
  },
});
