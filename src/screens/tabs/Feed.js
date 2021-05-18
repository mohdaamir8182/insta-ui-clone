import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FeedHeader from '../../components/FeedHeader';
import Gallery from '../../components/Gallery';

const Feed = () => {
    return (
        <ScrollView 
            contentContainerStyle={styles.container} 
            showsVerticalScrollIndicator={false}
        >
            <FeedHeader />
            <Gallery />

        </ScrollView>
    );
}

export default Feed;

const styles = StyleSheet.create({
    container:{
        flexGrow: 1
    }
})
