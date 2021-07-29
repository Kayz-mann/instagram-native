import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, View, Image } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Router from './router/Router';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'

Amplify.configure(config)
import { withAuthenticator } from 'aws-amplify-react-native'


function App() {
  return (
 
    <NavigationContainer>
    <StatusBar barStyle="dark-content" />
       <Router />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    justifyContent: 'space-between'
  }
 
  
});

export default withAuthenticator(App)



// adding AWS function with graphQL and updating the UI to the latest up next
