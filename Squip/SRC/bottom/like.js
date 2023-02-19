import React from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';
import styles from '../styling/NativeStyling';

const Like = () => {
  return (
    <>
    <Header/>
      <View
        style={[
          styles.justifyContentCenter,
          styles.alignItemsCenter,
          {flex: 1},
        ]}
      >
        <Text style={[styles.textBlack, styles.fs1]}>Like Screen</Text>
      </View>
    </>
  );
};

export default Like;
