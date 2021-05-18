import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from './Icon';
import { colors } from '../styles/colors';
import { scale } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';

const ButtonIcon = (props) => {

    const {iconFirst , iconSecond} = props;
    
    return (
        <TouchableOpacity style={styles.container}>
            {
                iconFirst &&
                <Icon 
                    image={iconFirst}
                    size={12}
                    color={colors.active_icon}
                />
            }
            {
                iconSecond && 
                <View style={{marginLeft: scale(10)}}>
                    <Icon 
                        image={iconSecond}
                        size={12}
                        color={colors.active_icon}
                    />
                </View>
            }
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = ScaledSheet.create({
    container:{
        flexDirection: 'row',
        borderRadius: '20@s',
        paddingHorizontal: '20@s',
        paddingVertical: '6@vs',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: '1@s',
        borderColor: colors.border_color
    }
})
