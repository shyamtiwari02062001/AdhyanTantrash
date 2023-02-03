import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';
const CustomeDrawer = props => {
  const navigation = useNavigation();
  const drawerStyle = {
    height: Dimensions.get('window').height - 245,
    borderTopWidth: 0.5,
    borderColor: '#fff',
    paddingTop: 5,
    paddingBottom: 5,
  };
  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      {...props}
      contentContainerStyle={{
        backgroundColor: '#000',
      }}>
      <View
        style={{
          height: 120,
          flexShrink: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit={true}
          style={{fontSize: 35, color: '#fff', flexShrink: 1}}>
          ADHAYANTANTRASH
        </Text>
      </View>
      <View style={useDeviceOrientation().portrait && drawerStyle}>
        <DrawerItemList {...props} />
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderTopColor: '#fff',
          backgroundColor: '#000',
          paddingBottom: 20,
        }}>
        <TouchableOpacity
          style={{
            height: 50,
            justifyContent: 'space-around',
            paddingLeft: 20,
          }}
          onPress={() => {
            navigation.navigate('profile');
          }}>
          <Text style={{fontSize: 25, color: '#fff'}}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            justifyContent: 'space-around',
            paddingLeft: 20,
          }}
          onPress={() => {
            navigation.navigate('about');
          }}>
          <Text style={{fontSize: 25, color: '#fff'}}>About Us</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
export default CustomeDrawer;
