import React, {useState, useEffect} from 'react';
import {View, Text, Platform, StatusBar, Alert} from 'react-native';
import ZoomUs from 'react-native-zoom-us';
import _Button from '@button/_Button';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ZoomMeetingStyles from '@zoomMeeting/zoomMeetingStyles';
import _InputBox from '@inputBox/_InputBox';

const {mainView, inputBoxStyle} = ZoomMeetingStyles;

const CLIENT_KEY = 'TugFgts7hA7iF05SpVBA0SqtBVBUAMuT2Uls';
const CLIENT_SECRET = 'Obqx1gQ0VVXQmX7h6CGOdA4u81Bih52ykQGv';
let isValid;
function ZoomMeeting() {
  const [state, setState] = useState({
    hostName: '',
    meetingNumber: '',
    passcode: '',
  });

  const [validation, setValidate] = useState({
    hostNameValid: false,
    meetingNumberValid: false,
    passcodeValid: false,
  });
  useEffect(() => {
    (async () => {
      try {
        const message = await ZoomUs.initialize({
          clientKey: CLIENT_KEY,
          clientSecret: CLIENT_SECRET,
        });
        console.warn('message is ', message);
      } catch (error) {
        Alert.alert('error is ', error.toString());
      }
    })();
  }, []);

  const {meetingNumber, passcode, hostName} = state;
  const {meetingNumberValid, passcodeValid, hostNameValid} = validation;

  function _handleChange() {
    if (hostName == '') {
      setValidate({
        ...validation,
        hostNameValid: true,
      });
    } else if (meetingNumber == '') {
      setValidate({
        ...validation,
        meetingNumberValid: true,
      });
    } else if (passcode == '') {
      setValidate({
        ...validation,
        passcodeValid: true,
      });
    } else {
      _joinMeeting();
    }
  }
  const _joinMeeting = async () => {
    const meeting = await ZoomUs.joinMeeting({
      userName: hostName,
      meetingNumber: meetingNumber,
      password: passcode,
    });

    console.warn('meetng joined ', meeting);
  };

  function onBlur(key, value, validateKey) {
    switch (key) {
      case 'HostName':
        isValid = value == '' ? true : false;
        break;

      case 'MeetingNumber':
        isValid = value == '' ? true : false;
        break;

      case 'Passcode':
        isValid = value == '' ? true : false;
        break;

      default:
        break;
    }
    setValidate({
      ...validation,
      [`${validateKey}`]: isValid,
    });
  }

  return (
    <View style={mainView}>
      <StatusBar style="auto" />

      <View>
        <_InputBox
          transparent
          width={wp(90)}
          textInputPropStyle={{padding: 0}}
          style={[
            inputBoxStyle,
            {
              borderBottomColor: '#dadadb',
              marginTop: hp(4),
            },
          ]}
          onChangeText={value => {
            setState({...state, hostName: value});
            setValidate({...validation, hostNameValid: undefined});
          }}
          value={hostName}
          validate={hostNameValid}
          placeholder={'Enter Name(Guest)'}
          maxLength={20}
          minLength={2}
          onBlur={() => onBlur('HostName', hostName, 'hostNameValid')}
          ErrorMessage={hostName == '' ? 'Enter Name(Guest)' : null}
        />
        <_InputBox
          transparent
          width={wp(90)}
          textInputPropStyle={{padding: 0}}
          style={[
            inputBoxStyle,
            {
              borderBottomColor: '#dadadb',
              marginTop: hp(4),
            },
          ]}
          onChangeText={value => {
            setState({...state, meetingNumber: value});
            setValidate({...validation, meetingNumberValid: undefined});
          }}
          value={meetingNumber}
          validate={meetingNumberValid}
          placeholder={'Enter Meeting Number'}
          maxLength={20}
          minLength={2}
          onBlur={() =>
            onBlur('MeetingNumber', meetingNumber, 'meetingNumberValid')
          }
          ErrorMessage={meetingNumber == '' ? 'Enter Meeting Number' : null}
        />
        <_InputBox
          transparent
          width={wp(90)}
          textInputPropStyle={{padding: 0}}
          style={[
            inputBoxStyle,
            {
              borderBottomColor: '#dadadb',
              marginTop: hp(4),
            },
          ]}
          onChangeText={value => {
            setState({...state, passcode: value});
            setValidate({...validation, passcodeValid: undefined});
          }}
          value={passcode}
          validate={passcodeValid}
          placeholder={'Enter Meeting Passcode'}
          maxLength={20}
          minLength={2}
          onBlur={() => onBlur('Passcode', passcode, 'passcodeValid')}
          ErrorMessage={passcode == '' ? 'Enter Meeting Passcode' : null}
        />
      </View>
      <View>
        <_Button
          style={{marginTop: hp(6)}}
          height={hp(7)}
          width={wp(40)}
          text={'Join Meeting'}
          onButtonPress={_handleChange}
        />
      </View>
    </View>
  );
}
export default ZoomMeeting;
