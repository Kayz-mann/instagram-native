import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'

const ProfileScreen = () => {
    return (
        <ScrollView>
        <SafeAreaView style={{backgroundColor: 'black' , height: '100vh'}}>
        <Text style={{textAlign: 'center', marginTop: 300, fontSize: 30, color: 'white'}}>
            Create Profile
        </Text>
        </SafeAreaView>
        </ScrollView>
    )
}

export default ProfileScreen
