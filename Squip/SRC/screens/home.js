import React from 'react';
import {Text, View} from 'react-native';
import Drawernavigator from '../navigations/drawernavigator';
import styles from '../styling/NativeStyling';

function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <Drawernavigator/>
    </View>
  );
}

export default HomeScreen;
