import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

const CustomButton = ({ text, onPress, backgroundButton, textColor, width }) => {
    return (
        <Pressable onPress={onPress} style={[styles.button, { backgroundColor: backgroundButton, width }]}>
            <Text style={{ color: textColor, fontWeight: "bold", fontSize: 20 }}>{text}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    }
})
