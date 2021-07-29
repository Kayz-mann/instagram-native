import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'

const NotificationsScreen = () => {
    return (
        <ScrollView>
        <SafeAreaView style={{backgroundColor: 'black' , height: '100vh'}}>
        <Text style={{textAlign: 'center', marginTop: 300, fontSize: 30, color: 'white'}}>
            Create Notification
        </Text>
        </SafeAreaView>
        </ScrollView>
    )
}

export default NotificationsScreen
