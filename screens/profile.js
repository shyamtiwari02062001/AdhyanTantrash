import React, {useState, useRef, useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../components/header';
import {storeData} from '../functions/storeData';
import {setProfile} from '../store/actions/gameData';
const h = Dimensions.get('window').height;
const ProfileScreen = () => {
  const popAnim = useRef(new Animated.Value(h * 2)).current;

  const reduxGameData = useSelector(state => state.gameData.profile);
  const [name, setName] = useState(reduxGameData[0].name);
  const [isFocused, setIsFocused] = useState(false);
  const [accuracy, setAccuracy] = useState('');
  useLayoutEffect(() => {
    const value = (reduxGameData[0].games * 100) / reduxGameData[0].attempt;
    if (value >= 90) {
      setAccuracy('Excellent');
    } else if (value >= 75 && value < 90) {
      setAccuracy('Very Good');
    } else if (value >= 65 && value < 75) {
      setAccuracy('Good');
    } else if (value >= 45 && value < 65) {
      setAccuracy('Poor');
    } else {
      setAccuracy('Very Poor');
    }
  });
  const dispath = useDispatch();
  const data = [
    {
      name: name,
      attempt: reduxGameData[0].attempt,
      games: reduxGameData[0].games,
      point: reduxGameData[0].point,
    },
  ];
  const popIn = () => {
    Animated.timing(popAnim, {
      toValue: h * 0.57,
      duration: 300,
      useNativeDriver: true,
    }).start(popOut());
  };

  const popOut = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: h * 2,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 1000);
  };
  return (
    <>
      <Header
        title={'Profile'}
        right={
          <TouchableOpacity
            onPress={() => {
              dispath(setProfile(data));
              storeData('@profile', data);
              popIn();
            }}>
            <Text style={styles.buttonText}>SAVE </Text>
          </TouchableOpacity>
        }
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.imageView}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.image}
          />
          <Animated.View
            style={[
              styles.toastContainer,
              {
                transform: [{translateY: popAnim}],
              },
            ]}>
            <View style={styles.toastRow}>
              <View style={styles.circle} />
              <Text style={styles.toastText}>Profile Updated!</Text>
            </View>
          </Animated.View>
        </View>

        {isFocused ? (
          <TextInput
            autoFocus={isFocused}
            value={name}
            onBlur={() => {
              setIsFocused(false);
            }}
            onChangeText={val => {
              setName(val);
            }}
            style={styles.text}
          />
        ) : (
          <TouchableWithoutFeedback onPress={() => setIsFocused(true)}>
            <Text style={styles.text}>Name : {name}</Text>
          </TouchableWithoutFeedback>
        )}

        <View style={styles.text}>
          <Text style={styles.point}>
            Total Points : {reduxGameData[0].point}
          </Text>
          <Image
            source={require('../assets/images/coin.png')}
            style={{height: 30, width: 30}}
          />
        </View>
        <Text style={styles.text}>
          Total games played : {reduxGameData[0].games}
        </Text>
        <Text style={styles.text}>
          Total attempt : {reduxGameData[0].attempt}
        </Text>
        <Text style={styles.text}>Accuracy : {accuracy}</Text>
      </ScrollView>
    </>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  buttonText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: '#000',
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  text: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 28,
    margin: 20,
    padding: 20,
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 0.2,
    borderRadius: 20,
  },
  image: {
    height: 200,
    width: 200,
  },
  imageView: {
    alignItems: 'center',
    borderWidth: 2,
    padding: 30,
    borderBottomColor: '#fff',
  },
  toastContainer: {
    zIndex: 1,
    marginLeft: '10%',
    width: '80%',
    height: 40,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    color: '#121212',
  },
  toastRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toastText: {
    fontSize: 30,
    color: '#121212',
    textAlign: 'center',
  },
  point: {
    fontSize: 28,
    color: '#fff',
    marginRight: 5,
  },
});
