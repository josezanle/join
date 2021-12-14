import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Switch } from 'react-native';
import { PADDING } from '../style/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;

const SingleNavBar = ({ title }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.navbar}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.headerText}>{title}</Text>
      <MaterialIcons name="tune" size={30} color="silver" />
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
    fontFamily: 'monoton',
    color: '#0d5df5',

  },
});
