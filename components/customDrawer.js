import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
const CustomeDrawer = props => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      {...props}
      contentContainerStyle={{
        backgroundColor: '#000',
        height: Dimensions.get('window').height,
      }}>
      <View
        style={{height: 120, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 35}}>ADHAYANTANTRASH</Text>
      </View>
      <View
        style={{
          flex: 1,
          borderTopWidth: 0.5,
          borderColor: '#fff',
          paddingTop: 5,
          paddingBottom: 5,
        }}>
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
            navigation.navigate('privacyPolicy');
          }}>
          <Text style={{fontSize: 25}}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            justifyContent: 'space-around',
            paddingLeft: 20,
          }}
          onPress={() => {
            navigation.navigate('termsCondition');
          }}>
          <Text style={{fontSize: 25}}>Terms & Conditions</Text>
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
          <Text style={{fontSize: 25}}>About Us</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
export default CustomeDrawer;
