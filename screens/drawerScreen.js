import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomeDrawer from '../components/customDrawer';
import Learn from './learn';
import PlayLearn from './play&Learn';
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
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
        },
        drawerLabelStyle: {
          fontSize: 25,
        },
        drawerActiveTintColor: '#FFF',
        drawerInactiveTintColor: '#FFF',
      }}
      drawerContent={props => <CustomeDrawer {...props} />}
      initialRouteName="LEARN">
      <Drawer.Screen name="LEARN" component={Learn} />
      <Drawer.Screen name="PLAY & LEARN" component={PlayLearn} />
    </Drawer.Navigator>
  );
};
export default DrawerScreen;
