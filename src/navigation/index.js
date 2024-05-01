import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../Screens/LandingPage';
import FeedScreen from '../Screens/FeedScreen';
import MainPage from '../Screens/MainPage';
import RestaurantLogin from '../Screens/RestaurantLogin/RestaurantLogin';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="FeedScreen" component={FeedScreen} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="RestaurantLogin" component={RestaurantLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation