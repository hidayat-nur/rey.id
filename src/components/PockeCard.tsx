import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {IMG} from '../assets/images';
import {COLORS} from '../styles/colors';
import TypeCard from './TypeCard';

interface IPockeCard {
  onPress: () => void;
}

const PockeCard = ({onPress}: IPockeCard) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.card}>
      <Image source={IMG.placeholder} style={styles.pockeIMG} />
      <Text style={styles.pockeNumber}>#001</Text>
      <Text style={styles.pockeName}>Poke Name</Text>
      <View style={styles.wrapStyle}>
        <TypeCard index={0} />
        <TypeCard index={1} />
        <TypeCard index={2} />
        <TypeCard index={3} />
      </View>
    </TouchableOpacity>
  );
};

export default memo(PockeCard);

const styles = StyleSheet.create({
  card: {
    marginTop: 50,
    borderRadius: 24,
    backgroundColor: COLORS.globalWhite,
    paddingHorizontal: 35,
    paddingVertical: 25,
  },
  pockeNumber: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16,
    color: COLORS.globalGray2,
    marginTop: 10,
  },
  pockeName: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 30,
    color: COLORS.globalGrayDarker,
  },
  pockeIMG: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  wrapStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
