import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {COLORS} from '../styles/colors';

interface ITypeCard {
  index: number;
}

const TypeCard = ({index}: ITypeCard) => {
  const typeStype = () => {
    switch (index) {
      case 0:
        return styles.type1;
      case 1:
        return styles.type2;
      case 2:
        return styles.type3;
      case 3:
        return styles.type4;
      default:
        return styles.type1;
    }
  };

  return (
    <View style={[styles.type, typeStype()]}>
      <Text style={styles.typeLabel}>Type 1</Text>
    </View>
  );
};

export default memo(TypeCard);

const styles = StyleSheet.create({
  type: {
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  typeLabel: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 18,
    color: COLORS.globalWhite,
  },
  type1: {
    backgroundColor: COLORS.orangeDark,
  },
  type2: {
    backgroundColor: COLORS.red,
  },
  type3: {
    backgroundColor: COLORS.green,
  },
  type4: {
    backgroundColor: COLORS.pink,
  },
});
