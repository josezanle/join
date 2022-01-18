import React, { useContext, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
} from 'react-native';
import { PADDING } from '../style/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../context/themeContext';

const windowWidth = Dimensions.get('window').width;

const SingleNavBar = ({ showSettings }) => {
  const [press, setPress] = useState(true);
  const { setDarkTheme, setLightTheme } = useContext(ThemeContext);

  const changeMode = () => {
    setPress(press ? setLightTheme : setDarkTheme);
  };

  return (
    <View style={styles.navbar}>
      {press ? (
        <Pressable onPress={changeMode}>
          <MaterialIcons name="flare" size={30} color="silver" />
        </Pressable>
      ) : (
        <Pressable onPress={changeMode}>
          <MaterialCommunityIcons
            name="moon-waning-crescent"
            size={30}
            color="silver"
          />
        </Pressable>
      )}
      <Text style={styles.headerText}>Join</Text>
      <Pressable onPress={showSettings}>
        <MaterialIcons name="tune" size={30} color="silver" />
      </Pressable>
    </View>
  );
};

export default SingleNavBar;

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'white',
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: PADDING,
    paddingHorizontal: PADDING,
  },
  headerText: {
    fontSize: 40,
    // fontFamily: 'monoton',
    color: '#0d5df5',
  },
});
