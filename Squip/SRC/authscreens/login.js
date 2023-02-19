import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import Bottomnavigator from '../bottom/bottomnavigator';
import {ReactButton} from '../components/reactbutton';
import styles from '../styling/NativeStyling';

export default function Login({navigation}) {
  const [model, setmodel] = useState([]);

  const [userlogin, setuserlogin] = useState([]);

  const loginFunction = () => {
    // console.log(userlogin);
    const objectsend = {
      email: model.email,
      password: model.password,
    };
    axios
      .post('http://192.168.50.200:4000/api/login', objectsend)
      .then(res => {
        if (res.data.Status == true) {
          // console.log('If Condition');
          Alert.alert('Successful Login!');
          navigation.navigate('Shome', userlogin);
          // navigation.navigate('HomeScreen');
        } else {
          Alert.alert('User Not Found!');
        }
        setuserlogin(res.data.Userdata);
        // console.log(res.data.Userdata.user_name);
      })
      .catch(err => {
        Alert.alert(err);
      });
    //   navigation.navigate('HomeScreen');
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

          <View style={[styles.pt4]}>
            <View style={[styles.mb2, styles.mt2]}>
              <Text style={[styles.fs5, styles.textBlack, styles.pb1]}>
                Username/Email
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
            <View style={[styles.mb2]}>
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
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ForgetPass');
                }}
              >
                <Text
                  style={[
                    // styles.fs5,
                    styles.textRed,
                    styles.textRight,
                    styles.pt1,
                  ]}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.rounded]}>
            <ReactButton
              onPress={() => {
                // navigation.navigate('HomeScreen');
                loginFunction();
              }}
              label="Sign in"
            />
          </View>
          {/* <View>
            <Text
              style={[
                styles.fs5,
                styles.textBlack,
                styles.textCenter,
                styles.mt2,
                styles.mb2,
              ]}
            >
              OR
            </Text>
          </View> */}
          {/* <View style={[styles.mb2, styles.rounded]}>
            <ReactButton onPress={() => {}} label="FaceBook With Sign in" />
          </View>
          <View style={[styles.mb2, styles.rounded]}>
            <ReactButton onPress={() => {}} label="Google With Sign in" />
          </View> */}
          {/* <View style={[styles.flexCenter,]}>
            <ReactButton
              onPress={() => {
                navigation.navigate('Signup');
              }}
              label="Create Account"
            />
            </View> */}

          {/* New Account text  */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}
          >
            <Text style={[styles.fs5, styles.textBlack, styles.textRight]}>
              Create New Account!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
