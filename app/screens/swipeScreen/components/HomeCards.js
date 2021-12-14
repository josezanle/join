import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Animated,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';
import Content from './Content';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const cardWidth = windowWidth;
export const cardHeight = windowHeight;

const HomeCards = ({item}) => {
  const {name, category, img_url} = item;
  return (
    <View style={[styles.cards]}>
      <ImageBackground
        borderRadius={13}
        resizeMode="cover"
        source={{uri: img_url}}
        style={styles.image}>
        <Content name={name} category={category} />
      </ImageBackground>
    </View>
  );
};

export default HomeCards;

const styles = StyleSheet.create({
  cards: {
    width: cardWidth * 0.9,
    height: cardWidth * 1.7,
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
});
