import { StyleSheet, Text, View,Dimensions,Image } from 'react-native';
import React from 'react';
import { customColors } from '../../../assets/Colors';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const HEIGHT =windowHeight/11
const TRANS_WIDTH =(windowWidth*8)/30
const Main = (props) => {
  return (
    <View style = {styles.box}>
        <View style={[{flex:2/3,backgroundColor:'white'},styles.viewTab]}/>
        <View style={{flex:1/3,flexDirection:'row'}}>
            <View style={{flex:1,backgroundColor:'white'}} />
            <View style={{backgroundColor:'white'}}>
                <View style={{width:HEIGHT,height:HEIGHT/2,backgroundColor:'red',borderRadius:HEIGHT,borderTopRightRadius:0,borderTopLeftRadius:0,}}></View>
            </View>

            <View style={{flex:1,backgroundColor:'white'}} />
        </View>
        
      
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    box: {
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        height:windowHeight/11,
        borderRadius:10
      },
    viewTab:{
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: -1,
        },
        shadowOpacity: 0.14,
        shadowRadius: 6.27,
                
    }
})