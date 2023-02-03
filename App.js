import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import DrawerScreen from './screens/drawerScreen';
import About from './screens/about';
import Alphabets from './pages/alphabets';
import Numbers from './pages/numbers';
import FruitPage from './pages/fruits';
import VegetablaPage from './pages/vegetable';
import AnimalPage from './pages/animals';
import BirdPage from './pages/birds';
import BodyParts from './pages/body';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import FruitWordFormation from './pages/fruitswordFormation';
import VegetableWordFormation from './pages/vegetablesWordFormation';
import EasyFruitGame from './store/reducer/gameData';
import AnimalWordFormation from './pages/animalWordFormation';
import BirdWordFormation from './pages/birdWordFormation';
import BodyWordFormation from './pages/bodyWordFormation';
import NumberWordFormation from './pages/numberWordFormation';
import NumberBody from './pages/numberBody';
import FruitVegetableGame from './pages/fruitsVegetable';
import BirdsAnimalGame from './pages/birdsAnimal.js';
import AllGame from './pages/allGame';
import ProfileScreen from './screens/profile.js';
const Stack = createStackNavigator();
const rootReducer = combineReducers({
  gameData: EasyFruitGame,
});
export default function App() {
  const store = createStore(rootReducer);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <Stack.Screen name="Home" component={DrawerScreen} />
          <Stack.Screen name="profile" component={ProfileScreen} />
          <Stack.Screen name="about" component={About} />
          <Stack.Screen name="Alphabets" component={Alphabets} />
          <Stack.Screen name="Numbers" component={Numbers} />
          <Stack.Screen name="Fruits" component={FruitPage} />
          <Stack.Screen name="vegetables" component={VegetablaPage} />
          <Stack.Screen name="animals" component={AnimalPage} />
          <Stack.Screen name="birds" component={BirdPage} />
          <Stack.Screen name="body" component={BodyParts} />
          <Stack.Screen
            name="fruitWordFormation"
            component={FruitWordFormation}
          />
          <Stack.Screen
            name="vegetablesWordFormation"
            component={VegetableWordFormation}
          />
          <Stack.Screen
            name="animalWordFormation"
            component={AnimalWordFormation}
          />
          <Stack.Screen
            name="birdWordFormation"
            component={BirdWordFormation}
          />
          <Stack.Screen
            name="bodyWordFormation"
            component={BodyWordFormation}
          />
          <Stack.Screen
            name="numberWordFormation"
            component={NumberWordFormation}
          />
          <Stack.Screen name="numberBodyPart" component={NumberBody} />
          <Stack.Screen name="fruitVegetable" component={FruitVegetableGame} />
          <Stack.Screen name="birdAnimal" component={BirdsAnimalGame} />
          <Stack.Screen name="all" component={AllGame} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
