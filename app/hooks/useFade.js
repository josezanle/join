import { useRef } from 'react'
import { Animated } from 'react-native'

const useFade = () => {
    const position = useRef(new Animated.Value(0)).current

    const startMovingPosition = (initPosition, duration = 500) => {
        position.setValue(initPosition)

        Animated.timing(position, {
            toValue: 0,
            duration,
            useNativeDriver: true,
        }).start()
    }

    return {
        startMovingPosition,
        position,
    }
}

export default useFade
