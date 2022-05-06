import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React, {useEffect} from 'react'
import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions'


const Header = (props) => {
    
    
    return (
        <View style={{paddingTop:50,height:150,flexDirection:'row',backgroundColor:"#FFF5E0"}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'flex-start',marginLeft:20}}>
                <Text style={{fontSize:35}}>
                    Special
                </Text>
                <Text style={{fontSize:35,fontWeight:'bold'}}>
                    Menu Offers For Your
                </Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',marginRight:20}}>
                <TouchableOpacity onPress={()=>props.navigation.push("Profile")}>
                <Image  style={{ width: 60,height:60}} source = {require('../../assets/avatar.png')}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        
    }
})