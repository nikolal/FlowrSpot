import React from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { metrics, colors, fonts, images } from '../../theme/index.js';
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

const stateToProps = state => ({
  // value: state.homeReducer.value
});

const dispatchToProps = dispatch => ({
  // increaseValue: bindActionCreators(increaseValue, dispatch),
});

export default connect(stateToProps, dispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subheader: {
    // height: 315,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 61,
    paddingBottom: 76
  },
  subheaderTitle: {
    width: 247,
    color: colors.white,
    fontSize: fonts.size.huge,
    textAlign: 'center',
    marginBottom: 29
  },
  subheaderDescription: {
    marginBottom: 29,
    color: colors.white,
    fontSize: fonts.size.medium,
    textAlign: 'center'
  }
});
