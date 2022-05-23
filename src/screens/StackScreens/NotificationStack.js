import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import NotiMain from './Notification/NotiMain';



const StackScreens = createStackNavigator();
const NotificationStack = () => {
  return (
    <StackScreens.Navigator screenOptions={{headerShown: false}}>
      <StackScreens.Screen
          name="main"
          
          component={NotiMain}
      />
    </StackScreens.Navigator>
  )
}

export default NotificationStack

const styles = StyleSheet.create({})