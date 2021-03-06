import React from 'react';
import { Image, Text, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../styles/colors';

const Story = (props) => {

    const {image , size , title} = props;

    return (
        <View style={styles.container}>
            <Image
                style={{width: scale(size), height: scale(size), borderRadius:scale(size)/2 , overflow: 'hidden' , borderColor: 'red', borderWidth: 2}} 
                source={image}
                resizeMode="cover"
            />
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>{title}</Text>
            </View>
        </View>
    )
}

export default Story

const styles = ScaledSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleContainer:{
        marginTop: '2@vs'
    },
    titleStyle:{
        textAlign: 'center',
        fontSize: '12@ms',
        color: colors.black 
    }
})
