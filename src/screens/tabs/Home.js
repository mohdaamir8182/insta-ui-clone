import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../../components/Header';
import Icon from '../../components/Icon';
import Posts from '../../components/Posts';
import Stories from '../../components/Stories';
import {colors} from '../../styles/colors';
import { scale } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.storiesContainer}>
          <View style={styles.storyHeadContainer}>
            <Text style={styles.storyHeadingText}>Stories</Text>
            <View style={styles.watchallContainer}>
              <View style={{marginRight: scale(10)}}>
                <Icon
                  image={require('../../assets/play.png')}
                  size={12}
                  color={colors.active_icon}
                />
              </View>
              <Text style={styles.storyHeadingText}>Watch all</Text>
            </View>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.storyListContainer}>
            <Stories />
          </ScrollView>
        </View>
      
        <View style={styles.postsContainer}>
            <Posts />
        </View>
      
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  storiesContainer: {
    marginTop: '15@vs',
    borderBottomColor: colors.border_color,
    borderBottomWidth: '2@s',
  },
  storyHeadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '20@s',
  },
  watchallContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storyHeadingText: {
    fontSize: '17@ms',
    fontWeight: '500',
  },
  storyListContainer: {
    marginTop: '25@vs',
    marginBottom: '20@vs',
    marginHorizontal: '10@s'
  },
});
