import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import AddToFavorite from '../../../components/AddToFavorite';
import Content from './Content';

const { width, height } = Dimensions.get('screen');

export const Card = ({ item }) => {
  const { main_photo_url, name, type } = item;

  return (
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: main_photo_url }}
        style={[styles.image]}
        borderRadius={15}
        resizeMode="cover">
        <AddToFavorite />
        <Content name={name} descripcion={type} />
      </ImageBackground>
    </View>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export const styles = StyleSheet.create({
  card: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: width * 0.9,
    height: height * 0.65,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsBox: {
    width: 170,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 30,
  },
});
