import React, {useState, useEffect} from 'react';
import {View, Text, Platform, StatusBar} from 'react-native';
import ZoomMeeting from '@zoomMeeting/zoomMeeting';
import VideoPlayer from '@videoPlayer/videoPlayer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {}, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'videoPlayer'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="zoomMeeting" component={ZoomMeeting} />
        <Stack.Screen name="videoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
