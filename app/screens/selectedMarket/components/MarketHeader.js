import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../../style/globalStyles';

const windowHeight = Dimensions.get('window').height;

const MarketHeader = ({ title }) => {
  return (
    <View style={styles.marketHeader}>
      <Text style={globalStyles.H1}>{title}</Text>
    </View>
  );
};

MarketHeader.propTypes = {
  title: PropTypes.string,
};

export default MarketHeader;

const styles = StyleSheet.create({
  marketHeader: {
    width: '100%',
    height: windowHeight * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#ebebeb',
  },
});
