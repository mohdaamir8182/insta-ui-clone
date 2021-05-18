import React from 'react';
import { View, Image } from 'react-native';
import { scale } from 'react-native-size-matters';

const Avatar = (props) => {
    
    const {image , size} = props;
    
    return (
        <View>
            <Image 
                source={image}
                style={{height: scale(size), width: scale(size), borderRadius: scale(size)}}
                resizeMode="contain"
            />
        </View>
    )
}

export default Avatar;
