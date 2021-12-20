import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;

const EmptyComponent = () => {
    // const EmptyComponent = ({ tryAgain }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../components/emptySwiper.webp')}
                resizeMode='cover'
                style={styles.image}
            />
            <Text style={styles.ups}>Ups,</Text>
            <Text style={styles.subtitle}>parece que eso es todo.</Text>

            <Pressable
            // onPress={tryAgain}
            >
                <MaterialIcons name="autorenew" size={40} color="#0d5df5" />
            </Pressable>

        </View >
    )
}


export default EmptyComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: windowWidth * 0.7,
        height: windowWidth * 0.7
    },
    ups: {
        color: "#0d5df5",
        fontWeight: "bold",
        fontSize: 45,
    },
    subtitle: {
        color: "#0d5df5",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 20
    },

})
