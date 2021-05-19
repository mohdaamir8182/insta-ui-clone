import React from 'react';
import { View } from 'react-native';
import Icon from './Icon';
import { colors } from '../styles/colors';
import { ScaledSheet } from 'react-native-size-matters';

const Header = () => {
    return (
        <View style={styles.container}>
            
            <View style={styles.leftIconContainer}>
                <Icon
                    image={require('../assets/camera.png')}
                    size={20}
                    color={colors.active_icon}
                />
            </View>

            <View style={styles.midIconContainer}>
                <Icon
                    image={require('../assets/logo.png')}
                    size={120}
                    color={colors.active_icon}
                />
            </View>

            <View style={styles.rightIconContainer}>
                <Icon
                    image={require('../assets/send.png')}
                    size={20}
                    color={colors.active_icon}
                />
            </View>
           
        </View>
    )
}

export default Header

const styles = ScaledSheet.create({
    container:{
        height: '50@vs',
        backgroundColor: colors.tab_bar_color,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftIconContainer:{
        marginLeft: '20@s'
    },
    rightIconContainer:{
        marginRight: '20@s'
    }

})
