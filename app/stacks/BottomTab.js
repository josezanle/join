import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Dimensions, StyleSheet } from 'react-native';
import SearchScreen from '../screens/searchScreen/SearchScreen';
import { MapStack } from './MapStack';
import SwipeStack from './SwipeStack';
import HomeScreen from '../screens/homeScreen/HomeScreen';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');
const sizeIcon = width * 0.08;
const activeColor = "#13181C"
const inActiveColor = "silver"


export const BottomTab = () => {

  return (
    <Tab.Navigator

      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarHideOnKeyboard: true,
      }}
      shifting={false}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons name="home" size={sizeIcon} color={focused ? activeColor : inActiveColor} />
            );
          },
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons name="search" size={sizeIcon} color={focused ? activeColor : inActiveColor} />
            );
          },
        }}
      />
      <Tab.Screen
        name="SwipeStack"
        component={SwipeStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons name="style" size={sizeIcon} color={focused ? activeColor : inActiveColor} />
            );
          },
        }}
      />
      <Tab.Screen
        name="MapStack"
        component={MapStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons name="map" size={sizeIcon} color={focused ? activeColor : inActiveColor} />
            );
          },
        }}
      />
    </Tab.Navigator >
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    height: 50,
    paddingTop: 7,
    elevation: 0,
  },
});
