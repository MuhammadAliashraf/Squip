import React, {useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ReactButton, ReactButtonOutline} from '../components/reactbutton';
import styles from '../styling/NativeStyling';


export default function ForgetPass({navigation}) {
  const [model, setmodel] = useState('');

  const SignupFunction = () => {
    console.log(model);
     navigation.navigate('Login');
  };

  return (
    <>
      <View style={[styles.p2, styles.bgWhite, styles.h100]}>
        <View>
          <View>
            <TouchableOpacity></TouchableOpacity>
          </View>
          <View>
            <Text style={[styles.fs1, styles.textBlack]}>
              <Image
                source={require('../assest/img/green-1-01.png')}
                style={{width: 60, height: 60}}
              />{' '}
              PLANTIFY
            </Text>
            <Text style={[styles.fs1, styles.textGreen, styles.pt2]}>
              Forget Password
            </Text>
            <Text style={[styles.fs5, styles.textGreen, styles.pt1]}>
              Masukan NISN dan password untuk memulai belajar sekarang
            </Text>
          </View>
          <View style={[styles.pt4]}>
            <View style={[styles.mb2, styles.mt2]}>
              <Text style={[styles.fs5, styles.textBlack, styles.pb1]}>
                NISN
              </Text>

              <TextInput
                style={[
                  styles.border1,
                  styles.textBlack,
                  styles.ps2,
                  styles.rounded,
                ]}
                onChangeText={e => setmodel({...model, email: e})}
                placeholderTextColor="gray"
                placeholder="Nomor NISN"
              />
            </View>
            <View style={[styles.mb2]}>
              <Text style={[styles.fs5, styles.textBlack, styles.pb1]}>
                NISN
              </Text>
              <TextInput
                style={[
                  styles.border1,
                  styles.textBlack,
                  styles.ps2,
                  styles.rounded,
                ]}
                onChangeText={e => setmodel({...model, password: e})}
                placeholderTextColor="gray"
                placeholder="Nomor NISN"
              />
            </View>
          </View>
          <View style={[styles.mb2, styles.rounded]}>
            <ReactButton
              onPress={() => {
                // navigation.navigate('HomeScreen');
                SignupFunction();
              }}
              label="Forget Password"
            />
          </View>
          <View style={[styles.flexCenter, styles.flexRow]}>
            <Text style={[styles.fs6, styles.textBlack,styles.pe3]}>
              Create New Account!
            </Text>
            <ReactButtonOutline
              onPress={() => {
                navigation.navigate('Login');
              }}
              label="Create New Account"
            />
          </View>
        </View>
      </View>
    </>
  );
}
