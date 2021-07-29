import React from 'react'
import 'react-native-gesture-handler'
import DiscoveryScreen from '../screens/DiscoveryScreen';
import PostScreeen from '../screens/PostScreeen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeStackScreen from './HomeRoutes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

const TabBottomNav = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator style={styles.navigator}
    
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
    
            if (route.name === 'Home') {
              return (
                <Foundation name="home" size={size} color={color} />
              )
            }
            if (route.name === 'Discovery') {
              return (
                <Feather name="search" size={size} color={color} />
              )
            }
            if (route.name === 'Post') {
              return (
                <Feather name="plus-square" size={size} color={color} />
              )
            }
            if (route.name === 'Notifications') {
              return (
                <AntDesign name="hearto" size={size} color={color} />
              )
            }
            if (route.name === 'Profile') {
              return (
                <Ionicons name="person-outline" size={size} color={color} />
              )
            }
            
    
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={PostScreeen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default TabBottomNav

const styles = () => StyleSheet.create({
     
})
