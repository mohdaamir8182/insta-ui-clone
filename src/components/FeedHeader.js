import React from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../styles/colors';
import Avatar from './Avatar';
import ButtonText from './ButtonText';
import Info from './Info';
import Bio from './Bio';

const FeedHeader = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.backArrowContainer}>
                <Icon 
                    image={require('../assets/back.png')}
                    size={20}
                    color={colors.active_icon}
                />
            </View> */}
            <View style={styles.nameInfoContainer}>
                <Text style={styles.nameTextStyle}>mohd_aamir065</Text>
            </View>
            <View style={styles.postsInfoContainer}>
                
                <Avatar image={require('../assets/avatar.png')} size={70} />
                
                <View style={styles.postinfoRightContainer} >
                    <Info title="Posts" value="245" />
                    <View style={{marginHorizontal: 45}}>
                        <Info title="Followers" value="7850" />
                    </View>
                    <Info title="Following" value="725" />
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


            <View style={styles.sendMessageContainer}>
                <ButtonText title="Send Message" />
            </View>
        </View>
    )
}

export default FeedHeader

const styles = ScaledSheet.create({
    container:{
        borderBottomWidth: '0@s',
        borderBottomColor: colors.border_color
    },
    backArrowContainer:{
        alignItems: 'flex-start',
        marginBottom: '10@vs',
        marginHorizontal: '20@s',
        marginTop: '10@vs'
    },
    nameInfoContainer:{
        marginTop: '15@vs',
        marginHorizontal: '20@s',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nameTextStyle:{
        fontSize: '20@ms',
        fontWeight: 'bold'
    },
    postsInfoContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '28@vs',
        marginLeft: '20@s',
        marginRight: '25@s'
    },
    
    postinfoRightContainer: {
        flexDirection: 'row',
    },
    sendMessageContainer:{ 
        flexDirection: 'row',
        marginTop: '10@vs',
        marginHorizontal: '10@s',
        marginBottom: '20@vs',
    },
    bioSection:{
        marginTop: '10@vs',
        marginBottom: '5@vs',
        marginHorizontal: '20@s',
        
    }
})
