import React , {useEffect} from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { customColors } from '../assets/Colors';



const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        
        setTimeout(() => {
            
            navigation.navigate("SignIn")
        }, 800)
        
      }, [])
    return (
        <View style={{flex:1 ,justifyContent:'center',alignItems:'center', backgroundColor:customColors.bg}}>
            <Image style={{width:310,height:80,resizeMode:'cover'}} source={require('../assets/Logo.png')} />
        </View>

        
        
    )
}

export default SplashScreen


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
      
});