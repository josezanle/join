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
const isColor = "#52595F"

export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
      shifting={false}
      initialRouteName='SwipeStack'
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => {
            return (
              <MaterialIcons name="home" size={sizeIcon} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => {
            return (
              <MaterialIcons name="search" size={sizeIcon} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="SwipeStack"
        component={SwipeStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => {
            return (
              <MaterialIcons name="style" size={sizeIcon} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="MapStack"
        component={MapStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => {
            return (
              <MaterialIcons name="map" size={sizeIcon} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    borderTopColor: 'transparent',
    borderTopWidth: 2,
    elevation: 0,
    marginBottom: 10
  },
});
