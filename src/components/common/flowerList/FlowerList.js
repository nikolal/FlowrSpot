import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveFlowersAction, updateLoadingAction, saveSearchTextAction } from './FlowerListContainer.js';
import { LinearGradient } from 'expo';
import { metrics, colors, fonts } from '../../../theme/index.js';
import { mainUrl, flowersSuffix, flowersInit } from '../../../../config/api.js';


const renderItem = ({ item }, index) => {
  return (
    <ImageBackground style={styles.item} source={{ uri: `https:${item.profile_picture}` }}>
      <LinearGradient
        colors={[ 'transparent', 'rgb(19, 19, 20)' ]}
        style={styles.itemOverlay}
      >
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

  getFlowers = (url, init) => {
    this.props.updateLoadingAction(true);
    fetch(url, init)
      .then(res => res.json())
      .then(data => {
        this.props.saveFlowersAction(data.flowers);
        this.props.updateLoadingAction(false);
      })
      .catch(err => {
        this.props.updateLoadingAction(false);
        console.log(err);
      });
  }

  render(){
    const { flowers, isLoading } = this.props;
    return (
      <View style={styles.container}>
        {
          isLoading === false && flowers.length === 0
          ? <Text style={styles.emptyMessage}>There is no flowers available for this search...</Text>
          : <FlatList
              contentContainerStyle={styles.flatList}
              keyExtractor={(item, index) => item.id}
              data={flowers}
              renderItem={renderItem}
              numColumns={2}
              refreshControl={
                <RefreshControl
                  refreshing={isLoading === true && flowers.length === 0}
                  onRefresh={() => {
                    this.props.saveSearchTextAction('');
                    this.getFlowers(`${mainUrl}${flowersSuffix}`, flowersInit);
                  }}
                />
              }
            />
        }
      </View>
    );
  }
}

const stateToProps = state => ({
  flowers: state.flowerListReducer.flowers,
  searchText: state.flowerListReducer.searchText,
  isLoading: state.flowerListReducer.isLoading
});

const dispatchToProps = dispatch => ({
  saveFlowersAction: bindActionCreators(saveFlowersAction, dispatch),
  updateLoadingAction: bindActionCreators(updateLoadingAction, dispatch),
  saveSearchTextAction: bindActionCreators(saveSearchTextAction, dispatch),
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
    fontFamily: 'ubuntu',
    color: colors.white,
    fontSize: fonts.size.large,
    textAlign: 'center',
    marginBottom: metrics.tiny,
  },
  itemDescription: {
    fontFamily: 'ubuntu',
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
    fontFamily: 'ubuntu',
    color: colors.white,
    fontSize: fonts.size.tiny,
    textAlign: 'center'
  },
  emptyMessage: {
    fontFamily: 'ubuntu',
    margin: metrics.medium,
    color: colors.grey,
    textAlign: 'center'
  }
});
