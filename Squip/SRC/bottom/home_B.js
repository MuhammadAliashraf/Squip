import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import styles from '../styling/NativeStyling';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Bottomnavigator from './bottomnavigator';
import {ScrollView} from 'react-native';
import TextAli from '../components/text';
import {ReactButton} from '../components/reactbutton';

function Home_B() {
  return (
    <>
      <Header />
    </>
  );
}

export default Home_B;
