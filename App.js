import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store.js';
import Drawer from './src/components/drawer/Drawer.js';
import { Font } from 'expo';


class App extends Component {

  state = {
    isReady: false
  }

  componentDidMount = () => {
    Font.loadAsync({
      'ubuntu': require('./assets/fonts/Ubuntu/Ubuntu-Regular.ttf')
    })
    .then(() => this.setState({ isReady: true }));
  }

  render() {
    if (this.state.isReady) {
      return (
        <Provider store={store}>
          <Drawer />
        </Provider>
      );
    } else {
      return <ActivityIndicator isLoading={!this.state.isReady} />;
    }
  }
}

export default App;
