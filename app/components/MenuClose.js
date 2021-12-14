import {DrawerToggleButton} from '@react-navigation/drawer';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
DrawerToggleButton;

const MenuClose = props => {
  return (
    <Pressable
      style={{width: '100%', marginTop: 30}}
      onPress={() => props.navigation.closeDrawer()}>
      <Text style={styles.x}>X</Text>
    </Pressable>
  );
};

export default MenuClose;

const styles = StyleSheet.create({
  x: {
    fontWeight: 'bold',
    color: 'silver',
    fontSize: 22,
    textAlign: 'right',
  },
});
