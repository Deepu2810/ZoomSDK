import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, Alert, Platform} from 'react-native';
import _Button from '@button/_Button';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import VideoPlayerStyles from '@videoPlayer/videoPlayerStyles';
import Video from 'react-native-video';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {mainView} = VideoPlayerStyles;

function VideoPlayer() {
  const [state, setState] = useState({
    mute: false,
    paused: false
  });
  const {mute, paused} = state;


  function handlePause(){
    setState({...state, paused: true})
  }

  function handleResume(){
    setState({...state, paused: false})
  }
  
  
  return (
    <View style={{flex: 1}}>
      <Video
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        }}
        style={{height: hp(50), width: wp(100)}}
        controls={true} // Pause, Forward, backward
        ref={ref => {
          player = ref;
        }}
        paused={paused} //user need to click manually to play video
        fullscreen={false} // default should be potrait - minimize
        fullscreenOrientation={'landscape'} // on Full screen
        // playInBackground={true} // the media should continue playing while the app is in the background. This allows customers to continue listening to the audio.
        onTouchEndCapture={() => console.warn('onTouchEndCapture')}
        onVideoEnd={() => console.warn('onVideoEnd')}
        repeat={true} // After End repeat the video
        onFullScreen={true}
        // seek={0}
        // playInBackground={false}
        // style={{width: 800, height: 800}}
        muted={mute}
        resizeMode={'cover'}
        volume={1.0}
        rate={1.0}
        ignoreSilentSwitch={'ignore'}
       
        onFullscreenPlayerDidDismiss={() => {
          // dismissing full screen automatically pauses the video, so we have to "pause" and "resume" in state to resume
          handlePause();
          setTimeout(() => {
            handleResume();
          }, 0);
        }}
      />
      {Platform.OS == 'android' ? (
        <View
          style={{
            alignSelf: 'flex-end',
            position: 'absolute',
            marginTop: hp(2),
            right: 10,
          }}>
          {!mute ? (
            <MaterialCommunityIcons
              name={'volume-high'}
              size={27}
              color={'#fff'}
              onPress={() => setState({...state, mute: true})}
            />
          ) : (
            <MaterialCommunityIcons
              name={'volume-mute'}
              size={27}
              color={'#fff'}
              onPress={() => setState({...state, mute: false})}
            />
          )}
        </View>
      ) : null}
    </View>
  );
}
export default VideoPlayer;
// <View style={mainView}>
//   <StatusBar style="auto" backgroundColor={'#2D8CFF'} />
//   <View>
//   <Video source={{uri: "background"}}   // Can be a URL or a local file.
//    ref={(ref) => {
//      this.player = ref
//    }}                                      // Store reference
//    onBuffer={this.onBuffer}                // Callback when remote video is buffering
//    onError={this.videoError}               // Callback when video cannot be loaded
//    style={{ position: 'absolute',
//    top: 0,
//    left: 0,
//    bottom: 0,
//    right: 0,}} />
//   </View>
// </View>
