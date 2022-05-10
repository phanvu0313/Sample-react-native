import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors } from '../../assets/Colors'

const CalendarStack = () => {
  return (
    <View style={styles.container}>
      <Text>CalendarStack</Text>
    </View>
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