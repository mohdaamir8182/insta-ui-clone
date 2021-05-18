import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from './Icon';
import { colors } from '../styles/colors';
import { ScaledSheet } from 'react-native-size-matters';

const GalleryHeader = (props) => {

    const {selected , setSelected} = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setSelected(1)}>
                <Icon 
                    image={require('../assets/dots-menu.png')}
                    size={20}
                    color={selected == 1 ? colors.button : "#000000"}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelected(2)}>
                <Icon 
                    image={require('../assets/list.png')}
                    size={20}
                    color={selected == 2 ? colors.button : "#000000"}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelected(3)}>
                <Icon 
                    image={require('../assets/favorite.png')}
                    size={20}
                    color={selected == 3 ? colors.button : "#000000"}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelected(4)}>
                <Icon 
                    image={require('../assets/user2.png')}
                    size={20}
                    color={selected == 4 ? colors.button : "#000000"}
                />
            </TouchableOpacity>
        </View>
    )
}

export default GalleryHeader

const styles = ScaledSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: '20@vs'
    }
})
