import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { globalStyles } from '../../style/globalStyles';
import Especials from './components/Especials';
import MarketHeader from './components/MarketHeader';

const SelectedMarket = ({ route }) => {
  const { shop } = route.params;
  return (
    <View style={[globalStyles.container]}>
      <MarketHeader title={shop.name} />
      <Especials />
    </View>
  );
};

SelectedMarket.propTypes = {
  route: PropTypes.object,
};

export default SelectedMarket;
