import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const PADDING = windowWidth * 0.03;

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING,
    backgroundColor: 'white',
  },
  H1: {
    fontSize: windowWidth * 0.10,
  },
  H3: {
    fontSize: windowWidth * 0.08,
  },
  H4: {
    fontSize: windowWidth * 0.05,
  },
  paragraph: {
    fontSize: windowWidth * 0.04,
  }
});
