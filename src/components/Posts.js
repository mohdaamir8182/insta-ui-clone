import React from 'react';
import { View } from 'react-native';
import { postList } from '../constants/Utils';
import Post from './Post';

const Posts = () => {
    return (
        <View>
            {
                postList.map(single_post => {
                    return(
                        <View key={single_post.id}>
                            <Post 
                                singlePost={single_post}
                            />
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Posts
