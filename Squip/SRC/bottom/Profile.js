// import React from 'react'
// import { Text, View } from 'react-native'
// import styles from '../styling/NativeStyling'

// const Profile = () => {
//   return (
//     <View>
//       <View
//         style={[
//           styles.justifyContentCenter,
//           styles.alignItemsCenter,
//           {flex: 1},
//         ]}
//       >
//         <Text style={[styles.textBlack, styles.fs1]}>Profile Screen</Text>
//       </View>
//     </View>
//   )
// }

// export default Profile
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = ({ text }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="truck" size={25} color="#777" />
      <Text style={styles.text}>Muhammad Ali</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
});

export default Profile;
