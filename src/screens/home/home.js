import React, {useState, useEffect} from 'react';
import {View, Text, Platform, StatusBar, Alert} from 'react-native';
import _Button from '@button/_Button';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HomeStyles from '@home/homeStyles';

const {mainView} = HomeStyles;

function Home(props) {
  function _handleZoomDK() {
    props.navigation.navigate('zoomMeeting');
  }
  function _handleVideoPlayer() {
    props.navigation.navigate('videoPlayer');
  }

  return (
    <View style={mainView}>
      <StatusBar style="auto" backgroundColor={'#2D8CFF'} />
      <View>
        <_Button
          style={{marginTop: hp(6)}}
          height={hp(7)}
          width={wp(40)}
          text={'Zoom SDK'}
          onButtonPress={_handleZoomDK}
        />

        <_Button
          style={{marginTop: hp(6)}}
          height={hp(7)}
          width={wp(40)}
          text={'Video Player'}
          onButtonPress={_handleVideoPlayer}
        />
      </View>
    </View>
  );
}
export default Home;
