import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import ADIcon from 'react-native-vector-icons/AntDesign'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FAIcon from 'react-native-vector-icons/FontAwesome'

const PostFooter = ({likesCount:likesCountProp, caption, postedAt}) => {

    const [isLiked, setIsLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(0)

    const onLikePressed = () => {
        const amount = isLiked ? -1 : 1 ;
        setLikesCount(parseInt( likesCount + amount));
        
        setIsLiked(!isLiked);
        
    }

   useEffect(() => {
      setLikesCount(likesCountProp) 
   }, [])

    return (
        <View style={styles.container}>
        <View style={styles.iconsContainer}>
            <View style={styles.leftIcons} >
                <TouchableWithoutFeedback onPress={onLikePressed}>
                    {isLiked ? 

                     <ADIcon name="heart" size={25} color={'red'} />
                      :
                     <ADIcon name="hearto" size={25} color={'gray'} />
                    }
               </TouchableWithoutFeedback>
               <FontistoIcon name="comment" size={22} color={'gray'}  />
               <IoniconsIcon name="paper-plane-outline" size={25} color={'gray'}  />
            </View>
            <View>
               <FAIcon name="bookmark-o" size={25} />
            </View>
        </View>
            <Text style={styles.likes} >{likesCount} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
           
        </View>
    )
}

export default PostFooter


const styles = StyleSheet.create({
    cotainer: {
        margin: 5,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    likes:{
        fontWeight: 'bold',
        margin: 3,
    },
    leftIcons: {
        flexDirection: 'row',
        width: 120,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    caption: {
        margin: 3,
    },
    postedAt: {
        color: 'lightgray',
        margin: 3,
    }
})