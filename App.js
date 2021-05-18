
import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context';
import MainStackNavigator from './routes';
import { colors } from './src/styles/colors';

const App = () => {
  return(
      <>
        <SafeAreaView style={{ flex:0, backgroundColor: colors.tab_bar_color }} />
        <SafeAreaView style={{ flex:1, backgroundColor: colors.tab_bar_color }}>
          <NavigationContainer>
              <MainStackNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </>  
  );
}


export default App;
