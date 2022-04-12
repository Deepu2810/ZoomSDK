import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

function _Button(props) {
  const {
    height,
    width,
    backgroundColor,
    text,
    alignSelf,
    onButtonPress,
    style: propStyle,
    borderRadius,
    small,
  } = props;
  return (
    <TouchableOpacity
      style={[
        propStyle,
        {
          height: height,
          width: width,
          backgroundColor: '#2D8CFF',
          alignSelf: alignSelf,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: borderRadius ? borderRadius : 8,
        },
      ]}
      onPress={onButtonPress}>
      <Text style={{color: '#fff', fontSize: 15}}>{text}</Text>
    </TouchableOpacity>
  );
}
export default _Button;
