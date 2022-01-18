import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PermissionsContext } from '../../context/PermissionsContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../components/CustomButton';

const PermissionsScreen = () => {
  const { askLocationPermission } = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.circle}>
          <MaterialIcons name="place" size={40} color="white" />
        </View>
      </View>
      <View style={styles.mid}>
        <Image
          source={require('../../../assets/images/emptySwiper.webp')}
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="contain"
        />
        <Text style={styles.text}>Por Favor, habilita los permisos</Text>
      </View>
      <View style={styles.bottom}>
        <CustomButton
          text="Activar"
          textColor="white"
          backgroundButton="#1c1c1c"
          onPress={askLocationPermission}
          width="100%"
        />
      </View>
    </View>
  );
};

export default PermissionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  top: {
    flex: 1,
    alignItems: 'center',
  },
  circle: {
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: 100,
  },
  mid: {
    flex: 1,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: '#1c1c1c',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
