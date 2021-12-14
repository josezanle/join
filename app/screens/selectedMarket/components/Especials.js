import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IMAGES} from '../../../api/images';
import {globalStyles} from '../../../style/globalStyles';
import Categories from './Categories';

const windowWidth = Dimensions.get('window').width;

const Especials = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      data={IMAGES}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      ListHeaderComponentStyle={{
        width: '100%',
      }}
      ListHeaderComponent={() => {
        return (
          <View style={{paddingBottom: 7}}>
            <View style={styles.row}>
              <Text style={[globalStyles.H4, styles.subtitle]}>Categories</Text>
              <Pressable
                onPress={() => navigation.navigate('CategoriesScreen')}>
                <Text>Ver Todo</Text>
              </Pressable>
            </View>
            <Categories />
          </View>
        );
      }}
      renderItem={({item, index}) => {
        return (
          <View style={styles.imageBox}>
            <Image
              source={{uri: item.uri}}
              style={styles.image}
              resizeMode="cover"
              borderRadius={15}
            />
          </View>
        );
      }}
    />
  );
};

export default Especials;

const styles = StyleSheet.create({
  flatList: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  imageBox: {
    backgroundColor: '#ebebeb',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.93,
    height: 300,
    borderRadius: 11,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  subtitle: {
    fontWeight: 'bold',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
