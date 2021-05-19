import React from 'react';
import { Text, View } from 'react-native';
import Icon from './Icon';
import { colors } from '../styles/colors';
import { scale } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';

const PostFooter = (props) => {
    const {likes , liked_by} = props;
    return (
        <View>

            <View style={styles.topContainer}>
                <View style={styles.leftContainer}>
                    <Icon 
                        image={require('../assets/heart.png')}
                        size={20}
                        color={colors.active_icon}
                    />

                    <View style={{marginLeft: scale(15)}}>
                        <Icon 
                            image={require('../assets/circle.png')}
                            size={20}
                            color={colors.active_icon}
                        />
                    </View>

                    <View style={{marginLeft: scale(15)}}>
                        <Icon 
                            image={require('../assets/send.png')}
                            size={20}
                            color={colors.active_icon}
                        />
                    </View>   
                </View> 
                <View style={styles.rightContainer}>
                        <Icon 
                            image={require('../assets/bookmark.png')}
                            size={20}
                            color={colors.active_icon}
                        />
                </View>  
            </View>

            <View style={styles.bottomContainer}>
                    <Text style={styles.likesTextStyle}>{likes} Likes</Text>
                    <View style={styles.likedbyContainer}>
                        <Text style={{lineHeight: 12}}>{liked_by} </Text>
                        <Text style={styles.hashtagStyle}>#marinad</Text>
                    </View>
            </View>

        </View>
    )
}

export default PostFooter

const styles = ScaledSheet.create({
    topContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '15@s',
        marginTop: '15@vs',
        marginBottom: '10@vs'
    },
    leftContainer:{
        flexDirection: 'row',
    },
    rightContainer:{

    },
    bottomContainer: {
        marginBottom: '10@vs'
    },
    likedbyContainer:{
        flexDirection: 'row',
        marginHorizontal: '15@s',
        marginTop: '5@vs'
    },
    likesTextStyle:{
        marginLeft: '15@s',
        fontWeight: 'bold'
    },
    hashtagStyle:{
        color: colors.hashtag,
        marginLeft: '5@s',
        lineHeight: 12
    }
})
