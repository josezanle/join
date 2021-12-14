import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Pressable} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const MenuIcon = ({color}) => {
  const navigation = useNavigation();
  const press = () => {
    console.log('Pressing Menu');
  };

  return (
    <Pressable onPress={press}>
      <Svg
        style={{
          width: 20,
          height: 20,
        }}
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <Path
          fill={color}
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></Path>
      </Svg>
    </Pressable>
  );
};

export default MenuIcon;
