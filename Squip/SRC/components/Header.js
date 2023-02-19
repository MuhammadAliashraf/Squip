import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {create} from 'react-test-renderer';
import styles from '../styling/NativeStyling';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Fontawesome from 'react-native-vector-icons/Fontawesome';

const Header = () => {
  return (
    <View style={stylesnichy.main}>
      <View style={[styles.justifyContentAround]}>
      <Text style={[styles.fs50, styles.textBlack]}>Squi<Text style={[styles.textRed]}>p</Text></Text>
        {/* <Text style={[styles.fs2, styles.textBlack,]}>
          <Image
            source={require('../assest/img/Suip_logo.png')}
            style={{width: 30, height: 40}}
          />
          PLANTIFY
        </Text> */}
      </View>
      {/* <View style={[styles.justifyContentAround]}>
        <TouchableOpacity>
          <Ionicons name="notifications" color={'green'} size={30} />
        </TouchableOpacity>
      </View>
      <View style={[styles.justifyContentAround]}>
        <TouchableOpacity>
          <Ionicons name="menu" color={'green'} size={30} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Header;

const stylesnichy = StyleSheet.create({
  main: {
    height: 60,
    // elevation: 4,
    // backgroundColor: 'lightgreen',
    justifyContent: 'space-around',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  view: {
    // backgroundColor: 'green',
    // margin: 10,
    // alignItems:'center',
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
});
