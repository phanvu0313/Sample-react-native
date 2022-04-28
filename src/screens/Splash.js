import React , {useEffect} from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { TouchableOpacity } from 'react-native-gesture-handler';



const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        
        setTimeout(() => {
            
            navigation.navigate("SignIn")
        }, 1000)
        
      }, [])
    return (
        <View style={{flex:1 ,justifyContent:'center',alignItems:'center', backgroundColor:'#FFF5E0'}}>
            <Image style={{height:215,width:178}} source={require('../assets/splash.png')} />
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
