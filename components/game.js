import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeData} from '../functions/storeData';
import {
  setAll,
  setEasyAnimal,
  setEasyBird,
  setEasyBody,
  setEasyFruit,
  setEasyNumber,
  setEasyVegetable,
  setProfile,
} from '../store/actions/gameData';
const Game = ({gameData, gameName, reduxGameData}) => {
  const dispatch = useDispatch();
  const gameProfile = useSelector(state => state.gameData.profile);
  let [indexForGame, setIndex] = useState(0);
  let [alphabets, setAlphabet] = useState([]);
  let [answeres, setAnswers] = useState([]);
  let [success, setSuccess] = useState('');
  let [count, setCount] = useState(0);
  let [correct, setCorrect] = useState([]);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }
  useLayoutEffect(() => {
    if (reduxGameData.length !== 0) {
      const randomNumber = Math.floor(Math.random() * reduxGameData.length);
      setAlphabet(shuffleArray(reduxGameData[randomNumber].jumbledWords));
      setCorrect(reduxGameData[randomNumber].correctWord);
      setIndex(randomNumber);
    }
  }, [1]);
  const updateRedux = value => {
    if (gameName === '@easyFruit') {
      dispatch(setEasyFruit(value));
    } else if (gameName === '@easyVegetable') {
      dispatch(setEasyVegetable(value));
    } else if (gameName === '@easyAnimal') {
      dispatch(setEasyAnimal(value));
    } else if (gameName === '@easyBird') {
      dispatch(setEasyBird(value));
    } else if (gameName === '@easyBody') {
      dispatch(setEasyBody(value));
    } else if (gameName === '@easyNumber') {
      dispatch(setEasyNumber(value));
    } else if (gameName === '@numberBody') {
      dispatch(setEasyNumber(value));
    } else if (gameName === '@fruitVegetable') {
      dispatch(setEasyNumber(value));
    } else if (gameName === '@birdAnimal') {
      dispatch(setEasyNumber(value));
    } else if (gameName === '@all') {
      dispatch(setAll(value));
    }
  };
  const getRandomNumber = async () => {
    const value = reduxGameData.filter(
      data => data.word != reduxGameData[indexForGame].word,
    );

    updateRedux(value);
    if (value.length !== 0) {
      storeData(gameName, value);
      const randomNumber = Math.floor(Math.random() * value.length);
      setAlphabet(shuffleArray(value[randomNumber].jumbledWords));
      setCorrect(value[randomNumber].correctWord);
      setIndex(randomNumber);
      setSuccess('');
      setCount(0);
      setAnswers([]);
    } else {
      const jsonValue = JSON.stringify([]);
      await AsyncStorage.setItem(gameName, jsonValue);
    }
  };

  const change = index => {
    if (correct.length > count) {
      let val = alphabets[index];
      const data = alphabets.filter((_, i) => i != index);
      setAlphabet(shuffleArray(data));
      answeres.push(val);
      setAnswers(answeres);
      Check();
      setCount(++count);
    }
  };

  const Check = () => {
    const data = [
      {
        name: gameProfile[0].name,
        attempt: Number(gameProfile[0].attempt) + 1,
        games: Number(gameProfile[0].games) + 1,
        point: Number(gameProfile[0].point) + 10,
      },
    ];
    const data1 = [
      {
        name: gameProfile[0].name,
        attempt: Number(gameProfile[0].attempt) + 1,
        games: Number(gameProfile[0].games),
        point: Number(gameProfile[0].point),
      },
    ];
    let count = 0;
    if (answeres.length === correct.length) {
      for (let i = 0; i < answeres.length; i++) {
        if (correct[i] === answeres[i]) {
          setSuccess('true');
        } else {
          setSuccess('wrong');
          count = 1;
          dispatch(setProfile(data1));
          storeData('@profile', data1);
          break;
        }
      }
      if (count === 0) {
        dispatch(setProfile(data));
        storeData('@profile', data);
      }
    }
  };
  const changeAnswere = index => {
    if (count >= 1) {
      setCount(--count);
      let val = answeres[index];
      const data = answeres.filter((_, i) => i != index);
      setAnswers(data);
      alphabets.push(val);
      setAlphabet(shuffleArray(alphabets));
      setSuccess('false');
    }
  };
  const restart = () => {
    const data = [
      {
        name: gameProfile[0].name,
        attempt: Number(gameProfile[0].attempt) + 1,
        games: Number(gameProfile[0].games) + 1,
        point: gameProfile[0].point,
      },
    ];
    updateRedux(gameData);
    storeData(gameName, gameData);
    const randomNumber = Math.floor(Math.random() * gameData.length);
    dispatch(setProfile(data));
    storeData('@profile', data);
    setIndex(randomNumber);
    setAlphabet(shuffleArray(gameData[randomNumber].jumbledWords));
    setCorrect(gameData[randomNumber].correctWord);
    setSuccess('');
    setCount(0);
    setAnswers([]);
  };
  return useDeviceOrientation().portrait ? (
    reduxGameData.length !== 0 ? (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            width: Dimensions.get('window').width,
            alignItems: 'center',
            backgroundColor: '#000',
          }}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#050637',
              width: Dimensions.get('window').width,
              flex: 0.5,
              Top: '20%',
              borderBottomLeftRadius: 250,
              borderBottomRightRadius: 250,
            }}>
            <View
              style={{
                flex: 0.6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                {reduxGameData[indexForGame].sanskritHint}
              </Text>
              <Text style={{fontSize: 20, color: 'white'}}>
                {reduxGameData[indexForGame].englishHint}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  flexShrink: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {alphabets.map((alphabet, index) => (
                  <TouchableOpacity key={index} onPress={() => change(index)}>
                    <Text style={styles.text}>{alphabet}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#ffcc00',
                borderRadius: 1000000,
                position: 'absolute',
                top: '70%',
                height: Dimensions.get('window').height * 0.2,
                width: Dimensions.get('window').height * 0.2,
                padding: 10,
              }}>
              {reduxGameData[indexForGame].hasOwnProperty('image') ? (
                <Image
                  source={
                    gameData[
                      gameData.findIndex(
                        p => p.word == reduxGameData[indexForGame].word,
                      )
                    ].image
                  }
                  style={{
                    width: '100%',
                    borderRadius: 10,
                    height: undefined,
                    aspectRatio: 1,
                  }}
                />
              ) : (
                <View
                  style={{
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 100, color: 'red'}}>
                    {reduxGameData[indexForGame].number}
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View
            style={{
              flex: 0.57,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              {answeres.length != 0 ? (
                answeres.map((answere, index) => (
                  <TouchableOpacity
                    disabled={success === 'true'}
                    key={index}
                    onPress={() => changeAnswere(index)}
                    style={{padding: 2}}>
                    <View
                      style={{
                        borderColor: 'white',
                        borderWidth: 2,
                        borderRadius: 10,
                      }}>
                      <Text style={[styles.text]}>{answere}</Text>
                    </View>
                  </TouchableOpacity>
                ))
              ) : (
                <Text>Tap on the alphabets at top to form word</Text>
              )}
            </View>
            {success === 'true' && (
              <TouchableOpacity onPress={() => getRandomNumber()}>
                <View
                  style={{
                    marginTop: '10%',
                    padding: 20,
                    backgroundColor: '#050637',
                    borderRadius: 25,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'green',
                      textAlign: 'center',
                      marginBottom: 2,
                      fontWeight: 'bold',
                    }}>
                    उचित (Right)
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'green',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    Next
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            {success === 'wrong' && (
              <View style={{marginTop: '7%'}}>
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: 'center',
                    width: '70%',
                    color: '#fc0124',
                    backgroundColor: '#050637',
                    padding: 11,
                    fontWeight: 'bold',
                    borderRadius: 50,
                  }}>
                  दोषपूर्ण (Wrong)
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    ) : (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <Text style={{fontSize: 40}}>Reached The End Of Game</Text>
        <TouchableOpacity
          style={{
            marginTop: '20%',
            borderWidth: 2,
            borderRadius: 20,
            borderColor: '#fff',
            padding: 20,
          }}
          onPress={() => restart()}>
          <Text style={{fontSize: 32}}>Restart</Text>
        </TouchableOpacity>
      </View>
    )
  ) : reduxGameData.length !== 0 ? (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#050637',
          height:
            Dimensions.get('window').height - StatusBar.currentHeight - 60,
          borderTopRightRadius: 250,
          borderBottomRightRadius: 250,
          flex: 0.4,
          justifyContent: 'center',
          paddingRight: 100,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
          }}>
          {reduxGameData[indexForGame].sanskritHint}
        </Text>
        <Text style={{fontSize: 20, color: 'white'}}>
          {reduxGameData[indexForGame].englishHint}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            flexShrink: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {alphabets.map((alphabet, index) => (
            <TouchableOpacity key={index} onPress={() => change(index)}>
              <Text style={styles.text}>{alphabet}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#ffcc00',
          borderRadius: 500,
          marginLeft: -100,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          flex: 0.2,
          padding: 10,
        }}>
        {reduxGameData[indexForGame].hasOwnProperty('image') ? (
          <Image
            source={
              gameData[
                gameData.findIndex(
                  p => p.word == reduxGameData[indexForGame].word,
                )
              ].image
            }
            style={{
              borderRadius: 20,
              width: '100%',
              height: undefined,
              aspectRatio: 1,
            }}
          />
        ) : (
          <View
            style={{
              width: '100%',
              height: undefined,
              aspectRatio: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 100, color: 'red'}}>
              {reduxGameData[indexForGame].number}
            </Text>
          </View>
        )}
      </View>
      <View style={{flex: 0.4, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            flexShrink: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {answeres.length != 0 ? (
            answeres.map((answere, index) => (
              <TouchableOpacity
                disabled={success === 'true'}
                key={index}
                onPress={() => changeAnswere(index)}
                style={{padding: 2}}>
                <View
                  style={{
                    borderColor: 'white',
                    borderWidth: 2,
                    borderRadius: 10,
                  }}>
                  <Text style={[styles.text]}>{answere}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text>Tap on the alphabets at top to form word</Text>
          )}
        </View>
        {success === 'true' && (
          <TouchableOpacity
            style={{marginTop: '7%'}}
            onPress={() => getRandomNumber()}>
            <View
              style={{
                  borderRadius: 25,
                  padding: 20,
                  width: '40%',
                  backgroundColor: '#050637',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'green',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom:2,
                }}>
                उचित (Right)
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: 'green',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
               NEXT
              </Text>
            </View>
          </TouchableOpacity>
        )}
        {success === 'wrong' && (
          <View style={{marginTop: '7%'}}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                width: '70%',
                color: '#fc0124',
                backgroundColor: '#050637',
                padding: 11,
                fontWeight: 'bold',
                borderRadius: 50,
              }}>
              दोषपूर्ण (Wrong)
            </Text>
          </View>
        )}
      </View>
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Text style={{fontSize: 40}}>Reached The End Of Game</Text>
      <TouchableOpacity
        style={{
          marginTop: '20%',
          borderWidth: 2,
          borderRadius: 20,
          borderColor: '#fff',
          padding: 20,
        }}
        onPress={() => restart()}>
        <Text style={{fontSize: 32}}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
    color: 'white',
  },
});
export default Game;
