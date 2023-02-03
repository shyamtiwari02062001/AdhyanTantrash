import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomeDrawer from '../components/customDrawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Learn from './learn';
import {useDispatch, useSelector} from 'react-redux';
import {useLayoutEffect} from 'react';
import {FruitGame} from '../constants/Game/fruitGame';
import {Text} from 'react-native';
import {
  setAll,
  setAnimalBirds,
  setEasyAnimal,
  setEasyBird,
  setEasyBody,
  setEasyFruit,
  setEasyNumber,
  setEasyVegetable,
  setFruitVegetable,
  setNumberBodyParts,
  setProfile,
} from '../store/actions/gameData';
import {VegetableGame} from '../constants/Game/vegetableGame';
import {AnimalGame} from '../constants/Game/animalGame';
import {BirdGame} from '../constants/Game/birdGame';
import {BodyGame} from '../constants/Game/bodyGame';
import {NumbersGame} from '../constants/Game/numbers';
import {storeData} from '../functions/storeData';
import PlayLearn from './playLearn';
import {NumberBodyParts} from '../constants/Game/numbersBodyParts';
import {FruitVegetable} from '../constants/Game/fruitVegetable';
import {AnimalBird} from '../constants/Game/animalBirds';
import {All} from '../constants/Game/all';
import HeaderRight from '../components/headerRight';
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  const dispatch = useDispatch();
  const reduxGameData = useSelector(state => state.gameData.profile);
  const data = [
    {
      name: reduxGameData[0].name,
      attempt: reduxGameData[0].attempt,
      games: reduxGameData[0].games,
      point: reduxGameData[0].point,
    },
  ];
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@easyFruit');
      if (jsonValue !== null) {
        dispatch(setEasyFruit(JSON.parse(jsonValue)));
      } else {
        storeData('@easyFruit', FruitGame);
        dispatch(setEasyFruit(FruitGame));
      }
      const jsonValue1 = await AsyncStorage.getItem('@easyVegetable');
      if (jsonValue1 !== null) {
        dispatch(setEasyVegetable(JSON.parse(jsonValue1)));
      } else {
        storeData('@easyVegetable', VegetableGame);
        dispatch(setEasyVegetable(VegetableGame));
      }
      const jsonValue2 = await AsyncStorage.getItem('@easyAnimal');
      if (jsonValue2 !== null) {
        dispatch(setEasyAnimal(JSON.parse(jsonValue2)));
      } else {
        storeData('@easyAnimal', AnimalGame);
        dispatch(setEasyAnimal(AnimalGame));
      }
      const jsonValue3 = await AsyncStorage.getItem('@easyBird');
      if (jsonValue3 !== null) {
        dispatch(setEasyBird(JSON.parse(jsonValue3)));
      } else {
        storeData('@easyBird', BirdGame);
        dispatch(setEasyBird(BirdGame));
      }
      const jsonValue4 = await AsyncStorage.getItem('@easyBody');
      if (jsonValue4 !== null) {
        dispatch(setEasyBody(JSON.parse(jsonValue4)));
      } else {
        storeData('@easyBody', BodyGame);
        dispatch(setEasyBody(BodyGame));
      }
      const jsonValue5 = await AsyncStorage.getItem('@easyNumber');
      if (jsonValue5 !== null) {
        dispatch(setEasyNumber(JSON.parse(jsonValue5)));
      } else {
        storeData('@easyNumber', NumbersGame);
        dispatch(setEasyNumber(NumbersGame));
      }

      const jsonValue6 = await AsyncStorage.getItem('@numberBody');
      if (jsonValue6 !== null) {
        dispatch(setNumberBodyParts(JSON.parse(jsonValue6)));
      } else {
        storeData('@numberBody', NumberBodyParts);
        dispatch(setNumberBodyParts(NumberBodyParts));
      }
      const jsonValue7 = await AsyncStorage.getItem('@fruitVegetable');
      if (jsonValue7 !== null) {
        dispatch(setFruitVegetable(JSON.parse(jsonValue7)));
      } else {
        storeData('@fruitVegetable', FruitVegetable);
        dispatch(setFruitVegetable(FruitVegetable));
      }
      const jsonValue8 = await AsyncStorage.getItem('@birdAnimal');
      if (jsonValue8 !== null) {
        dispatch(setAnimalBirds(JSON.parse(jsonValue8)));
      } else {
        storeData('@birdAnimal', AnimalBird);
        dispatch(setAnimalBirds(AnimalBird));
      }
      const jsonValue9 = await AsyncStorage.getItem('@all');
      if (jsonValue9 !== null) {
        dispatch(setAll(JSON.parse(jsonValue9)));
      } else {
        storeData('@all', All);
        dispatch(setAll(All));
      }
      const jsonValue10 = await AsyncStorage.getItem('@profile');
      if (jsonValue10 !== null) {
        dispatch(setProfile(JSON.parse(jsonValue10)));
      } else {
        storeData('@profile', data);
        dispatch(setProfile(data));
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };
  useLayoutEffect(() => {
    getData();
  }, [1]);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: () => <HeaderRight />,
        headerTitleStyle: {
          fontSize: 30,
        },
        drawerStyle: {
          elevation: 20,
          shadowColor: '#fff',
          shadowOffset: {width: 2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        },
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#000',
          height: 60,
        },
        drawerLabelStyle: {
          fontSize: 25,
        },
        drawerActiveTintColor: '#FFF',
        drawerInactiveTintColor: '#FFF',
      }}
      drawerContent={props => <CustomeDrawer {...props} />}
      initialRouteName="LEARN">
      <Drawer.Screen
        name="LEARN"
        options={{
          headerRight: () => {},
        }}
        component={Learn}
      />
      <Drawer.Screen name="PLAY & LEARN" component={PlayLearn} />
      {/* <Drawer.Screen name="Mediun Word Formation" component={PlayLearn} />
      <Drawer.Screen name="Hard Word Formation" component={PlayLearn} /> */}
    </Drawer.Navigator>
  );
};
export default DrawerScreen;
