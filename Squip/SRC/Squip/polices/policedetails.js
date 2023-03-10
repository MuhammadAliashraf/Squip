import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {MapMarker} from 'react-native-maps';
import Header from '../../components/Header';
import {ReactButton} from '../../components/reactbutton';
import styles from '../../styling/NativeStyling';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';

const Policedetails = ({navigation}) => {
  const [track, setTrack] = useState(0);
  const [tracks, setTracks] = useState(0);

  Geolocation.getCurrentPosition(data => {
    setTrack(data.coords.latitude);
    setTracks(data.coords.longitude);
  });

  return (
    <View>
      <Header />
      <View style={[styles.mt2]}>
        <MapView
          style={{height: 300, width: '100%'}}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          region={{
            latitude: track,
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
      <View>
        <View style={[styles.alignItemsCenter, styles.mt3]}>
          <Text style={[styles.textBlack]}>Select Your Emergency Level</Text>
        </View>
      </View>
      <View>
        <View style={[styles.rounded]}>
          <ReactButton
            onPress={() => navigation.navigate('Policeconfrim')}
            label="Fight / Fire"
          />
        </View>
        <View style={[styles.rounded]}>
          <ReactButton
            onPress={() => navigation.navigate('Policeconfrim')}
            label="Robbery"
          />
        </View>
        <View style={[styles.rounded]}>
          <ReactButton
            onPress={() => navigation.navigate('Policeconfrim')}
            label="Harassement"
          />
        </View>
      </View>
    </View>
  );
};

export default Policedetails;
