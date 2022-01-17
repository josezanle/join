import React, { useContext, useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  Modal,
  Text,
  Pressable,
} from 'react-native';
import { getShops } from '../../api/shops';
import ModalSwipeHelp from '../../components/ModalSwipeHelp';
import { Card } from './components/Card';
import SingleNavBar from '../../components/SingleNavBar';
import { ThemeContext } from '../../context/themeContext';

export default function SwipeScreen() {
  const [shops, setShops] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useContext(ThemeContext);
  const [settings, setSettings] = useState(false);

  const showSettings = () => {
    setSettings(!settings);
  };

  const getData = () => {
    getShops()
      .then(response => {
        if (response) {
          setShops(response);
          setIsLoading(false);
        } else {
          setIsLoading(true);
        }
      })
      .catch(err => {
        console.log('err getData:', err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}>
      <ModalSwipeHelp />
      <SingleNavBar showSettings={showSettings} />
      {!isLoading ? (
        <FlatList
          data={shops}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.background,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return <Card item={item} />;
          }}
        />
      ) : (
        <View style={styles.container}>
          <ActivityIndicator size={40} color="#199fdf" />
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={settings}
        onRequestClose={() => {
          // setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <View style={styles.topCloseX}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setSettings(!settings)}>
              <Text style={styles.xClose}>X</Text>
            </Pressable>
          </View>
          <View style={styles.bottomSettings}>
            <Text>hi</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, .9)',
    padding: 15,
  },
  topCloseX: {
    flex: 2,
    alignItems: 'flex-end',
  },
  xClose: {
    color: 'silver',
    fontWeight: 'bold',
    flex: 1,
    width: '100%',
    fontSize: 20,
  },
  bottomSettings: {
    flex: 8,
  },
});
