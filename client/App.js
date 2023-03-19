import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './components/home';
import ProfileScreen from './components/profile';
import ShopScreen from './components/shop';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Shop"
          component={ShopScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
