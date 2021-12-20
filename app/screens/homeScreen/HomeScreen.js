import React from 'react';
import { StyleSheet, View } from 'react-native';
import JoinHeader from '../../components/JoinHeader';
import Especials from '../selectedMarket/components/Especials';
import MarketHeader from '../selectedMarket/components/MarketHeader';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MarketHeader />
      <Especials />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  }
})

export default HomeScreen;