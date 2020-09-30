import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Profile from './Profile';
import HomeDetails from './Home/details';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Habilidades from './Profile/habilidades';
import Informacao from './Profile/informacao';
import Grupos from './Grupos';
import Introducao from './introducao';
import Introducao2 from './introducao/introducao';

import {AuthContext} from './context';

const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" options={{ title: 'Home'}} component={Home} />
    <HomeStack.Screen name="HomeDetails" options={{ title: 'Detalhes' }} component={HomeDetails} />
  </HomeStack.Navigator>
)

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" options={{ title: 'Perfil'}} component={Profile} />
    <ProfileStack.Screen name="Habilidades" options={{ title: 'Minhas habilidades'}} component={Habilidades} />
    <ProfileStack.Screen name="Grupos" options={{ title: 'Meus grupos'}} component={Grupos} />
    <ProfileStack.Screen name="Informacao" options={{ title: 'Meus dados'}} component={Informacao} />
  </ProfileStack.Navigator>
)

const Tabs = createMaterialBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator barStyle={{ backgroundColor: '#694fad' }}>
    <Tabs.Screen name="Home" component={HomeStackScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
    <Tabs.Screen name="Profile" component={ProfileStackScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
  </Tabs.Navigator>
)

export default function App() {

  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {setUserToken('hellkasdpjsad')},
      signOut: () => {setUserToken(null)}
    }
  })

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { userToken ?
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={TabsScreen} />
          <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        </Drawer.Navigator>
        :
        <AuthStack.Navigator>
          <AuthStack.Screen name="Introdução" options={{ title: 'Introdução' }} component={Introducao} />
          <AuthStack.Screen name="Introdução2" options={{ title: 'Sobre habilidades' }} component={Introducao2} />
          <AuthStack.Screen name="SignIn" options={{ title: 'Grupou' }} component={SignIn} />
          <AuthStack.Screen name="CreateAccount" options={{ title: 'Grupou - Criar conta' }} component={CreateAccount} />
        </AuthStack.Navigator>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  botao: {
    backgroundColor: 'red',
  },
});
