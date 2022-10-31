import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import Header from '../components/header';
import {IMG} from '../assets/images';
import {HEIGHT_SCREEN_MIN_HEADER} from '../utils/global';
import {COLORS} from '../styles/colors';
import PockeCard from '../components/PockeCard';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

const HomeScreen = () => {
  const scrollViewRef = useRef(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['30%', '30%', '30%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const onPokePress = () => {
    scrollViewRef.current?.scrollTo({
      y: HEIGHT_SCREEN_MIN_HEADER,
      animated: true,
    });
  };

  // renders
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    [],
  );

  const onPokeModal = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={styles.container}>
      <Header onPress={() => {}} />

      <ScrollView ref={scrollViewRef}>
        <View style={styles.topContainer}>
          <Image source={IMG.pockeGroup} style={styles.pockeGroup} />
          <Text style={styles.pockeTitle}>
            All the Pokémon data you'll ever need in one place!
          </Text>
          <Text style={styles.pockeLabel}>
            Thousands of data compiled into one place
          </Text>

          <TouchableOpacity onPress={onPokePress} style={styles.pockeBtn}>
            <Text style={styles.btnLabel}>Check PokèDex</Text>
          </TouchableOpacity>
        </View>

        <ImageBackground
          source={IMG.background}
          resizeMode="cover"
          style={styles.containerPocke}>
          <Text style={styles.title}>PokèDex</Text>
          <Text style={styles.description}>
            All Generation totaling 999999 Pokemon
          </Text>

          <View style={styles.pockeList}>
            <PockeCard onPress={onPokeModal} />
            <PockeCard onPress={onPokeModal} />
            <PockeCard onPress={onPokeModal} />
            <PockeCard onPress={onPokeModal} />
            <PockeCard onPress={onPokeModal} />
          </View>

          <View style={styles.loadMore}>
            <Text style={styles.loadMoreLabel}>Load More ...</Text>
          </View>
        </ImageBackground>
      </ScrollView>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}
        enablePanDownToClose>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.globalWhite,
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
    alignItems: 'center',
  },
  btnLabel: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
    color: COLORS.globalWhite,
  },
  containerPocke: {
    paddingHorizontal: 45,
  },
  title: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 50,
    color: COLORS.globalGrayDarker,
    marginTop: 24,
    textAlign: 'center',
  },
  description: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    color: COLORS.globalGrayDarker,
    marginTop: 16,
    textAlign: 'center',
  },
  pockeList: {
    marginBottom: 50,
  },
  loadMore: {
    marginBottom: 50,
  },
  loadMoreLabel: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'center',
    color: COLORS.globalGrayDarker,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
