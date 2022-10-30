import {Dimensions, Platform} from 'react-native';

const dim = Dimensions.get('window');

const isIPhoneXSize = () => dim.height === 812 || dim.width === 812;
const isIPhoneXrSize = () => dim.height === 896 || dim.width === 896;
const isIphoneWithNotch = () => {
  return (
    dim.height === 780 ||
    dim.width === 780 ||
    dim.height === 812 ||
    dim.width === 812 ||
    dim.height === 844 ||
    dim.width === 844 ||
    dim.height === 896 ||
    dim.width === 896 ||
    dim.height === 926 ||
    dim.width === 926
  );
};

export const isIphoneX = () => {
  return (
    (Platform.OS === 'ios' && (isIPhoneXSize() || isIPhoneXrSize())) ||
    isIphoneWithNotch()
  );
};
