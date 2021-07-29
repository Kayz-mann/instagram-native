import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Story from '../Story/UserStoryPreview'
import storiesData from '../../data/stories'
import { API, graphqlOperation } from 'aws-amplify'
import { listStories } from '../../src/graphql/queries'




const UserStoriesPreview
 = () => {

    const [stories, setStories] = useState([])

    useEffect(() => {
        fetchStories()
    }, [])

    const fetchStories = async () => {
        try {
            const storiesData = await API.graphql(graphqlOperation(listStories))
            setStories(storiesData.data.listStories.items)
        } catch(e) {
            console.log(e)
        }
    }
    
     
     return(
        <View>
        <FlatList 
          data={stories}
          keyExtractor={({ userId: id }) => id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Story story={item} />}
          style={styles.container}
        />
    </View>
    )
    
    
 
}

export default UserStoriesPreview

// imageUri={item.imageUri} name={item.name} 

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    }
})