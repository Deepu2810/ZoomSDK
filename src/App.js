import React, {useState, useEffect} from 'react';
import {View, Text, Platform, StatusBar} from 'react-native';
import ZoomMeeting from '@zoomMeeting/zoomMeeting';
function App() {
  useEffect(() => {}, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar style="auto" backgroundColor={'#2D8CFF'} />
      <ZoomMeeting />
    </View>
  );
}
export default App;
