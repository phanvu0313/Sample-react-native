import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors } from '../../assets/Colors'
const HomeStack = () => {
  return (
    <View style={styles.container}>
      <Text>HomeStack</Text>
    </View>
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