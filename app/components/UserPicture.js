import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const UserPicture = () => {
  return (
    <View style={styles.userPicBox}>
      <View style={styles.row}>
        <Image
          style={styles.userImage}
          source={{
            uri: 'https://images.pexels.com/photos/4946515/pexels-photo-4946515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          }}
        />
        <View style={styles.userDesc}>
          <Text style={styles.h3}>Jenny Scartt</Text>
          <Text style={styles.p}>Example@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

export default UserPicture;

const styles = StyleSheet.create({
  userPicBox: {
    width: '100%',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
    resizeMode: 'cover',
    marginRight: 10,
    borderWidth: 3,
  },

  h3: {
    fontSize: 23,
    color: '#1c1c1c',
    fontWeight: 'bold',
  },
  p: {
    fontSize: 16,
    color: '#1c1c1c',
  },
});
