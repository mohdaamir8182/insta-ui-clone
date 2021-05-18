import React from 'react';
import { StyleSheet, View } from 'react-native';
import { storiesList } from '../constants/Utils';
import Story from './Story';
import { scale } from 'react-native-size-matters';

const Stories = () => {
    return (
        <View style={styles.container}>
            {
                storiesList.map(single_story => {
                    return(
                        <View key={single_story.id} style={{marginHorizontal: scale(10)}}>
                            <Story 
                                image={single_story.avatar}
                                size={50}
                                title={single_story.title}
                            />
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        //alignContent: 'center'
    }
})
