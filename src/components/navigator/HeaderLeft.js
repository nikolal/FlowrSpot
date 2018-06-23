import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { metrics, colors, fonts } from '../../theme/index.js';

const HeaderLeft = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => props.navigation.navigate('DrawerOpen')}>
        <Entypo name="dots-three-horizontal" size={30} color={colors.grey} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  container: {
  },
  iconContainer: {
    paddingHorizontal: metrics.large,
  }
});
