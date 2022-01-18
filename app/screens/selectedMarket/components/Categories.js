import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const DATA = [
  {
    id: 1,
    name: 'Carniceria',
    desc: 'anskajnkja',
  },
  {
    id: 2,
    name: 'Verduleria',
    desc: 'anskajnkja',
  },
  {
    id: 3,
    name: 'Bazar',
    desc: 'anskajnkja',
  },
  {
    id: 4,
    name: 'Limpieza',
    desc: 'anskajnkja',
  },
  {
    id: 5,
    name: 'Fiambreria',
    desc: 'anskajnkja',
  },
  {
    id: 6,
    name: 'Panaderia',
    desc: 'anskajnkja',
  },
  {
    id: 7,
    name: 'otros',
    desc: 'anskajnkja',
  },
];

const Categories = () => {
  return (
    <View style={styles.flatlistContainer}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.circular}>
              <Text>{item.id}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  flatlistContainer: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circular: {
    backgroundColor: '#ebebeb',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 15,
  },
  name: {
    position: 'absolute',
    bottom: -13,
    fontSize: 11,
  },
});
