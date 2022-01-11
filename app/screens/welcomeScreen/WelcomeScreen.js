import React from 'react'
import { Dimensions, StyleSheet, View, Image, Text, Pressable, Animated } from 'react-native'
import useBounce from '../../hooks/useBounce';
import { globalStyles } from '../../style/globalStyles'
import AsyncStorage from '@react-native-async-storage/async-storage';


const { width } = Dimensions.get('window');
const idealRed = "#EB3E37";
const relativeYellow = "#FEDA3E";

const IMAGES = [
    {
        id: 1,
        uri: 'https://okdiario.com/img/2019/11/26/la-mejores-ofertas-de-tiendas-ropa-para-el-black-friday-y-el-cyber-monday-2019.jpg',
        rotate: "-8deg",
        translate: 40,
        zIndex: 0
    },
    {
        id: 2,
        uri: 'https://images.clarin.com/2021/06/28/en-47-street-las-liquidaciones___7E5R10CvG_720x0__1.jpg',
        rotate: "0deg",
        translate: 0,
        zIndex: 1
    },
    {
        id: 3,
        uri: 'https://images.clarin.com/2021/07/03/cabildo-y-juramento-uno-de___7KzvSRZyn_720x0__1.jpg',
        rotate: "8deg",
        translate: -40,
        zIndex: 0
    },
];

const WelcomeScreen = ({ navigation }) => {
    const { pressIn, pressOut, bounce } = useBounce()

    const setItemstorage = () => {
        try {
            AsyncStorage.setItem('@welcomeScreen', "off")

        } catch (e) {
            console.log(e)
        }
    }

    const onPress = () => {
        setItemstorage()
        navigation.replace("BottomTab")
    }

    return (
        <View style={styles.container}>
            <View style={styles.circle1} />
            <View style={styles.circle2} />
            <View style={styles.circle3} />
            <View style={styles.topContent}>
                {IMAGES.map((item) => {
                    return (
                        <Image
                            key={item.id}
                            source={{ uri: item.uri }}
                            resizeMode="cover"
                            borderRadius={15}
                            style={[styles.image, {
                                transform: [{ rotate: item.rotate }, {
                                    translateX: item.translate
                                }],
                                zIndex: item.zIndex,
                            }]}
                        />
                    )
                })}
            </View>
            <View style={styles.bottomContent}>
                <Text style={[globalStyles.H3, styles.title]}>
                    Necesitas saber los locales disponibles en tu ciudad?
                </Text>
                <Text style={[globalStyles.p, styles.paragraph]}>
                    Mira todos los Markets cerca en tu ciudad, no solo eso!,
                    puedes ver todos sus articulos y guardar como favorito, para la proxima vez.
                </Text>
                <Pressable style={styles.button}
                    onPress={onPress}
                    onPressIn={pressIn}
                    onPressOut={pressOut}

                >
                    <Animated.View style={[styles.button, bounce]}>
                        <Text style={[globalStyles.p, styles.buttonText]}>Comenzar</Text>
                    </Animated.View>
                </Pressable>
            </View>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",

    },
    circle1: {
        backgroundColor: relativeYellow,
        borderRadius: 100,
        width: 50,
        height: 50,
        position: "absolute",
        top: width * .05,
        left: width * .05,
    },
    circle2: {
        backgroundColor: relativeYellow,
        borderRadius: 100,
        width: 80,
        height: 80,
        position: "absolute",
        bottom: width * .05,
        left: width * .05,
    },
    circle3: {
        backgroundColor: idealRed,
        borderRadius: 100,
        width: 140,
        height: 140,
        position: "absolute",
        top: width * .8,
        left: width / 2,
    },
    topContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "row",
    },
    image: {
        width: width * .34,
        height: width * .6,
        margin: 5,
        borderWidth: 3,
        borderColor: "white",
    },
    bottomContent: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'rgba(255, 255, 255, .7)',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingTop: 20
    },
    title: {
        color: "#1c1c1c",
        width: "80%",
        marginBottom: 10
    },
    paragraph: {
        color: "#1c1c1c",
        width: "80%",
        marginBottom: 25
    },
    button: {
        width: 160,
        height: 40,
        backgroundColor: "#13181C",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    buttonText: {
        color: "white",
        fontWeight: "bold"
    },
})
