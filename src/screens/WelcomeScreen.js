import React , {useEffect} from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { useStoreState, useStoreActions } from 'easy-peasy';
import Onboarding from './Welcome/Onboarding'
import AsyncStorage from '@react-native-community/async-storage';
import { customColors } from '../assets/Colors';

const WelcomeScreen = ({ navigation },props) => {
    const isFirstime = useStoreState(state => state.isFirstime);
    const firstTime = useStoreActions(action => action.firstTime)
    
    return (

        <View style={styles.conti}>
            
           <Onboarding onPress={()=>navigation.replace("Well")}/>
           
        </View> 
    )
}

export default WelcomeScreen


const styles = StyleSheet.create({
    conti:{
        flex:1,
        backgroundColor: customColors.bg ,
        justifyContent:'center',
        alignItems:'center'
    }
      
});