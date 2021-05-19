import React from 'react';
import { Text, View } from 'react-native';
import Avatar from './Avatar';
import { colors } from '../styles/colors';
import { scale } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';

const Bio = (props) => {

    const {name ,verified , work , location} = props;

    return (
        <View>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                {
                    verified && 
                    <View style={{marginLeft: scale(7)}}>
                        <Avatar image={require('../assets/verified.png')} size={14} />    
                    </View>
                }
            </View>

            <View style={styles.locationContainer}>
                <Text style={styles.infoText}>{work}</Text>
                <Text>   </Text>
                <Text style={styles.infoText}>{location}</Text>
            </View>
        </View>
    )
}

export default Bio

const styles = ScaledSheet.create({
    nameContainer:{
        flexDirection: 'row'
    },
    locationContainer:{
        flexDirection: 'row',
        marginTop: '3@vs',
    },
    infoText:{
        color: colors.inactive_icon,
        fontSize: '12@ms',
        lineHeight: 15
    },
    name:{
        fontWeight: 'bold'  
    }
})
