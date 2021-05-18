import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { colors } from './src/styles/colors';
import Home from './src/screens/tabs/Home';
import Search from './src/screens/tabs/Search';
import Camera from './src/screens/tabs/Camera';
import Feed from './src/screens/tabs/Feed';
import Profile from './src/screens/tabs/Profile';
import TabIcon from './src/components/Icon';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
    return (
      <Stack.Navigator headerMode="none" initialRouteName="tabs">
        <Stack.Screen name="tabs" component={BottomTabs} />
      </Stack.Navigator>
    );
  };

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
            tabBarIcon: ({focused, color, size}) => {
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
            tabBarIcon: ({focused, color, size}) => {
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
            tabBarIcon: ({focused, color, size}) => {
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
            tabBarIcon: ({focused, color, size}) => {
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
            tabBarIcon: ({focused, color, size}) => {
              return (
                <TabIcon
                  image={require("./src/assets/user.png")}
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

  export default MainStackNavigator;
  