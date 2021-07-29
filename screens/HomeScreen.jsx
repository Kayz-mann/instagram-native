import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import Feed from '../components/Feed/Feed'




const HomeScreen = () => {
    return (
        <ScrollView>
        <SafeAreaView>
          <Feed />
        </SafeAreaView>
        </ScrollView>
    )
}

export default HomeScreen
