import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from '../screens/mapScreen/MapScreen';
import PermissionsScreen from '../screens/permissionsScreen/PermissionsScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import LoadingScreen from '../screens/loadingScreen/LoadingScreen';

const Stack = createNativeStackNavigator();

export const MapStack = () => {
  const { permissions } = useContext(PermissionsContext)

  if (permissions.locationStatus === "unavailable") {
    return <LoadingScreen />
  }
  return (
    <Stack.Navigator
      screenOptions={{

        headerShown: false,
      }}
    >
      {
        (
          permissions.locationStatus === "granted"
        )
          ? <Stack.Screen
            name="MapScreen"
            component={MapScreen}
          />
          : <Stack.Screen
            name="PermissionsScreen"
            component={PermissionsScreen}
          />
      }






    </Stack.Navigator>
  );
};
