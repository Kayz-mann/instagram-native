import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import styles from './Styles'
import storiesData from '../../data/stories'

const UserStoryPreview
 = (props) => {

    const {
        story: {
            user: {
                id,
                image,
                name
            }
        }
    } = props
    const navigation = useNavigation();

    const viewStory = () => {
        navigation.navigate("Story", { userId: id})
    }
    return (
        <TouchableOpacity style={styles.container} onPress={viewStory}>
            <ProfilePicture uri={image} />
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}

export default UserStoryPreview


// changed imageUri to image because image const was used in the graphql schema

