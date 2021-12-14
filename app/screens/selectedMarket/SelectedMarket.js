import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../style/globalStyles';
import Especials from './components/Especials';
import MarketHeader from './components/MarketHeader';

const SelectedMarket = () => {
  return (
    <View style={[globalStyles.container]}>
      <MarketHeader />
      <Especials />
    </View>
  );
};

export default SelectedMarket;
