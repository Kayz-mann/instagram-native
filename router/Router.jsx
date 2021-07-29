import React from 'react'
import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabBottomNav from './TabBottomNav';
import HomeStackScreen from './HomeRoutes';
import StoryScreen from '../screens/StoryScreen';

const RootStack = createStackNavigator();

const Router = () => {
    
    return (
        <RootStack.Navigator>
            <RootStack.Screen name={'Home'} component={TabBottomNav}
            options = {{ headerShown: false}} />
            <RootStack.Screen name="Story" component={StoryScreen} 
              options={{ headerShown: false }} />
        </RootStack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    
   
    
  });
