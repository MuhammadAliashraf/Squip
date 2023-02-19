import axios, {Axios} from 'axios';
import React, {useState} from 'react';
import {View, Text, TextInput, Image, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ReactButton, ReactButtonOutline} from '../components/reactbutton';
import styles from '../styling/NativeStyling';
export default function Signup({navigation}) {
  const [model, setmodel] = useState([]);

  // 192.168.0.107

  const SignupFunction = () => {
    
    // console.log(model.username);
    // console.log(model.email);
    // console.log(model.password);
    // const objectsend = {
    //   data: model,
    // };

    const objectsend = {
      user_name: model.username,
      email: model.email,
      password: model.password,
    };
    axios
      .post('http://192.168.50.200:4000/api/signup', objectsend)
      .then(res => {
        if (res.data.status) {
          // console.log('if Contions');
          Alert.alert('Your Account is created!');
          // navigation.navigate('HomeScreen');
          navigation.navigate('Shome');
        } else {
          Alert.alert('User Already Exist!');
        }
        console.log(res.data);
      })
      .catch(err => console.log('This is Error '));
  };

  return (
    <>
      <View style={[styles.p2, styles.bgWhite, styles.h100]}>
        <View>
          <View>
            <TouchableOpacity></TouchableOpacity>
          </View>
          <View>
            <View style={[styles.alignItemsCenter, styles.mt3]}>
              <Image
                source={require('../assest/img/Suip_logo.png')}
                style={{width: 140, height: 90}}
              />
              <Text style={[styles.fs50, styles.textBlack]}>
                Squi<Text style={[styles.textRed]}>p</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.pt1]}>
            <View style={[styles.mb1, styles.mt1]}>
              <Text style={[styles.fs5, styles.textBlack, styles.pb1]}>
                Username
              </Text>
              <TextInput
                style={[
                  styles.border1,
                  styles.textBlack,
                  styles.ps2,
                  styles.rounded,
                ]}
                onChangeText={e => setmodel({...model, username: e})}
                placeholderTextColor="gray"
                placeholder="Enter Username"
              />
            </View>
            <View style={[styles.mb1]}>
              <Text style={[styles.fs5, styles.textBlack, styles.pb1]}>
                Email
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
                placeholder="Enter Email"
              />
            </View>
            <View style={[styles.mb1]}>
              <Text style={[styles.fs5, styles.textBlack, styles.pb1]}>
                Password
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
                placeholder="Enter Password"
              />
            </View>
          </View>
          <View style={[styles.mb2, styles.rounded]}>
            <ReactButton
              onPress={() => {
                // navigation.navigate('HomeScreen');
                SignupFunction();
              }}
              label="Create Account"
            />
          </View>
          <View style={[styles.flexCenter, styles.flexRow]}>
            <Text style={[styles.fs6, styles.textBlack, styles.me5]}>
              Already have an Account?
            </Text>
            <ReactButtonOutline
              onPress={() => {
                navigation.navigate('Login');
              }}
              label="Login"
            />
          </View>
        </View>
      </View>
    </>
  );
}
