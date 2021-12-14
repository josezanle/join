import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PermissionsProvider } from './app/context/PermissionsContext';
import { HomeStack } from './app/stacks/HomeStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const AppState = ({ children }) => {
    return (
      <PermissionsProvider>
        {children}
      </PermissionsProvider>
    )
  }

  return (
    <NavigationContainer>
      <AppState>
        <HomeStack />
      </AppState>
    </NavigationContainer>
  );
}
