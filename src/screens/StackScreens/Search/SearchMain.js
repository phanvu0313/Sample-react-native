import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors } from '../../../assets/Colors'

const SearchMain = () => {
  return (
    <View style={styles.container}>
      <Text>Đặt Hàng</Text>
    </View>
  )
}

export default SearchMain

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:customColors.bg
    }
})