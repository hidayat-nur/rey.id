import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {HEADER_HEIGHT, isIphoneX} from '../utils/global';
import {COLORS} from '../styles/colors';
import {IMG} from '../assets/images';

interface IHeader {
  onPress: () => void;
}

const Header = ({onPress}: IHeader) => {
  return (
    <View style={styles.container}>
      <Image source={IMG.pockeLogo} style={styles.logo} />
      <TouchableOpacity onPress={onPress}>
        <Image source={IMG.bar} style={styles.bar} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        paddingTop: isIphoneX() ? 30 : 20,
      },
    }),
    height: HEADER_HEIGHT,
    backgroundColor: COLORS.globalWhite,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  logo: {
    width: 69,
    height: 24,
  },
  bar: {
    width: 20,
    height: 20,
  },
});
