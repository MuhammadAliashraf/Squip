import React, { useState } from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header';
import { ReactButton } from '../../components/reactbutton';
import styles from '../../styling/NativeStyling';
import MapView, {PROVIDER_GOOGLE,Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';


const Detalisfire = ({navigation}) => {
  const [track, setTrack] = useState(0);
  const [tracks, setTracks] = useState(0);

  Geolocation.getCurrentPosition(data => {
    setTrack(data.coords.latitude);
    setTracks(data.coords.longitude);
  });

  return (
    <View>
    <Header />
    <View>
    <View style={[styles.mt2,styles.mb3]} >
        <MapView style={{height:300,width:"100%"}}
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      region={{
        latitude:track,
        longitude: tracks,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      >
        <Marker
            coordinate={{
              latitude: track,
              longitude: tracks,
            }}
          />
    </MapView>
      </View>
      <View style={[styles.alignItemsCenter, styles.mt3]}>
        <Text style={[styles.textBlack]} >Select Your Emergency Level</Text>
        </View>
      <View style={[styles.rounded]}>
        <ReactButton
          onPress={() => navigation.navigate('Policeconfrim')}
          label="Fire"
        />
      </View>
      <View style={[styles.rounded]}>
        <ReactButton
          onPress={() => navigation.navigate('Policeconfrim')}
          label="Cylinder Blast"
        />
      </View>
      <View style={[styles.rounded]}>
        <ReactButton
          onPress={() => navigation.navigate('Policeconfrim')}
          label="Short Circuit"
        />
      </View>
    </View>
  </View>
  );
};

export default Detalisfire;
