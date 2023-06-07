import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Start from "../screens/start";
import Choise from "../screens/choise";

// distribuition

import Register from "../screens/distribution/register";
import Adress from "../screens/distribution/adress";
import Password from '../screens/distribution/password/index'
import Login from '../screens/login'
import Operation from '../screens/distribution/operation'
import RegisterCompany from "../screens/company/registerCompany";
import AddressCompany from "../screens/company/addressCompany";
import PasswordCompany from "../screens/company/passwordCompany";
import Profile from "../screens/profile";
import Home from "../screens/company/home";
import InfosCentro from "../screens/infosCentro";
import RegisterFood from "../screens/distribution/DistProfile";
import CentroInfos from "../screens/distribution/DistProfile/centroInfos";
import Edit from '../screens/distribution/edit'

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Choise"
          component={Choise}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Adress"
          component={Adress}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Password"
          component={Password}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Operation"
          component={Operation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterCompany"
          component={RegisterCompany}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddressCompany"
          component={AddressCompany}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordCompany"
          component={PasswordCompany}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InfosCentro"
          component={InfosCentro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterFood"
          component={RegisterFood}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CentroInfos"
          component={CentroInfos}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
