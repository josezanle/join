import React from 'react'
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const Map = () => {

    return (
        <View style={styles.container}>
            <MapView
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={styles.container}
            />
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
export default Map;

