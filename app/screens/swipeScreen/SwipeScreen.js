import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { DATA } from '../../api/data';
import ModalSwipeHelp from '../../components/ModalSwipeHelp';
import { Card } from './components/Card';
import EmptyComponent from './components/EmptyComponent';

const { width, height } = Dimensions.get('screen');

const ACTION_OFFSET = 100;

const CARD = {
  WIDTH: width * 0.9,
  HEIGHT: height * 0.78,
  BORDER_RADIUS: 20,
  OUT_OF_SCREEN: width + 0.5 * width,
};
export default function SwipeScreen() {
  const [pets, setPets] = useState(DATA);
  const swipe = useRef(new Animated.ValueXY()).current;
  const tiltSign = useRef(new Animated.Value(1)).current;

  // useEffect(() => {
  //   if (!pets.length) {
  //     setPets(DATA);
  //   }
  // }, [pets.length]);

  // const petss = pets.reverse()

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy, y0 }) => {
      swipe.setValue({ x: dx, y: dy });
      tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      // .sign() convierte a 1, -1, 0, -0, o NAN
      const direction = Math.sign(dx);

      // convierte un valor a positivo
      const isActionActive = Math.abs(dx) > ACTION_OFFSET;

      if (isActionActive) {
        Animated.timing(swipe, {
          duration: 200,
          toValue: {
            x: direction * CARD.OUT_OF_SCREEN,
            y: dy,
          },
          useNativeDriver: true,
        }).start(removeTopCard);
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  const removeTopCard = useCallback(() => {
    setPets(prevState => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, []);

  const handleChoice = useCallback(
    direction => {
      Animated.timing(swipe.x, {
        toValue: direction * CARD.OUT_OF_SCREEN,
        duration: 400,
        useNativeDriver: true,
      }).start();
    },
    [],
  );

  return (
    <View style={styles.container}>
      {/* <ModalSwipeHelp /> */}
      <FlatList
        data={pets}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white"
        }}
        initialNumToRender={1}
        scrollEnabled={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        // pagingEnabled
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          const isFirst = index === 0;
          const dragHandlers = isFirst ? panResponder.panHandlers : {};

          return (
            <Card
              item={item}
              isFirst={isFirst}
              swipe={swipe}
              tiltSign={tiltSign}
              {...dragHandlers}
              handleChoice={handleChoice}
            />
          )
        }
        }
        ListEmptyComponent={() => {
          return (
            <View style={styles.container}>
              <EmptyComponent />
            </View>
          )
        }}

      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"

  },
});
