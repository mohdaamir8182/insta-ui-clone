import React from 'react';
import { Dimensions, TouchableOpacity, View, Image } from 'react-native';
import { galleryPosts } from '../constants/Utils';
import { scale } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';
import {TopTabs} from '../../routes';

const Gallery = () => {

    const renderBody = () => {
        if(selected == 1){
            return( 
                galleryPosts.map((aPost , index) => {
                    return(
                    <TouchableOpacity style={[{...styles.post}, {paddingLeft: index % 3 == 0 ? 0 : scale(3)}]}  key={aPost.id}>
                            <Image 
                                source={aPost.cover}
                                style={{flex: 1, width: undefined, height: undefined}}
                            />
                        </TouchableOpacity>
                    )
                })  
            )
        }
    }

    return (
        <View style={styles.container}>
           <TopTabs />
        </View>
    )
}

export default Gallery

const styles = ScaledSheet.create({
    container:{
        flex: 1
    },
    post:{
        height: Dimensions.get('window').width / 3,
        width: Dimensions.get('window').width / 3,
        marginBottom: '3@vs'
    },
    postContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})
