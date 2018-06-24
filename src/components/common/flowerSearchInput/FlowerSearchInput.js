import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveFlowersAction } from '../flowerList/FlowerListContainer.js';
import { SimpleLineIcons } from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../../theme/index.js';
import { mainUrl, flowersSuffix, flowerSearchInit } from '../../../../config/api.js';

class FlowerSearchInput extends Component {

  state = {
    searchText: ''
  }

  searchFlowers = (text) => {
    this.setState({ searchText: text });
  }

  getFlowers = (url, init) => {
    Keyboard.dismiss();

    fetch(url, init)
      .then(res => res.json())
      .then(data => this.props.saveFlowersAction(data.flowers));
  }

  render (){
    return (
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={this.searchFlowers}
          value={this.state.searchText}
          placeholder="Looking for something specific?"
        />
        <TouchableOpacity>
          <SimpleLineIcons name="magnifier" size={20} color={colors.pink} style={styles.searchIcon} onPress={() => this.getFlowers(`${mainUrl}${flowersSuffix}/search?query=${this.state.searchText}`, flowerSearchInit)}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const dispatchToProps = dispatch => ({
  saveFlowersAction: bindActionCreators(saveFlowersAction, dispatch),
});

export default connect(null, dispatchToProps)(FlowerSearchInput);

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
