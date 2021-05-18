import React from 'react';
import { Text, View } from 'react-native';
import Icon from './Icon';
import { colors } from '../styles/colors';
import Avatar from './Avatar';
import { ScaledSheet } from 'react-native-size-matters';

const PostHeader = (props) => {

    const {userImage , userName} = props;

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Avatar 
                    image={userImage}
                    size={30}
                />
                <Text style={styles.nameTextStyle}>{userName}</Text>
            </View>

            <View style={styles.menuContainer}>
                <Icon 
                    image={require('../assets/menu.png')}
                    size={12}
                    color={colors.active_icon}
                />
            </View>
        </View>
    )
}

export default PostHeader;

const styles = ScaledSheet.create({
    container:{
        height: '50@vs',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: '30@s',
        marginTop: '5@vs',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menuContainer:{

    },
    nameTextStyle:{
        fontSize: '12@ms',
        marginLeft: '10@s'
    }
})
