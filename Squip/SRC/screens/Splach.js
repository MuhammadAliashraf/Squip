import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {ReactButton} from '../components/reactbutton';
import styles from '../styling/NativeStyling';

function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    },2000);
  }, []);
  return (
    <
      // style={[
      //   styles.bgBlack,
      //   styles.justifyContentCenter,
      //   styles.alignItemsCenter,
      //   {flex: 1},
      // ]}
    >
      <View style={[styles.h50, stylesfromsheet.Bottomrounded]}>
        <View
          style={[
            styles.justifyContentCenter,
            styles.alignItemsCenter,
            {flex: 1},
          ]}
        >
          <Image source={require('../assest/img/Suip_logo.png')} style={{width:250,height:160}} />
          <Text style={[styles.fs50, styles.textBlack,styles.mt3]}>Squi<Text style={[styles.textRed]}>p</Text></Text>
        </View>
      </View>
      <View>
        <View style={[styles.p3]}>
          <Text style={[styles.textBlack,styles.fs1]}>WE ARE READY</Text>
          <Text style={[styles.textRed,styles.fs4]}>FOR YOUR HELP</Text>
          <Text style={[styles.textBlack,styles.pt1]}>
          Squip is an emergency app designed to help people during emergency situations. The app provides users with access to a range of emergency services, including police, ambulance, fire department, and other emergency contacts
          </Text>
        </View>
      </View>
    </>
  );
}

export default Splash;

const stylesfromsheet = StyleSheet.create({
  Bottomrounded: {
    borderBottomLeftRadius: 40,
    borderBottomEndRadius: 40,
  },
});
