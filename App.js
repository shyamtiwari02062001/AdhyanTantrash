import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import DrawerScreen from './screens/drawerScreen';
import PrivacyPolicy from './screens/privacyPolicy';
import TermsCondition from './screens/termCondition';
import About from './screens/about';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'transparentModal',
          animationTypeForReplace: 'push',
          animation:'slide_from_right'
        }}>
        <Stack.Screen  name="Home" component={DrawerScreen} />
        <Stack.Screen name="privacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="termsCondition" component={TermsCondition} />
        <Stack.Screen name="about" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
