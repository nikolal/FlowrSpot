import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { metrics, colors, fonts } from '../../theme/index.js';

const HeaderTitle = props => {
  return (
    <View style={styles.container}>
      <Ionicons name="md-flower" size={30} color={colors.pink} style={styles.icon}/>
      <Text style={styles.title}>FlowrSpot</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginRight: metrics.medium,
  },
  title: {
    fontSize: fonts.size.huge,
    color: colors.pink
  }
});
