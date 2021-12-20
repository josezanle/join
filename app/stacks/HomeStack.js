import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleNavBar from '../components/SingleNavBar';
import WelcomeScreen from '../screens/welcomeScreen/WelcomeScreen';
import { BottomTab } from './BottomTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import JoinHeader from '../components/JoinHeader';
import SplashScreen from '../screens/welcomeScreen/SplashScreen';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {

  useEffect(() => {
    setStringValue = async () => {
      try {
        await AsyncStorage.setItem('show', "yes")
      } catch (e) {
        console.log(e)
      }

      console.log('Hecho Capitan')
    }
  }, [])

  return (
    <Stack.Navigator
      screenOptions={{
        header: props => {
          if (props.route.name === 'WelcomeScreen') {
            return <JoinHeader />;
          }
        },
      }}>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: true,
          contentStyle: {
            backgroundColor: 'white',
          },
        }}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};
