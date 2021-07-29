import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import StoryScreen from '../screens/StoryScreen';


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    
    <HomeStack.Navigator>
      <HomeStack.Screen options={{
        title: 'Instagram',
        headerLeftContainerStyle: {
          marginLeft: 15,
          
        },
        headerRightContainerStyle: {
          marginRight: 15,
        },
        headerLeft: () => (
          <View styles={{marginLeft: 10}}>
             <Feather  name="camera" size={25} color={'#000'} />
          </View>
        ),
        // headerTitle: () => (
        //   <Image source={logo} resizeMode='contain' style={{width: 125, }} title="Instagram" />
        // ),
        headerRight: () => (
           <View>
             <Ionicons name="paper-plane-outline" size={25} color={"#545454"} />
           </View>
        ),
      }} 
      name="Home"
      component={HomeScreen}
      style={styles.heading} />
      
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen

const styles = StyleSheet.create({
   heading: {
      justifyContent: 'space-between'
    }
   
    
  });
