import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveFlowersAction, saveSearchTextAction } from '../flowerList/FlowerListContainer.js';
import { SimpleLineIcons } from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../../theme/index.js';
import { mainUrl, flowersSuffix, flowerSearchInit } from '../../../../config/api.js';

class FlowerSearchInput extends Component {

  searchFlowers = (text) => this.props.saveSearchTextAction(text)

  getFlowers = (url, init) => {
    Keyboard.dismiss();
    fetch(url, init)
      .then(res => res.json())
      .then(data => this.props.saveFlowersAction(data.flowers));
  }

  render (){
    const { searchText } = this.props;
    return (
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={this.searchFlowers}
          value={searchText}
          placeholder="Looking for something specific?"
        />
        <TouchableOpacity>
          <SimpleLineIcons name="magnifier" size={20} color={colors.pink} style={styles.searchIcon} onPress={() => this.getFlowers(`${mainUrl}${flowersSuffix}/search?query=${searchText}`, flowerSearchInit)}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const stateToProps = state => ({
  searchText: state.flowerListReducer.searchText,
});

const dispatchToProps = dispatch => ({
  saveFlowersAction: bindActionCreators(saveFlowersAction, dispatch),
  saveSearchTextAction: bindActionCreators(saveSearchTextAction, dispatch),
});

export default connect(stateToProps, dispatchToProps)(FlowerSearchInput);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    width: 312,
    height: 48
  },
  searchInput: {
    flex: 1,
    paddingLeft: metrics.medium,
    color: colors.grey
  },
  searchIcon: {
    marginRight: metrics.huge
  }
});
