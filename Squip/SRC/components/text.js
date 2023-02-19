import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TextAli() {
  return (
    <View style={styles.container}>
      <View style={styles.inputBoxContainer}>
        <Ionicons name="search" size={25} color="black" />
        <TextInput
          style={styles.inputBox}
          placeholderTextColor="black"
          placeholder="Search"
        />
        <Ionicons name="barcode-outline" size={25} color="black" />
      </View>
      <TouchableOpacity>
        {/* <Ionicons name="barcode-outline" color={'black'} size={30} /> */}
        <Ionicons name="filter-outline" color={'black'} size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    flexDirection:'row',
    justifyContent:'space-around',
    margin:10,
  },
  inputBoxContainer: {
    // backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  inputBox: {
    marginHorizontal: 10,
    flex: 1,
    color: 'black',
    },
});

      {/* <View style={{flex:1}}>
        <View
          style={[
            styles.flexRow,
            styles.alignItemsCenter,
            styles.justifyContentCenter,
          ]}
        >
          <Ionicons name="search" color={'black'} size={30} />
          <TextInput
            style={[
              styles.border1,
              styles.textBlack,
              styles.ps2,
              styles.rounded,
              styles.w75,
            ]}
            // onChangeText={e => setmodel({...model, email: e})}
            placeholderTextColor="black"
            placeholder="Search"
          />
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="barcode-outline" color={'black'} size={30} />
            <Ionicons name="filter-outline" color={'black'} size={30} />
          </TouchableOpacity>
        </View>
      </View> */}