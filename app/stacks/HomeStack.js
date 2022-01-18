import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTab } from './BottomTab';
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
