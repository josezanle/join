import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectedMarket from '../screens/selectedMarket/SelectedMarket';
import CategoriesScreen from '../screens/categoriesScreen/CategoriesScreen';

const Stack = createNativeStackNavigator();

export const MarketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SelectedMarket"
        component={SelectedMarket}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          title: 'Categorias',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};
