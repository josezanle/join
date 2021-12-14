import React from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Footer from './Footer';
import Content from './Content';

const { width, height } = Dimensions.get('screen');

const ACTION_OFFSET = 100;

export const Card = React.memo(
  ({ item, isFirst, swipe, handleChoice, tiltSign, ...rest }) => {
    const { img_url, name, category } = item;

    // const rotateSaved = useRef(new Animated.ValueXY()).current;


    const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
      inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
      outputRange: ['-8deg', '0deg', '8deg'],
    });

    const animatedCardStyle = {
      transform: [...swipe.getTranslateTransform(), { rotate }],
    };
    return (
      <Animated.View
        style={[styles.card, isFirst && animatedCardStyle]}
        {...rest}>
        <ImageBackground
          source={{ uri: img_url }}
          style={[styles.image]}
          borderRadius={15}>

          <Content
            name={name}
            category={category}
          />
          <Footer handleChoice={handleChoice} />
        </ImageBackground>
      </Animated.View>
    );
  }

)
export const styles = StyleSheet.create({
  card: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: width * 0.9,
    height: height * 0.75,
    justifyContent: 'flex-end',
    alignItems: 'center',
    resizeMode: "cover",
  },
  name: {
    position: 'absolute',
    bottom: 22,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonsBox: {
    width: 170,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 30,
  },

});
