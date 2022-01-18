import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleNavBar from '../components/SingleNavBar';
import WelcomeScreen from '../screens/welcomeScreen/WelcomeScreen';
import { BottomTab } from './BottomTab';
import JoinHeader from '../components/JoinHeader';
import SplashScreen from '../screens/welcomeScreen/SplashScreen';
import { ThemeContext } from '../context/themeContext';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: theme.colors.background,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
