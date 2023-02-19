import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header';
import { ReactButton } from '../../components/reactbutton';
import styles from '../../styling/NativeStyling';


function Policeconfrim() {
  return (
    <View>
      <Header />
      <View style={[styles.rounded]}>
          <ReactButton
            onPress={() => navigation.navigate('Policedetails')}
            label="We Are Confirming Your Call.."
          />
        </View>
    </View>
  );
}

export default Policeconfrim;
