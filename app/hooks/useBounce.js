import { useState } from 'react';
import { Animated } from 'react-native';

const useBounce = () => {
    const [buttonAnimation] = useState(new Animated.Value(1))

    const pressIn = () => {
        Animated.spring(buttonAnimation, {
            toValue: .8,
            useNativeDriver: true
        }).start()
    }
    const pressOut = () => {
        Animated.spring(buttonAnimation, {
            toValue: 1,
            friction: 4,
            tension: 100,
            useNativeDriver: true
        }).start()
    }
    const bounce = {
        transform: [{ scale: buttonAnimation }]
    }

    return {
        pressIn,
        pressOut,
        bounce
    }
}

export default useBounce
