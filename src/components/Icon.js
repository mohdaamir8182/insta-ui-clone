import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { scale } from 'react-native-size-matters';

const Icon = (props) => {

  const {image, size, color} = props;

  return (
    <View style={styles.container}>

      <Image
        style={{height: scale(size), width: scale(size) ,tintColor: color}}
        resizeMode="contain"
        source={image}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default Icon;
