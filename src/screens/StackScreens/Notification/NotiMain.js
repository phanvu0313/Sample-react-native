import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors } from '../../../assets/Colors'

const NotiMain = () => {
  return (
    <View style={styles.container}>
      <Text>Thông Báo</Text>
    </View>
  )
}

export default NotiMain

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:customColors.bg
    }
})