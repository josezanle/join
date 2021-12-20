import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const { width } = Dimensions.get('window');

const JoinHeader = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.headerText}>Join</Text>
        </View>
    )
}

export default JoinHeader

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: 'white',
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        color: '#0d5df5',
    },
});