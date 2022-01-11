import React, { useEffect } from 'react'
import { Animated, Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useOpacity from '../../hooks/useOpacity';

//colors
const darkBg = "#13181C";
const secondBg = "#52595F";
const iconColor = "#ebebeb";

const { width } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
    const { opacity, fadeOpacity } = useOpacity()

    useEffect(() => {
        fadeOpacity()
        const timeout = setTimeout(() => {
            navigation.replace("BottomTab")
        }, 1500);

        return () => clearTimeout(timeout);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Animated.View style={[styles.circularBox, { opacity }]}>
                    <MaterialIcons name="weekend" size={width * .3} color={iconColor} />
                </Animated.View>
            </View>
            <Text style={styles.joinParagraph}>Disfruta</Text>
            <Text style={styles.joinTitle}>Join</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: darkBg,
    },
    icon: {
        flex: 9,
        justifyContent: "center",
        alignItems: "center"
    },
    circularBox: {
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: "hsla(0, 0%, 0%, 0.2)",

    },
    joinParagraph: {
        fontSize: 12,
        color: secondBg,
        textAlign: "center"
    },
    joinTitle: {
        color: iconColor,
        fontWeight: "bold",
        fontSize: width * .08,
        flex: 1,
        textAlign: "center",
    },
})
