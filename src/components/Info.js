import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../styles/colors';
import { ScaledSheet } from 'react-native-size-matters';

const Info = (props) => {
    const {title , value} = props;
    return (
        <View>
            <Text style={styles.valueText}>{value}</Text>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

export default Info;

const styles = ScaledSheet.create({
    titleText:{
        color: colors.black,
        marginTop: '3@vs',
        textAlign: 'center',
        lineHeight: 15
    },
    valueText:{
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.active_icon
    }
})
