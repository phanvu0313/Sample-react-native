import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { customColors } from '../../assets/Colors'
import HistoryMain from './History/HistoryMain';


const StackScreens = createStackNavigator();
const CalendarStack = () => {
  return (
    <StackScreens.Navigator screenOptions={{headerShown: false}}>
      <StackScreens.Screen
          name="historymain"
          
          component={HistoryMain}
      />
    </StackScreens.Navigator>
  )
}

export default CalendarStack

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:customColors.bg
    }
})