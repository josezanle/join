import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../../style/globalStyles';


const Content = ({ name, category }) => {
  return (
    <View style={styles.content}>
      <Text style={[globalStyles.H3, styles.marketName]}>{name}</Text>
      <Text style={styles.category}>{category}</Text>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  content: {
    width: '100%',
    marginBottom: 10,
  },
  marketName: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  category: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontStyle: "italic"
  },
});
