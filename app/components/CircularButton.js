import React from 'react';
import { StyleSheet, Pressable, Animated } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useBounce from '../hooks/useBounce';

export default function CircularButton({ iconName, size, color, onPress }) {
  const { pressIn, pressOut, bounce } = useBounce();
  console.log('test');

  return (
    <Pressable onPress={onPress} onPressIn={pressIn} onPressOut={pressOut}>
      <Animated.View style={[styles.button, bounce]}>
        <MaterialIcons name={iconName} size={size} color={color} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, .8)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
