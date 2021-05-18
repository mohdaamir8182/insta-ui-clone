import React from 'react';
import { View, Image } from 'react-native';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import { colors } from '../styles/colors';
import { scale, verticalScale } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';

const Post = (props) => {

    const {singlePost} = props;
    const {cover , userImage , userName, likes, liked_by} = singlePost;

    return (
        <View style={styles.container}>
            <PostHeader 
                userImage={userImage}
                userName={userName}
            />

                <View style={styles.coverImageContainer}>
                    <Image 
                        source={cover}
                        style={{height: verticalScale(320), width: undefined, borderRadius: scale(8)}}
                        resizeMode= "cover"
                    />
                </View>

            <PostFooter 
                likes={likes}
                liked_by={liked_by}
            />
        </View>
    )
}

export default Post

const styles = ScaledSheet.create({
    container:{
        borderBottomWidth:'2@s',
        borderBottomColor: colors.border_color,
    },
    coverImageContainer:{
        marginHorizontal: '30@s'
    }
})
