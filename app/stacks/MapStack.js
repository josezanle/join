import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleNavBar from '../components/SingleNavBar';
import MapScreen from '../screens/mapScreen/MapScreen';
import PermissionsScreen from '../screens/permissionsScreen/PermissionsScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import LoadingScreen from '../screens/loadingScreen/LoadingScreen';
import JoinHeader from '../components/JoinHeader';

const Stack = createNativeStackNavigator();

export const MapStack = () => {
  const { permissions } = useContext(PermissionsContext)

  if (permissions.locationStatus === "unavailable") {
    return <LoadingScreen />
  }
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => {
          if (props.route.name === 'PermissionsScreen') {
            return <JoinHeader />;
          }
        },
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
