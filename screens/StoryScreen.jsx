import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ImageBackground, ActivityIndicator, StyleSheet, TouchableWithoutFeedback, Dimensions, TextInput } from 'react-native'
import ProfilePicture from '../components/ProfilePicture/ProfilePicture'
import storiesData from '../data/stories'
import Feather from 'react-native-vector-icons/Feather'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import { API, graphqlOperation  } from 'aws-amplify'
import { listStories } from '../src/graphql/queries'


const StoryScreen = () => {
    // const [userStories, setUserStories] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(null)
    // const [activeStory, setActiveStory] = useState(null)
    const [stories, setStories] = useState([])
    
    const route = useRoute();
    const navigation = useNavigation()
    const userId = route.params.userId

    const fetchStories = async () => {
        try {
           const storiesData = await API.graphql(graphqlOperation(listStories))
           setStories(storiesData.data.listStories.item)
        } catch(e) {
          console.log(e)
        }
    }
    

  

    useEffect(() => {
        fetchStories()
        // const userStories = storiesData.find( storyData => storyData.user.id === userId)
        // setUserStories(userStories)
        setActiveStoryIndex(0)
    }, [])

    const navigateToNextUser = () => {
        navigation.push("Story", { userId: (parseInt(userId) + 1).toString() })
    }

    const navigateToPreviousUser = () => {
        navigation.push("Story", { userId: (parseInt(userId) - 1).toString() })
    }

    useEffect(() => {
        if(!userStories){
            return;
        }

        if(activeStoryIndex < 0){
            setActiveStoryIndex(0);
            return;
        }

        if(activeStoryIndex >= userStories.length){
            setActiveStoryIndex(userStories.stories.length - 1)
            return;
        }
        if (userStories && userStories.stories.length > activeStoryIndex - 1){
            setActiveStory(userStories.stories[activeStoryIndex])
        }
    }, [activeStoryIndex])

    const handleNextStory = () => {
        if(activeStoryIndex >= userStories.stories.length + 1){
            navigateToNextUser();
            return
        }
         setActiveStoryIndex(activeStoryIndex + 1)
    }

    const handlePreviousStory = () => {
        if (activeStoryIndex <= 0){
            navigateToPreviousUser()
            return
        }
         setActiveStoryIndex(activeStoryIndex - 1)
    }

    const handlePress = (evt) => {
         const x = evt.nativeEvent.locationX;
         const screenWidth = Dimensions.get('window').width;
         
         
         if (x < screenWidth/2) {
             handleNextStory()
         } else {
             handlePreviousStory()
         }
    }
    

  

    // if (!activeStory){
    //     return(
    //         <SafeAreaView>
    //         <ActivityIndicator />
    //         </SafeAreaView>
    //     )
        
    // }

    // console.log("active story")
    // console.log(activeStory)

    const activeStory = stories[activeStoryIndex];

    // const activeStory = userStories.stories[activeStoryIndex];

    return (
        <SafeAreaView style={styles.container}>
           <TouchableWithoutFeedback  onPress={handlePress}>
            <ImageBackground source={{uri: activeStory.image}} style={styles.image}>
                <View style={styles.userInfo}>
                    <ProfilePicture uri={activeStory.user.image} size={50} />
                    <Text style={styles.userName}>{activeStory.user.name}</Text>
                    <Text style={styles.postedTime}>{activeStory.createdAt}</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.cameraButton}>
                       <Feather name="camera" size={25} color={'#fff'} />
                    </View>
                    
                    <View style={styles.textInputContainer}>
                       <TextInput 
                       style={styles.textInput}
                       editable maxLength={40} placeholder="Send message" placeholderTextColor={'white'} />
                    </View>
                    <View style={styles.messageButton}>
                       <IoniconsIcon name="paper-plane-outline" size={25} color={'#fff'} />
                    </View>
                    
                </View>
            </ImageBackground>
            </TouchableWithoutFeedback>
           
        </SafeAreaView>
    )
}

export default StoryScreen


const styles = StyleSheet.create({
    container: {
        height: '100%',
        
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-between',
        
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    userName: {
        color: 'white',
        fontWeight: '500',
        fontSize: 10
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    textInputContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        marginHorizontal: 10,
        borderRadius: 50,
        height: 50,
        paddingHorizontal: 10,
        
    },
    textInput: {
        height: '100%',
        color:'white',
        fontSize: 16,
        outlineWidth: 0,
    },
    postedTime: {
        color: '#808080',
        fontSize: 10,
        marginLeft: 10,
        fontWeight: '700',

    },
    cameraButton: {
        marginRight: 20,
        marginLeft: 8,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 50,
        padding: 8,
        
    },
    messageButton: {
        paddingLeft: 20,
        paddingRight: 10,
    }
})