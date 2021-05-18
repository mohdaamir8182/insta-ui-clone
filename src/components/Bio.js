import React from 'react';
import { Text, View } from 'react-native';
import Avatar from './Avatar';
import { colors } from '../styles/colors';
import { scale } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';

const Bio = (props) => {

    const {name ,verified , work , location} = props;

    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                {
                    verified && 
                    <View style={{marginLeft: scale(10)}}>
                        <Avatar image={require('../assets/verified.png')} size={16} />    
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
    container:{

    },
    nameContainer:{
        flexDirection: 'row'
    },
    locationContainer:{
        flexDirection: 'row',
        marginTop: '5@vs'
    },
    infoText:{
        color: colors.inactive_icon,
        fontSize: '12@ms'
    },
    name:{
        fontWeight: 'bold'  
    }
})
