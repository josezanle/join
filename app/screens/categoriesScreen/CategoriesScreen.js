import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {DATA} from '../../api/data';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const cardWidth = windowWidth;
export const cardHeight = windowHeight;

const CategoriesScreen = () => {
  return (
    <View style={[styles.container]}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <View style={styles.card}></View>;
        }}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  card: {
    width: 350,
    height: 250,
    borderRadius: 15,
    marginVertical: 15,
    backgroundColor: '#ebebeb',
  },
});
