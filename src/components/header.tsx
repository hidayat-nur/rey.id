import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {isIphoneX} from '../utils/global';
import {COLORS} from '../styles/colors';
import {FONT_SIZE} from '../styles/fonts_size';
import {IMG} from '../assets/images';
import {NavigationProp} from '@react-navigation/native';

interface IHeader {
  title: string;
  navigation?: NavigationProp<any, any>;
  hasBackButton?: boolean;
}

const Header = ({title, navigation, hasBackButton}: IHeader) => {
  const onBack = () => navigation?.goBack();

  return (
    <View
      style={[
        styles.container,
        hasBackButton ? styles.justContBetween : styles.justContCenter,
      ]}>
      {hasBackButton && (
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Image source={IMG.backIcon} style={styles.backIcon} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {hasBackButton && <View style={styles.wrapRight} />}
    </View>
  );
};

export default memo(Header);

const LEFT_WRAP_WIDTH = 40;
const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        height: isIphoneX() ? 88 : 76,
        paddingTop: isIphoneX() ? 30 : 20,
      },
      android: {
        height: 56,
      },
    }),
    backgroundColor: COLORS.globalGray,
    flexDirection: 'row',
    alignItems: 'center',
  },
  justContCenter: {
    justifyContent: 'center',
  },
  justContBetween: {
    justifyContent: 'space-between',
  },
  title: {
    fontSize: FONT_SIZE.normal,
    color: COLORS.globalBlack,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  backBtn: {
    width: LEFT_WRAP_WIDTH,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapRight: {
    width: LEFT_WRAP_WIDTH,
  },
});
