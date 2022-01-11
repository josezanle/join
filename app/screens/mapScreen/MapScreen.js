import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import Map from '../../components/Map';
import Geolocation from '@react-native-community/geolocation';


const MapScreen = () => {
  const [mapInfo, setInfo] = useState({})

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => setInfo(info),
      (err) => console.log({ err }),
      {
        enableHighAccuracy: true
      }
    );
  }, [])

  return (
    <View style={styles.container}>
      <Map mapInfo={mapInfo} />
    </View >
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default MapScreen;

