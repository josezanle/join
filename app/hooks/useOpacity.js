import { useRef } from "react"
import { Animated } from "react-native"

const useOpacity = () => {
    const opacity = useRef(new Animated.Value(0)).current

    const fadeOpacity = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }
    return {
        opacity,
        fadeOpacity
    }
}

export default useOpacity
