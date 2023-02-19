import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../styling/NativeStyling';
import BS2 from './like';
import BS3 from './BS3';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from './Profile';
import Home_B from './home_B';
import Like from './like';

const Bottom = createBottomTabNavigator();

function Bottomnavigator() {
  return (
    <>
      <Bottom.Navigator>
        <Bottom.Screen
          name="Home_B"
          component={Home_B}
          options={{
            headerShown: false,
            title: '',
            // Add icon In Bottom navigation Start When the Icon Press changes the color
            tabBarIcon: tabinfo => {
              return (
                // <Image
                //   source={require('../assest/img/homeicon.png')}
                //   style={{
                //     width: 30,
                //     height: 30,
                //     tintColor: tabinfo.focused ? 'lightblue' : 'black',
                //   }}
                // />
                <Ionicons
                  name="home-outline"
                  color={'black'}
                  size={30}
                  style={{color: tabinfo.focused ? 'green' : 'black'}}
                />
              );
            },
            // Add icon In Bottom navigation End
          }}
        />
        <Bottom.Screen
          name="Like"
          component={Like}
          options={{
            headerShown: false,
            title: '',
            tabBarIcon: tabinfo => {
              return (
                <Ionicons
                  name="heart-outline"
                  color={'black'}
                  size={30}
                  style={{color: tabinfo.focused ? 'green' : 'black'}}
                />
              );
            },
          }}
        />
        <Bottom.Screen
          name="BS3"
          component={BS3}
          options={{
            headerShown: false,
            title: '',
            tabBarIcon: tabinfo => {
              return (
                <Ionicons
                  name="cart-outline"
                  color={'black'}
                  size={30}
                  style={{color: tabinfo.focused ? 'green' : 'black'}}
                />
              );
            },
          }}
        />
        <Bottom.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            title: '',
            tabBarIcon: tabinfo => {
              return (
                <Ionicons
                  name="person-outline"
                  color={'black'}
                  size={30}
                  style={{color: tabinfo.focused ? 'green' : 'black'}}
                />
              );
            },
          }}
        />
      </Bottom.Navigator>
    </>
  );
}

export default Bottomnavigator;
