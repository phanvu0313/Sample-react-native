import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileMain from './Profile/ProfileMain';



const StackScreens = createStackNavigator();
const ProfileStack = () => {
  return (
    <StackScreens.Navigator screenOptions={{headerShown: false}}>
      <StackScreens.Screen
          name="main"
          
          component={ProfileMain}
      />
    </StackScreens.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})