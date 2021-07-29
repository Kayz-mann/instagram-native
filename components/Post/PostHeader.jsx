import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import Icon from 'react-native-vector-icons/Entypo'


const PostHeader = ({ imageUri, name }) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
            <ProfilePicture uri={imageUri} size={40} />
            <Text style={styles.name}>{name}</Text>
        </View>
            <View style={styles.right}>
               <Icon name="dots-three-vertical" size={16}  />
            </View>
        </View>
    )
}

export default PostHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    left:{
        flexDirection: 'row',
        
    },
    right: {
        marginRight: 15,
    },
    name: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#C93290',
    } 
})
