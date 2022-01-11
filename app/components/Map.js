import React, { useRef } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export const data = [
    {
        id: 0,
        coords: {
            latitude: - 34.698663,
            longitude: - 58.637105,
        },
        bgImage: require("../../assets/images/localx2.png"),
    },
    {
        id: 1,
        coords: {
            latitude: -34.702147,
            longitude: - 58.636590,
        },
        bgImage: require("../../assets/images/localx2.png"),
    },
    {
        id: 2,
        coords: {
            latitude: -34.703400,
            longitude: - 58.635421,
        },
        bgImage: require("../../assets/images/localx2.png"),
    },
    {
        id: 3,
        coords: {
            latitude: -34.702884,
            longitude: - 58.635344,
        },
        bgImage: require("../../assets/images/localx2.png"),

    },
]

const Map = () => {
    const mapRef = useRef(null)

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
                style={styles.container}
                initialRegion={{
                    latitude: -34.70363666666666,
                    longitude: -58.632535000000004,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {data.map((val) => {
                    return (
                        <Marker
                            key={val.id}
                            coordinate={val.coords}
                            image={val.bgImage}
                            tracksViewChanges={false}
                        >
                            <Callout
                                tooltip>
                                <View style={styles.toolTip}>
                                    <Text>This is a toolTip, ok?</Text>
                                    <MaterialIcons name="map" size={100} color="yellow" />
                                </View>
                            </Callout>
                        </Marker>
                    )
                })}
            </MapView>
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolTip: {
        width: 250,
        height: 250,
        borderRadius: 15,
        backgroundColor: "white"
    },
})
export default Map;

