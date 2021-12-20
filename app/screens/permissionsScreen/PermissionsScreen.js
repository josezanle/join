import React, { useContext } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { PermissionsContext } from '../../context/PermissionsContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from '../../style/globalStyles';
import CustomButton from '../../components/CustomButton';

const PermissionsScreen = () => {
    const { permissions, askLocationPermission } = useContext(PermissionsContext)

    return (
        <View style={styles.container}>
            <View style={styles.circular}>
                <MaterialIcons name="place" size={100} color="#0d5df5" />
            </View>
            <Text style={[globalStyles.H3, styles.title]}>Verifica las tiendas disponibles cerca tuyo.</Text>
            <Text style={[globalStyles.paragraph, styles.p]}>Por favor, activa los servicios de ubicacion para usar esta caracteristica</Text>


            <CustomButton text="Activar" textColor="white" backgroundButton="#0d5df5" onPress={askLocationPermission}
            />
        </View>
    )
}

export default PermissionsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    circular: {
        width: 200,
        height: 200,
        backgroundColor: "#ebebeb",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    circular2: {
        width: 200,
        height: 200,
        backgroundColor: "#0d5df5",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
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
