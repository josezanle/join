import {useNavigation} from '@react-navigation/core';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Dimensions,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomeIcon from '../assets/icons/HomeIcon';
import LocalizationIcon from '../assets/icons/LocalizationIcon';
import MoonIcon from '../assets/icons/MoonIcon';
import SunIcon from '../assets/icons/SunIcon';
import {PADDING} from '../style/globalStyles';
import DrawerUserBanner from './DrawerUserBanner';
import MenuClose from './MenuClose';

const DrawerContentMenu = props => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <MenuClose {...props} />
      <DrawerUserBanner />
      <View style={[styles.container]}>
        <Pressable onPress={() => navigation.navigate('HomeScreen')}>
          <View style={styles.row}>
            <HomeIcon />
            <Text style={styles.grey}>Inicio</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('New')}>
          <View style={styles.row}>
            <LocalizationIcon />
            <Text style={styles.grey}>Ver mapa</Text>
          </View>
        </Pressable>
        {/* 
        <Pressable onPress={() => navigation.navigate('New')}>
          <View style={styles.row}>
            <MoonIcon />
            <Text style={styles.grey}>Modo Oscuro</Text>
          </View>
        </Pressable> */}

        <Pressable onPress={() => navigation.navigate('New')}>
          <View style={styles.row}>
            <SunIcon />
            <Text style={styles.grey}>Modo Claro</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('HomeScreen')}>
          <View style={styles.row}>
            <HomeIcon />
            <Text style={styles.grey}>Inicio</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('New')}>
          <View style={styles.row}>
            <LocalizationIcon />
            <Text style={styles.grey}>Ver mapa</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('New')}>
          <View style={styles.row}>
            <SunIcon />
            <Text style={styles.grey}>Modo Claro</Text>
          </View>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContentMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    paddingLeft: PADDING,
  },
  grey: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 13,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
});
