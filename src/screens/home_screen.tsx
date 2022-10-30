import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../components/header';
import {IMG} from '../assets/images';
import {HEIGHT_SCREEN_MIN_HEADER} from '../utils/global';
import {COLORS} from '../styles/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header onPress={() => {}} />

      <View style={styles.topContainer}>
        <Image source={IMG.pockeGroup} style={styles.pockeGroup} />
        <Text style={styles.pockeTitle}>
          All the Pokémon data you'll ever need in one place!
        </Text>
        <Text style={styles.pockeLabel}>
          Thousands of data compiled into one place
        </Text>

        <TouchableOpacity onPress={() => {}} style={styles.pockeBtn}>
          <Text style={styles.btnLabel}>Check PokèDex</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    paddingHorizontal: 24,
    height: HEIGHT_SCREEN_MIN_HEADER,
  },
  pockeGroup: {
    alignSelf: 'flex-end',
    width: 264.33,
    height: 305,
    marginTop: 32,
  },
  pockeTitle: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 40,
    color: COLORS.globalGrayDarker,
    marginTop: 43,
  },
  pockeLabel: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    color: COLORS.globalGrayDarker2,
    marginTop: 16,
  },
  pockeBtn: {
    width: 240,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLORS.yellowDark,
    borderRadius: 14,
    marginTop: 32,
  },
  btnLabel: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
    color: COLORS.globalWhite,
  },
});
