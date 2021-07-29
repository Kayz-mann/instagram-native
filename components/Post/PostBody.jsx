import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'

const PostBody = ({ imageUri }) => {
    return (
        <View>
            <Image source={{ uri:imageUri }} style={styles.image} />
        </View>
    )
}

export default PostBody

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
    }
})
