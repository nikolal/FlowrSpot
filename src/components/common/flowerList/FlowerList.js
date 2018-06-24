import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveFlowersAction } from './FlowerListContainer.js';
import { LinearGradient } from 'expo';
import { metrics, colors, fonts, images } from '../../../theme/index.js';
import { mainUrl, flowersSuffix, flowersInit } from '../../../../config/api.js';


const renderItem = ({ item }, index) => {
  return (
    <ImageBackground style={styles.item} source={{ uri: `https:${item.profile_picture}` }}>
      <LinearGradient
            colors={[ 'transparent', 'rgb(19, 19, 20)' ]}
            style={styles.itemOverlay}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.latin_name}</Text>
        <View style={styles.sightingsContainer}>
          <Text style={styles.sightingsText}>{item.sightings}</Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

class FlowerList extends Component {

  componentDidMount = () => {
    this.getFlowers(`${mainUrl}${flowersSuffix}`, flowersInit);
  }

  getFlowers = (url, init) =>
    fetch(url, init)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.props.saveFlowersAction(data.flowers);
      });

  render(){
    const { flowers } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.flatList}
          keyExtractor={(item, index) => item.id}
          data={flowers}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
    );
  }
}

const stateToProps = state => ({
  flowers: state.flowerListReducer.flowers
});

const dispatchToProps = dispatch => ({
  saveFlowersAction: bindActionCreators(saveFlowersAction, dispatch),
});

export default connect(stateToProps, dispatchToProps)(FlowerList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    alignItems: 'center'
  },
  item: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 160,
    height: 203,
    marginVertical: metrics.small * 2,
    marginHorizontal: metrics.small,
  },
  itemOverlay: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    paddingBottom: metrics.large
  },
  itemTitle: {
    color: colors.white,
    fontSize: fonts.size.large,
    textAlign: 'center',
    marginBottom: metrics.tiny,
  },
  itemDescription: {
    marginBottom: metrics.medium,
    color: colors.white,
    fontSize: fonts.size.tiny,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  sightingsContainer: {
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: 82.4,
    height: 24,
    backgroundColor: colors.black,
    opacity: 0.6
  },
  sightingsText: {
    color: colors.white,
    fontSize: fonts.size.tiny,
    textAlign: 'center'
  },
});
