import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default {
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // marginTop: hp(5),
    justifyContent: 'center',
  },
  inputBoxStyle: {
    borderBottomWidth: 0.5,
    padding: 0,
    width: wp(80),
  },
};
