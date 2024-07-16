/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackNavigator from './src/navigation/HomeStackNavigator';
import StreamingStackNavigator from './src/navigation/StreamingStackNavigator';
import ShopStackNavigator from './src/navigation/ShopStackNavigator';
import SocialStackNavigator from './src/navigation/SocialStackNavigator';
import NewsStackNavigator from './src/navigation/NewsStackNavigator';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Live') {
              iconName = focused ? 'play-circle' : 'play-circle-outline';
            } else if (route.name === 'Shop') {
              iconName = focused ? 'shopping' : 'shopping-outline';
            } else if (route.name === 'News') {
              iconName = focused ? 'newspaper-variant' : 'newspaper-variant-outline';
            } else if (route.name === 'Socials') {
              iconName = focused ? 'earth' : 'earth';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons  name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}

      >
        <Tab.Screen name="Home" component={HomeStackNavigator} options={{ headerShown:false }} />
        <Tab.Screen name="Live" component={StreamingStackNavigator} options={{ headerShown:false }}/>
        <Tab.Screen name="Shop" component={ShopStackNavigator} options={{ headerShown:false }}/>
        <Tab.Screen name="News" component={NewsStackNavigator} options={{ headerShown:false }}/>
        <Tab.Screen name="Socials" component={SocialStackNavigator} options={{ headerShown:false }}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
};



export default App;
