import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, Animated, Dimensions } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useFade from "../hooks/useFade";
import useOpacity from "../hooks/useOpacity";
import { globalStyles } from "../style/globalStyles";

// INSTRUCTION SWIPE 
const DATA = [
    {
        id: 1,
        icon: "swipe",
        title: "Deslizar",
        description: "Desliza hacia los costados para ver otra Tienda",
        size: 40,
    },
    {
        id: 2,
        icon: "close",
        title: "Otra Opcion",
        description: "Puedes ver otra tienda, sino te gusta lo que ves.",
        size: 35,
    },
    {
        id: 3,
        icon: "navigate-next",
        title: "Visitar Market",
        description: "Te gusto esa tienda? de acuerdo, vayamos a su Home.",
        size: 50,
    },
    {
        id: 4,
        icon: "bookmark",
        title: "Guardar",
        description: "Podes guardar tu tienda favorita, para la proxima.",
        size: 35,
    },
]

const ModalSwipeHelp = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { opacity, fadeOpacity } = useOpacity()
    const { startMovingPosition, position } = useFade()

    useEffect(() => {
        let timer = setTimeout(() => {
            setModalVisible(true)
            fadeOpacity()
            startMovingPosition(-40)
        }, 1500);

        return () => {
            clearTimeout(timer);
        };
    }, [])

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        >
            <Pressable
                style={styles.container}
                onPress={() => setModalVisible(false)}
            >
                <Text style={[globalStyles.H1, styles.title]}>Como usar la App?</Text>
                <Text style={[globalStyles.p, styles.subtitle, { marginBottom: 30 }]}>Mira estos Tips para usar mejor Join, o descubrelo tu mismo.</Text>
                {DATA.map((item) => {
                    return (

                        <View
                            style={styles.span}
                            key={item.id}>
                            <Animated.View style={{
                                ...styles.icon, opacity,
                                transform: [{ translateX: position }]
                            }}>
                                <MaterialIcons name={item.icon} size={item.size} color="white" />
                            </Animated.View>
                            <View style={styles.text}>
                                <Animated.Text style={{
                                    ...globalStyles.H4, ...styles.title, opacity,
                                    transform: [{ translateX: position }]
                                }}>{item.title}</Animated.Text>
                                <Animated.Text style={{
                                    ...globalStyles.p, ...styles.description, opacity,
                                    transform: [{ translateY: position }]
                                }}>{item.description}</Animated.Text>
                            </View>
                        </View>
                    )
                })}
            </Pressable>
        </Modal >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "hsla(0, 0%, 0%, 0.8)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
    },
    span: {
        width: "100%",
        height: 80,
        flexDirection: "row",
    },
    icon: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        flex: 8,
        color: "white"
    },
    title: {
        fontWeight: "bold",
        color: "white"
    },
    description: {
        color: "white"
    },
    subtitle: {
        color: "white",
        width: "94%"
    },
});

export default ModalSwipeHelp;