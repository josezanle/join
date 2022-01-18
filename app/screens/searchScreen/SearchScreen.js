import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { globalStyles } from '../../style/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchScreen = () => {
  const [change, setChange] = useState('');
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
        <View style={styles.container}>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              onChangeText={text => setChange(text)}
              onSubmitEditing={() => Keyboard.dismiss()}
            />
            <View style={styles.icons}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => console.log('func')}>
                <MaterialIcons name="mic" size={30} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => console.log('func')}>
                <MaterialCommunityIcons name="camera" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebeb',
    flex: 1,
    padding: 5,
  },
  inputBox: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  input: {
    width: '80%',
    borderRadius: 10,
  },
  icons: {
    width: '20%',
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputText: {
    textAlign: 'right',
    fontWeight: 'bold',
  },
  imageBg: {
    padding: 10,
    flex: 1,
  },
});

export default SearchScreen;
