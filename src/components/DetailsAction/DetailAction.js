import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { customColors } from '../../assets/Colors'

const DetailAction = (props) => {
  return (
    <View style={{flex:1,backgroundColor:'red'}}>
        
        
    </View>
  )
}
export default DetailAction
const styles = StyleSheet.create({
    container:{
        backgroundColor:customColors.pink
    },
    circleButton:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:customColors.yellow,
        marginVertical:20,
        justifyContent:'center',
        alignItems:'center'
    }
})