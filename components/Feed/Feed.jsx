import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import Post from '../Post/Post'
import Stories from '../Stories/UserStoriesPreview'
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../../src/graphql/queries'

const data = [
{
    id: '1',
    user: {
        imageUri: "https://images.pexels.com/photos/4754648/pexels-photo-4754648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Lukas"
    },
    imageUri: 'https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    caption: 'Who no know go know',
    likesCount: '1234',
    postedAt: '5 minutes ago'
},
{
    id: '2',
    user: {
        imageUri: "https://images.pexels.com/photos/4754648/pexels-photo-4754648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Lukas"
    },
    imageUri: 'https://images.pexels.com/photos/3763944/pexels-photo-3763944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    caption: 'Who no know go know',
    likesCount: '1234',
    postedAt: '5 minutes ago'
},
{
    id: '3',
    user: {
        imageUri: "https://images.pexels.com/photos/4754648/pexels-photo-4754648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Lukas"
    },
    imageUri: 'https://images.pexels.com/photos/2780196/pexels-photo-2780196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    caption: 'Who no know go know',
    likesCount: '1234',
    postedAt: '5 minutes ago'
},

]

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts();
    }, [])

    const fetchPosts = async () => {
        try{
            const postsData = await API.graphqlOperatiom(listPosts)
            setPosts(postsData.data.listPosts.items)
        } catch(e) {
           console.log(e.message)
        }
    }
    return (
       <FlatList 
       data={posts}
       keyExtractor={({id}) => id}
       renderItem={({ item }) => <Post post={item} />}
       ListHeaderComponent={Stories}
       />
    )
}

export default Feed
