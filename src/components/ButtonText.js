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

export default ButtonText;

const styles = ScaledSheet.create({
    container:{
        width: '100%',
        borderRadius: '3@s',
        borderWidth: 1,
        borderColor: colors.border_color,
        paddingHorizontal: '35@s',
        paddingVertical: '8@vs',
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText:{
        fontSize: '12@ms',
        color: colors.black,
        fontWeight: 'bold'
    }
})
