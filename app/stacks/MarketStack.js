import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PropTypes from 'prop-types';
import SelectedMarket from '../screens/selectedMarket/SelectedMarket';
import CategoriesScreen from '../screens/categoriesScreen/CategoriesScreen';
import { getShop } from '../api/shops';
import { ActivityIndicator, View } from 'react-native';

const Stack = createNativeStackNavigator();

export const MarketStack = ({ route }) => {
  const [shop, setShop] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getShop(route.params.shopId).then(response => {
      setShop(response);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size={40} color="#199fdf" />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SelectedMarket"
        component={SelectedMarket}
        options={{ headerShown: false }}
        initialParams={{ shop }}
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

MarketStack.propTypes = {
  route: PropTypes.object,
};
