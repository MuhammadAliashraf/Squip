import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header';
import { ReactButton } from '../../components/reactbutton';
import styles from '../../styling/NativeStyling';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


const Detalisfire = () => {
  return (
    <View>
    <Header />
    <View>
    <View style={[styles.mt2,styles.mb3]} >
        <MapView style={{height:300,width:"100%"}}
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      >
    </MapView>
      </View>
      <View style={[styles.alignItemsCenter, styles.mt3]}>
        <Text style={[styles.textBlack]} >Select Your Emergency Level</Text>
        </View>
      <View style={[styles.rounded]}>
        <ReactButton
          onPress={() => navigation.navigate('Policedetails')}
          label="Fire"
        />
      </View>
      <View style={[styles.rounded]}>
        <ReactButton
          onPress={() => navigation.navigate('Policedetails')}
          label="Cylinder Blast"
        />
      </View>
      <View style={[styles.rounded]}>
        <ReactButton
          onPress={() => navigation.navigate('Policedetails')}
          label="Short Circuit"
        />
      </View>
    </View>
  </View>
  );
};

export default Detalisfire;
