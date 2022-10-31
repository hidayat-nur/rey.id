import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {IMG} from '../assets/images';
import TypeCard from './TypeCard';
import {COLORS} from '../styles/colors';

const PokeModal = () => {
  return (
    <View>
      <Text style={styles.pokeTitle}>Pokemon Name</Text>
      <Image source={IMG.placeholder} style={styles.pokeAvatar} />
      <View>
        <View style={styles.pokeList}>
          <Text style={styles.pokeLabel}>Weight : </Text>
          <Text style={styles.pokeValue}>9999</Text>
        </View>
        <View style={styles.pokeList}>
          <Text style={styles.pokeLabel}>Height : </Text>
          <Text style={styles.pokeValue}>9999</Text>
        </View>
        <View style={styles.pokeList}>
          <Text style={styles.pokeLabel}>Abilities :</Text>
          <View style={styles.listValue}>
            <Text style={styles.pokeValue}>{'\u2022'} Abilities 1</Text>
            <Text style={styles.pokeValue}>
              {'\u2022'} Abilities 2 (hidden)
            </Text>
          </View>
        </View>
        <View style={styles.pokeList}>
          <Text style={styles.pokeLabel}>Type :</Text>
          <View style={styles.wrapType}>
            <TypeCard index={0} />
            <TypeCard index={1} />
            <TypeCard index={2} />
            <TypeCard index={3} />
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={() => {}} style={styles.more}>
        <Text style={styles.labelMore}>More Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(PokeModal);

const styles = StyleSheet.create({
  pokeAvatar: {
    width: 250,
    height: 250,
    marginTop: 20,
    alignSelf: 'center',
  },
  pokeTitle: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 48,
    color: COLORS.globalGrayDarker,
  },
  pokeLabel: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 30,
    color: COLORS.globalGrayDarker,
  },
  pokeValue: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 30,
    color: COLORS.globalGrayDarker,
    marginLeft: 15,
  },
  pokeList: {
    flexDirection: 'row',
    marginTop: 20,
  },
  wrapType: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 15,
    marginTop: -7,
    width: '48%',
    justifyContent: 'space-between',
  },
  listValue: {},
  more: {
    paddingVertical: 10,
    alignItems: 'center',
    width: 167,
    backgroundColor: COLORS.yellowDark,
    borderRadius: 14,
    alignSelf: 'center',
    marginTop: 36,
  },
  labelMore: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
    color: COLORS.globalWhite,
  },
});
