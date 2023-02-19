// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../authscreens/login';
import Signup from '../authscreens/signup';
import HomeScreen from '../screens/home';
import Splash from '../screens/Splach';
import Apphome from '../screens/Apphome';
import ForgetPass from '../authscreens/forgetpass';
import Shome from '../Squip/Shome';
import Policedetails from '../Squip/polices/policedetails';
import Detalisfire from '../Squip/firebrigade.js/detalisfire';
import Detailsambulance from '../Squip/Ambulance/detailsambulance';
import Policeconfrim from '../Squip/polices/policeconfrim';

const Stack = createNativeStackNavigator();

function Appnavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen name="Login" component={Login}  options={{
            headerShown: false,
          }} />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgetPass"
          component={ForgetPass}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Apphome"
          component={Apphome}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Shome"
          component={Shome}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Policedetails"
          component={Policedetails}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Detalisfire"
          component={Detalisfire}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Detailsambulance"
          component={Detailsambulance}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Policeconfrim"
          component={Policeconfrim}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Appnavigation;
