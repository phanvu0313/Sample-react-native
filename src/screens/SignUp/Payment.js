import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { customColors } from '../../assets/Colors'
const Payment = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={{flex:0.2,justifyContent:'center'}}>
            <Text style={{marginLeft:40,fontSize:40,fontWeight:'bold',color:customColors.red}}>Add<Text style={{fontSize:40,fontWeight:'bold',color:customColors.black}}> your paymen.</Text></Text>
            <Text style={{marginHorizontal:40,marginTop:10}}>We've sent your 4-digit code to your phone number.</Text>
        </View>
        <View style={{flex:0.25,backgroundColor:customColors.black,marginHorizontal:40,borderRadius:20,paddingHorizontal:20}}>
          <View style={{flex:1/3,justifyContent:'center',alignItems:'flex-end'}}>
            <View style={{width:50,height:50,backgroundColor:'orange',borderRadius:50,opacity:0.9}}></View>
            <View style={{width:50,height:50,backgroundColor:'red',borderRadius:50,position:'absolute',right:30,opacity:0.9}}></View>
          </View>
          <View style={{flex:1/3,justifyContent:'center',alignItems:'flex-start'}}>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>12131238123912730</Text>
          </View>
          <View style={{flex:1/3,justifyContent:'center',alignItems:'flex-start'}}>
            <Text style={{color:'white'}}>NAME</Text>
          </View>

        </View>
        <View style={{flex:0.35}}>

        </View>
        <View style={{flex:0.1,justifyContent:'flex-start'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Payment')}>
                <View style={{height:60,backgroundColor:customColors.black,borderRadius:20,marginHorizontal:40,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                    <Text style={{color:customColors.bg,fontSize:23,fontWeight:'bold'}}>Save</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}
export default Payment

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:customColors.bg
        
    }
})