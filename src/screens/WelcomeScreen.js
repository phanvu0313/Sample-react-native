import React , {useEffect} from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { useStoreState, useStoreActions } from 'easy-peasy';
import Onboarding from './Welcomes/Onboarding'
import AsyncStorage from '@react-native-community/async-storage';

const WelcomeScreen = ({ navigation },props) => {
    const isFirstime = useStoreState(state => state.isFirstime);
    const firstTime = useStoreActions(action => action.firstTime)
    
    const setFirt = async () => {
        try{
          const value = await AsyncStorage.getItem("FIRST");
          console.log(value,'welvcomescreen')
          if(value == null){
            await AsyncStorage.setItem('FIRST', 'TRUE');
          }
        }catch(error){
          console.log(error)
        }
      }
    const pass =() =>{
        setFirt()
        firstTime(false)

    }
    return (

        <View style={styles.conti}>
           <Onboarding onPress={pass}/>
           
        </View> 
    )
}

export default WelcomeScreen


const styles = StyleSheet.create({
    conti:{
        flex:1,
        backgroundColor:"#FFF5E0",
        justifyContent:'center',
        alignItems:'center'
    }
      
});
