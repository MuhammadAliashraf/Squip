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
        <Text style={[styles.textRed,styles.fs3,styles.textBold]} >Your Call Is Processing</Text>
        </View>
    </View>
  );
}

export default Policeconfrim;
