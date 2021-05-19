import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from './src/styles/colors';
import Home from './src/screens/tabs/Home';
import Search from './src/screens/tabs/Search';
import Camera from './src/screens/tabs/Camera';
import Feed from './src/screens/tabs/Feed';
import Profile from './src/screens/tabs/Profile';
import TabIcon from './src/components/Icon';
import Icon from './src/components/Icon';
import GalleryTab from './src/screens/toptabs/GalleryTab';
import { verticalScale, scale } from 'react-native-size-matters';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

export const MainStackNavigator = () => {
    return (
      <Stack.Navigator headerMode="none" initialRouteName="tabs">
        <Stack.Screen name="tabs" component={BottomTabs} />
      </Stack.Navigator>
    );
  };

  const size = 19;

  const BottomTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="home"
        backBehavior="initialRoute"
        tabBarOptions={{
          activeTintColor: colors.active_icon,
          inactiveTintColor: colors.inactive_icon,
          showLabel: false,
          style: {
            backgroundColor: colors.tab_bar_color,
            borderTopWidth: 1,
            borderColor: colors.border_color,
          },
        }}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            unmountOnBlur: true,
            title: 'Home',
            tabBarIcon: ({focused, color}) => {
              return (
                <TabIcon
                  image={require("./src/assets/home.png")}
                  focused={focused}
                  color={color}
                  size={size}
                />
              );
            },
          }}
        />
        
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            unmountOnBlur: true,
            title: 'Search',
            tabBarIcon: ({focused, color}) => {
              return (
                <TabIcon
                  image={require("./src/assets/search.png")}
                  focused={focused}
                  color={color}
                  size={size}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="camera"
          component={Camera}
          options={{
            unmountOnBlur: true,
            title: 'Camera',
            tabBarIcon: ({focused, color, size=25}) => {
              return (
                <TabIcon
                  image={require("./src/assets/camera.png")}
                  focused={focused}
                  color={color}
                  size={size}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="feed"
          component={Feed}
          options={{
            unmountOnBlur: true,
            title: 'Feed',
            tabBarIcon: ({focused, color}) => {
              return (
                <TabIcon
                  image={require("./src/assets/heart.png")}
                  focused={focused}
                  color={color}
                  size={size}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            unmountOnBlur: true,
            title: 'Profile',
            tabBarIcon: ({focused, color}) => {
              return (
                <TabIcon
                  image={require("./src/assets/user2.png")}
                  focused={focused}
                  color={color}
                  size={size}
                />
              );
            },
          }}
        />
        
      </Tab.Navigator>
    );
  };

export const TopTabs = () => {
    return (
      <TopTab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
          activeTintColor: colors.button,
          inactiveTintColor: colors.black,
          style: {
            backgroundColor: colors.white,
            paddingVertical: verticalScale(15)
          },
          indicatorStyle: {
            borderBottomColor: colors.black,
            borderBottomWidth: 1,
          },
        }}>
        <TopTab.Screen
          name="Gallery"
          component={GalleryTab}
          options={{
            tabBarIcon: ({color}) => (
              <Icon 
                image={require('./src/assets/dots-menu.png')}
                size={scale(18)}
                color={color}
              />
            ),
          }}  
        />
        <TopTab.Screen
          name="SecondPage"
          component={Profile}
          options={{
            tabBarLabel: 'second',
            tabBarIcon: ({ color }) => (
              <Icon 
                image={require('./src/assets/list.png')}
                size={scale(18)}
                color={color}
              />
            ),
          }} />
          <TopTab.Screen
          name="Third"
          component={Profile}
          options={{
            tabBarLabel: 'Third',
            tabBarIcon: ({ color }) => (
              <Icon 
                image={require('./src/assets/favorite.png')}
                size={scale(18)}
                color={color}
              />
            ),
          }} />
          <TopTab.Screen
          name="Fourth"
          component={Profile}
          options={{
            tabBarLabel: 'Fourth',
            tabBarIcon: ({ color }) => (
              <Icon 
                image={require('./src/assets/user2.png')}
                size={scale(18)}
                color={color}
              />
            ),
          }} />
      </TopTab.Navigator>
    );
  }


  