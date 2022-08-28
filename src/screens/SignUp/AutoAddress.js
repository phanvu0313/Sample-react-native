import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { customColors } from '../../assets/Colors'

const AutoAddress = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={{flex:0.2,justifyContent:'center'}}>
            <Text style={{marginLeft:40,fontSize:40,fontWeight:'bold',color:customColors.red}}>Confirm<Text style={{fontSize:40,fontWeight:'bold',color:customColors.black}}> your address.</Text></Text>
            <Text style={{marginHorizontal:40,marginTop:10}}>We've sent your 4-digit code to your phone number.</Text>
        </View>
        <View style={{flex:0.1,justifyContent:'flex-start'}}>
            <TouchableOpacity>
                <View style={{height:60,backgroundColor:customColors.black,borderRadius:20,marginHorizontal:40,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                    <Icon  name = {"location-outline"} size={25} color={"#fff"} ></Icon>
                    <Text style={{color:customColors.bg,fontSize:23,fontWeight:'bold'}}> Use Current Location</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.mapView}>

        </View>
        <View style={{flex:0.1,justifyContent:'flex-end'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('ManualyAddress')}>
                <View style={{height:60,borderRadius:20,marginHorizontal:40,justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:20,borderWidth:1}}>
                    <Text style={{color:customColors.black,fontSize:23,fontWeight:'bold'}}>Add Address Manually</Text>
                </View>
            </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default AutoAddress

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:customColors.bg
    },
    mapView:{
        flex:0.5,
        backgroundColor:customColors.white,
        marginHorizontal:40,
        borderRadius:20,

    }
})