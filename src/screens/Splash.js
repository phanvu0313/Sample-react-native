import React , {useEffect} from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { customColors } from '../assets/Colors';
import LinearGradient from 'react-native-linear-gradient'



const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        
        // setTimeout(() => {
            
        //     navigation.navigate("SignIn")
        // }, 800)
        
      }, [])
    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'bold',fontSize:70}}>R I <Text style={{color:customColors.yellow}}>O</Text></Text>
        </View>

        
        
    )
}

export default SplashScreen


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:customColors.bg,
        justifyContent:'center',
        alignItems:'center'
    }
      
});