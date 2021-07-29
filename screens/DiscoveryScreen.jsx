import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'

const DiscoveryScreen = () => {
    return (
        <ScrollView>
        <SafeAreaView style={{backgroundColor: 'black' , height: '100vh'}}>
            <Text style={{textAlign: 'center', marginTop: 300, fontSize: 30, color: 'white'}}>
                Discover Places           
            </Text>
        </SafeAreaView>
        </ScrollView>
    )
}

export default DiscoveryScreen
