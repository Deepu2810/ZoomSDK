import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  I18nManager,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import InputBoxStyles from '@inputBox/inputBoxStyles';

const {textBoxView} = InputBoxStyles;
function _InputBox(props) {
  const {
    value,
    onChangeText,
    keyboardType,
    maxLength,
    minLength,
    secureTextEntry,
    placeholder,
    editable,
    onBlur,
    autoComplete,
    style: propTextBoxStyle,
    validate,
    successColor,
    ErrorMessage,
    emailIcon,
    passwordIcon,
    personIcon,
    borderBlack,
    borderBottomColor,
    width,
    countryFlag,
    onOpen,
    countryCode,
    textInputPropStyle: textInputPropStyle,
    viewPasswordIcon,
    hidePasswordIcon,
    onPressViewIcon,
    onPressHideIcon,
    transparent,
    marginLeft,
  } = props;
  return (
    <View>
      <View
        style={[
          textBoxView,
          propTextBoxStyle,
          {
            backgroundColor: transparent ? 'transparent' : '#dddddd',
            borderBottomWidth: validate ? 2 : 0.9,
            borderBottomColor: borderBottomColor
              ? 'transparent'
              : borderBlack
              ? borderBlack
              : validate
              ? '#F90000'
              : '#dadadb',
            height: hp(5),
            alignItems: 'center',
            paddingLeft: transparent ? wp(0) : wp(1),
          },
        ]}>
        <TextInput
          style={[textInputPropStyle, {width: width}]}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
          minLength={minLength}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          textAlign={I18nManager.isRTL ? 'right' : 'left'}
          editable={editable}
          onBlur={onBlur}
          autoComplete={autoComplete}
        />
      </View>

      {validate && (
        <Text
          style={{
            fontSize: 11,
            marginLeft: marginLeft,
            color: successColor ? '#28a745' : '#F90000',
          }}>
          {ErrorMessage}
        </Text>
      )}
    </View>
  );
}
export default _InputBox;
