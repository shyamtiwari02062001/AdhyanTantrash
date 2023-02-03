import {Text, View, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
const HeaderRight = () => {
  const reduxGameData = useSelector(state => state.gameData.profile);
  return (
    <View style={styles.text}>
      <Text style={styles.point}>{reduxGameData[0].point}</Text>
      <Image
        source={require('../assets/images/coin.png')}
        style={{height: 30, width: 30}}
      />
    </View>
  );
};
export default HeaderRight;
const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    fontSize: 28,
    color: '#fff',
  },
  point: {
    fontSize: 40,
    color: '#fff',
    marginRight:5
  },
});
