import React, { useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
// import CameraIcon from '../assets/icons/CameraIcon';
import ImagePicker from 'react-native-image-crop-picker';
import UserPicture from './UserPicture';

const DrawerUserBanner = () => {
  // const [userImgUploaded, setUserImgUploaded] = useState('');

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setTempUri(image.path);
      })
      .catch(e => {
        console.log(e);
      });
    console.log('hello dev')
  };

  return (
    <>
      {userImgUploaded ? (
        <ImageBackground
          source={{ uri: userImgUploaded }}
          style={styles.userBg}
          resizeMode="cover">
          <UserPicture />
          <Pressable onPress={openGallery}>
            {/* <CameraIcon /> */}
          </Pressable>
        </ImageBackground>
      ) : (
        <View style={styles.userBanner}>
          <UserPicture />
          <Pressable onPress={openGallery}>
            {/* <CameraIcon /> */}
          </Pressable>
        </View>
      )}
    </>

  );
};

export default DrawerUserBanner;

const styles = StyleSheet.create({
  userBanner: {
    width: '100%',
    height: 270,
    justifyContent: 'flex-end',
  },
  userBg: {
    width: '100%',
    height: 270,
    justifyContent: 'flex-end',
  },
  dots: {
    color: 'grey',
    fontSize: 50,
    textAlign: 'right',
  },
});
