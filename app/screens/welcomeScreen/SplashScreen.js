import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//colors
const darkBg = "#13181C";
const secondBg = "#52595F";
const iconColor = "#ebebeb";
const idealRed = "#EB3E37";
const relativeYellow = "#FEDA3E";

const { width } = Dimensions.get('window');

const SplashScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <View style={styles.circularBox}>
                    <MaterialIcons name="weekend" size={width * .3} color={iconColor} />
                </View>
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
        // backgroundColor: "black",
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
        backgroundColor: darkBg
    },
    joinParagraph: {
        fontSize: 12,
        color: secondBg,
        textAlign: "center"
    },
    joinTitle: {
        color: iconColor,
        fontWeight: "bold",
        fontSize: 40,
        flex: 1,
        textAlign: "center",
    },
})
