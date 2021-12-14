import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../../../style/globalStyles';

const windowHeight = Dimensions.get('window').height;

const MarketHeader = () => {
  return (
    <View style={styles.marketHeader}>
      <Text style={globalStyles.H1}>Market Name</Text>
    </View>
  );
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
