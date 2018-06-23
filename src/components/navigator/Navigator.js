import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { metrics, colors, fonts } from '../../theme/index.js';
import Home from '../home/Home.js';
import Login from '../login/Login.js';
import Tabs from '../tabs/Tabs.js';
import HeaderLeft from './HeaderLeft.js';
import HeaderRight from './HeaderRight.js';
import HeaderTitle from './HeaderTitle.js';


const navigationConfig = {
  initialRouteName: 'Home',
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    headerLeft: <HeaderLeft navigation={navigation} />,
    headerRight: <HeaderRight navigation={navigation} />,
    title: <HeaderTitle navigation={navigation} />,
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.white,
      height: 45,
      borderBottomWidth: 0
    },
    headerTitleStyle: {
      fontSize: fonts.size.large,
      color: colors.white,
    },
  }),
};

const Navigator = createStackNavigator({
  Home: { screen: Home },
  Tabs: { screen: Tabs },
  Login: { screen: Login },
}, navigationConfig);

export default Navigator;
