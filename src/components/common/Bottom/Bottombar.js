import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { customColors } from '../../../assets/Colors'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const TRANS_WIDTH =(windowWidth*8)/30

const Bottombar = ({focused}) => {
  return (
    <View style={{backgroundColor:'red'}}>
      <View style={{ top:-50}}>
          <View style={{width:100,height:100,justifyContent:'center',alignItems:'center',borderRadius:200,backgroundColor:customColors.bg}}>
            <View style={{borderRadius:45,backgroundColor:customColors.primary,width:75,height:75,justifyContent:"center",alignItems:'center'}}>
                <Ionicons name="md-qr-code" color={focused ? 'white' : 'white'} size={focused ? 40 : 40}/>    
            </View>
        </View>       
      </View>

    </View>
  )
}
export default Bottombar

const styles = StyleSheet.create({

})