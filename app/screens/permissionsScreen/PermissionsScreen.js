import React, { useContext } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { PermissionsContext } from '../../context/PermissionsContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from '../../style/globalStyles';

const PermissionsScreen = () => {
    const { permissions, askLocationPermission } = useContext(PermissionsContext)

    return (
        <View style={styles.container}>
            <MaterialIcons name="place" size={100} color="#0d5df5" />
            <Text style={[globalStyles.H3, styles.title]}>Comercios Cerca</Text>
            <Text style={[globalStyles.paragraph, styles.p]}>Verifica todos las tiendas disponibles cerca tuyo, elige la mas adecuada y observa todas sus ofertas y precios, vamos, animate!</Text>
            <Text style={[globalStyles.paragraph, styles.p]}>Por favor, activa los servicios de ubicacion para usar esta caracteristica</Text>

            <Pressable onPress={askLocationPermission} style={styles.button}>
                <Text style={[globalStyles.H4, styles.buttonText]}>Activar</Text>
            </Pressable>
        </View>
    )
}

// backgroundColor: "#0d5df5",

export default PermissionsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    title: {
        fontWeight: "bold",
        marginBottom: 10,
        color: "#0d5df5"
    },
    p: {
        width: "80%",
        marginBottom: 20
    },
    button: {
        backgroundColor: "#0d5df5",
        width: 150,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "white"
    },

})
