import React, {useState, useEffect} from 'react';
import {View, Text, Platform, StatusBar, Alert} from 'react-native';
import _Button from '@button/_Button';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import VideoPlayerStyles from '@videoPlayer/videoPlayerStyles';

const {mainView} = VideoPlayerStyles;

function VideoPlayer() {
  return (
    <View style={mainView}>
      <StatusBar style="auto" backgroundColor={'#2D8CFF'} />
      <View>
        <Text>sdfd</Text>
      </View>
    </View>
  );
}
export default VideoPlayer;
