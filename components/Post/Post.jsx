import React from 'react'
import { View } from 'react-native'
import PostBody from './PostBody'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'


const Post = ({ post }) => {
    return (
        <View>
            <PostHeader imageUri={post.user.image} name={post.user.name}  />
            <PostBody imageUri={post.image} />
            <PostFooter  
             likesCount={post.likes}
             caption={post.caption}
             postedAt={post.createdAt}
             />
        </View>
    )
}

export default Post
