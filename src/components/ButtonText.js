import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';
import { ScaledSheet } from 'react-native-size-matters';

const ButtonText = ({title}) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default ButtonText

const styles = ScaledSheet.create({
    container:{
        borderRadius: '20@s',
        paddingHorizontal: '35@s',
        paddingVertical: '3@vs',
        backgroundColor: colors.button,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText:{
        fontSize: '12@ms',
        color: colors.white
    }
})
