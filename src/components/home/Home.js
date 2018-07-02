import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { colors, fonts, images } from '../../theme/index.js';
import FlowerList from '../common/flowerList/FlowerList.js';
import FlowerSearchInput from '../common/flowerSearchInput/FlowerSearchInput.js';

const Home = (props) => {

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.subheader} source={images.subheaderBackground}>
        <Text style={styles.subheaderTitle}>Discover flowers around you</Text>
        <Text style={styles.subheaderDescription}>Explore betweeen more then 8427 sightings</Text>
        <View style={styles.searchContainer}>
          <FlowerSearchInput/>
        </View>
      </ImageBackground>
      <FlowerList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subheader: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 61,
    paddingBottom: 76
  },
  subheaderTitle: {
    fontFamily: 'ubuntu',
    width: 247,
    color: colors.white,
    fontSize: fonts.size.huge,
    textAlign: 'center',
    marginBottom: 29
  },
  subheaderDescription: {
    fontFamily: 'ubuntu',
    marginBottom: 29,
    color: colors.white,
    fontSize: fonts.size.medium,
    textAlign: 'center'
  }
});
