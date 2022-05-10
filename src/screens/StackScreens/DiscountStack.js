import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors } from '../../assets/Colors'

const DiscountStack = () => {
  return (
    <View style={styles.container}>
      <Text>DiscountStack</Text>
    </View>
  )
}

export default DiscountStack

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:customColors.bg
    }
})