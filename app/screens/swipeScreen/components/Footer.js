import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CircularButton from '../../../components/CircularButton';

export default function Footer({ handleChoice }) {
  const navigation = useNavigation();

  const goToMarket = () => {
    navigation.navigate('MarketStack', {
      screen: 'SelectedMarket',
    });
  };

  return (
    <View style={styles.container}>
      <CircularButton
        iconName="close"
        size={30}
        color={'#1c1c1c'}
        onPress={() => handleChoice(1)}
      />
      <CircularButton
        iconName="navigate-next"
        size={30}
        color={'#1c1c1c'}
        onPress={goToMarket}
      />
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    width: 170,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 30,
  },
});
