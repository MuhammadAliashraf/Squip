import React, { useState } from 'react';
import {Image, Text, View} from 'react-native';
import Header from '../components/Header';
import {ReactButton} from '../components/reactbutton';
import styles from '../styling/NativeStyling';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const Shome = ({navigation}) => {


  const {currentuser,setcurrentuser}=useState([])

  return (
    <View>
      <Header />
      <View style={[styles.mt2, styles.mb3]}>
        {/* <MapView style={{height:300,width:"100%"}}
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      >
    </MapView> */}
    <View>
      <Text></Text>
    </View>
        <View style={[styles.alignItemsCenter,styles.mt3]} >
          {/* <Image
            source={require('../assest/img/Suip_logo.png')}
            style={{width: 230, height: 150}}
          /> */}
        </View>
        <View style={[styles.alignItemsCenter, styles.mt3]}>
          <Text style={[styles.textBlack,styles.textBold]}>
            Select Your Emergency <Text style={[styles.textRed]} >Department</Text>
          </Text>
        </View>
      </View>
      <View>
        <View style={[styles.rounded]}>
          <ReactButton
            onPress={() => navigation.navigate('Policedetails')}
            label="Police"
          />
        </View>
        <View style={[styles.rounded]}>
          <ReactButton
            onPress={() => navigation.navigate('Detalisfire')}
            label="Fire Brigade"
          />
        </View>
        <View style={[styles.rounded]}>
          <ReactButton
            onPress={() => navigation.navigate('Detailsambulance')}
            label="Ambulance"
          />
        </View>
      </View>
    </View>
  );
};

export default Shome;
