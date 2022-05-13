import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { customColors } from '../../assets/Colors'
import Main from './Home/Main';

const StackScreens = createStackNavigator();
const HomeStack = () => {
  return (
    <StackScreens.Navigator screenOptions={{headerShown: false}}>
      <StackScreens.Screen
          name="main"
          
          component={Main}
      />
    </StackScreens.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:customColors.bg
    }
})