import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'

const PostScreeen = () => {
    return (
        <ScrollView>
        <SafeAreaView style={{backgroundColor: 'black' , height: '100vh'}}>
            <Text style={{textAlign: 'center', marginTop: 300, fontSize: 30, color: 'white'}}>
                Create Post
            </Text>
        </SafeAreaView>
        </ScrollView>
    )
}

export default PostScreeen
