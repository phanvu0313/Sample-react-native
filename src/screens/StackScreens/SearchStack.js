import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SearchMain from './Search/SearchMain';



const StackScreens = createStackNavigator();
const SearchStack = () => {
  return (
    <StackScreens.Navigator screenOptions={{headerShown: false}}>
      <StackScreens.Screen
          name="search"
          
          component={SearchMain}
      />
    </StackScreens.Navigator>
  )
}

export default SearchStack

const styles = StyleSheet.create({})