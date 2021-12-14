import React from 'react';
import { StyleSheet, View } from 'react-native';
import JoinHeader from '../../components/JoinHeader';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <JoinHeader />

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  }
})

export default HomeScreen;