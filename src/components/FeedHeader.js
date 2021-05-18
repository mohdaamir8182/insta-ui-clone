import React from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../styles/colors';
import Avatar from './Avatar';
import ButtonIcon from './ButtonIcon';
import ButtonText from './ButtonText';
import Icon from './Icon';
import Info from './Info';
import Bio from './Bio';

const FeedHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.backArrowContainer}>
                <Icon 
                    image={require('../assets/back.png')}
                    size={20}
                    color={colors.active_icon}
                />
            </View>
            <View style={styles.nameInfoContainer}>
                <Text style={styles.nameTextStyle}>alisesmith</Text>
                <Avatar 
                    image={require('../assets/avatar.png')}
                    size={30}
                />
            </View>
            <View style={styles.postsInfoContainer}>
                <Info title="posts" value="245" />
                <View style={{marginHorizontal: 35}}>
                    <Info title="followers" value="7850" />
                </View>
                <Info title="following" value="725" />
            </View>
            <View style={styles.sendMessageContainer}>
                <ButtonText title="Send Message" />
                <View style={{marginLeft: 15}}>
                    <ButtonIcon 
                        iconFirst={require('../assets/user.png')}
                        iconSecond={require('../assets/tick.png')}
                    />
                </View>
                <View style={{marginLeft: 15}}>
                    <ButtonIcon 
                        iconFirst={require('../assets/down.png')}
                    />
                </View>
            </View>
            <View style={styles.bioSection}>
                <Bio 
                    name="Alise Smith"
                    verified={true}
                    work="Fashion-Designer"
                    location="London UK"
                />
            </View>
        </View>
    )
}

export default FeedHeader

const styles = ScaledSheet.create({
    container:{
        borderBottomWidth: '2@s',
        borderBottomColor: colors.border_color
    },
    backArrowContainer:{
        alignItems: 'flex-start',
        marginBottom: '10@vs',
        marginHorizontal: '20@s',
        marginTop: '10@vs'
    },
    nameInfoContainer:{
        marginHorizontal: '20@s',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nameTextStyle:{
        fontSize: '25@ms',
        fontWeight: 'bold'
    },
    postsInfoContainer:{
        flexDirection: 'row',
        marginTop: '20@vs',
        marginHorizontal: '20@s'
    },
    sendMessageContainer:{ 
        flexDirection: 'row',
        marginTop: '20@vs',
        marginHorizontal: '20@s'
    },
    bioSection:{
        marginTop: '20@vs',
        marginBottom: '20@vs',
        marginHorizontal: '20@s',
        
    }
})
