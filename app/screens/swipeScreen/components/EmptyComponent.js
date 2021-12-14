import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const EmptyComponent = React.memo(() => {
    return (
        <View style={styles.container}>
            <Text>Ups, parece que no hay nada mas para mostrar.</Text>
            <Button
                title="De Nuevo"
            />
        </View>
    )
}

)
export default EmptyComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }

})
