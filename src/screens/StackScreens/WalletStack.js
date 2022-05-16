import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors } from '../../assets/Colors'
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Wallet/Main'

const StackScreens = createStackNavigator();
const WalletStack = () => {
  return (
    <StackScreens.Navigator screenOptions={{headerShown: false}}>
      <StackScreens.Screen
          name="main"
          
          component={Main}
      />
    </StackScreens.Navigator>
  )
}

export default WalletStack
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:customColors.bg
    }
})