import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="My Header" />

      <View>
        <Text>Home screen</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
