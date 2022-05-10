import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors } from '../../assets/Colors'
const WalletStack = () => {
  return (
    <View style={styles.container}>
      <Text>WalletStack</Text>
    </View>
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