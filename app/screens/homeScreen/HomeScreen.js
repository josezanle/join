import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import { IMAGES } from '../../api/images';
import { OFF } from '../../api/off';
import { ThemeContext } from '../../context/themeContext';
import { globalStyles } from '../../style/globalStyles';

const widthX = Dimensions.get('window').width;

const TEXT_OPTIONS = [
  {
    id: 1,
    title: 'Selectos',
  },
  {
    id: 2,
    title: 'Mas Visto',
  },
  {
    id: 3,
    title: 'Ofertas',
  },
  {
    id: 4,
    title: 'Para ti',
  },
];

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useContext(ThemeContext);

  const onPress = index => {
    setCurrentIndex(index);
  };
  return (
    <ScrollView
      style={{ ...styles.container, backgroundColor: theme.colors.background }}>
      <View style={styles.top}>
        <Text style={[globalStyles.H4, styles.title]}>
          No te pierdas las ultimas novedades
        </Text>
        <FlatList
          data={TEXT_OPTIONS}
          horizontal
          style={{
            marginVertical: 15,
            width: widthX,
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            return (
              <Pressable
                onPress={() => onPress(index)}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      currentIndex === index ? '#1c1c1c' : 'white',
                  },
                ]}>
                <Text
                  style={[
                    globalStyles.H4,
                    {
                      color: currentIndex === index ? 'white' : 'black',
                      fontWeight: 'bold',
                    },
                  ]}>
                  {item.title}
                </Text>
              </Pressable>
            );
          }}
        />
        <FlatList
          data={IMAGES}
          horizontal
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            marginBottom: 30,
          }}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.imageBox}>
                <Image
                  source={{ uri: item.uri }}
                  style={styles.image}
                  resizeMode="cover"
                  borderRadius={15}
                />
              </View>
            );
          }}
        />

        <View style={styles.box}>
          <Text style={[globalStyles.H4, styles.title]}>
            Descuentos para vos
          </Text>
          <FlatList
            data={OFF}
            horizontal
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              marginBottom: 30,
            }}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: widthX,
                    height: 180,
                    borderRadius: 11,
                  }}>
                  <Image
                    source={{ uri: item.uri }}
                    style={styles.image}
                    resizeMode="cover"
                    borderRadius={15}
                  />
                </View>
              );
            }}
          />
        </View>
        <View style={styles.box}>
          <Text style={[globalStyles.H4, styles.title]}>
            Tiendas Destacadas
          </Text>
          <FlatList
            data={IMAGES}
            horizontal
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: widthX,
                    height: 180,
                    borderRadius: 11,
                  }}>
                  <Image
                    source={{ uri: item.uri }}
                    style={styles.image}
                    resizeMode="cover"
                    borderRadius={15}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  title: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    fontWeight: 'bold',
    color: '#1c1c1c',
  },
  top: {
    width: '100%',
    marginBottom: 15,
  },
  box: {
    width: '100%',
  },
  imageBox: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: widthX,
    height: 300,
    borderRadius: 11,
  },
  image: {
    width: widthX * 0.9,
    height: '100%',
  },
  button: {
    width: 150,
    height: 40,
    marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});

export default HomeScreen;
