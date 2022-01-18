import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import CircularButton from '../../../components/CircularButton';
import { globalStyles } from '../../../style/globalStyles';

const Content = ({ shop }) => {
  const navigation = useNavigation();

  const goToMarket = () => {
    navigation.navigate('MarketStack', {
      screen: 'SelectedMarket',
      shopId: shop.id,
    });
  };
  return (
    <View style={styles.content}>
      <View style={styles.text}>
        <Text style={[globalStyles.H3, styles.marketName]}>{shop.name}</Text>
      </View>
      <View style={styles.buttonsBox}>
        <CircularButton
          iconName="close"
          size={30}
          color={'#1c1c1c'}
          onPress={() => console.log('')}
        />
        <CircularButton
          iconName="navigate-next"
          size={30}
          color={'#1c1c1c'}
          onPress={goToMarket}
        />
      </View>
    </View>
  );
};

Content.propTypes = {
  shop: PropTypes.object,
};

export default Content;

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, .7)',
  },
  text: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  buttonsBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 10,
  },
  marketName: {
    textAlign: 'center',
    color: '#1c1c1c',
    fontWeight: 'bold',
  },
  category: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
  },
});
