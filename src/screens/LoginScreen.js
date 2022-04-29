import React, { useState, useEffect } from 'react'
import { View, Text,StyleSheet,Dimensions,TouchableWithoutFeedback,Animated,Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { useStoreState, useStoreActions } from 'easy-peasy';
import LinearGradient from 'react-native-linear-gradient';

import {Keyboard} from "react-native";
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Icon from 'react-native-vector-icons/Ionicons';
import LoadingSpinner from '../components/common/LoadingSpinner';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = (props) => {
    const isloggedin = useStoreState(state => state.isLoggedin);
    const loggin = useStoreActions(action => action.loggin)
    const starPlay = React.useRef(null);
    const [userName, onChangeUserName] = React.useState("");
    const [passWord, onChangePassWord] = React.useState("");
    const [securePass,setSecurePass]= React.useState(true);

    const LoginViewAnimation = React.useRef(new Animated.Value(0)).current;

    
    // const navigation = useNavigation();
    const checkToken = async () => {
        try{
          const token = await AsyncStorage.getItem("AUTH_TOKEN");
          console.log(token)
          if(!token){
            setIsloaggedin(true);
            await AsyncStorage.setItem('AUTH_TOKEN', 'SOME_VALUE');
          }
        }catch(error){
          console.log(error)
        }
      }
      const clearAppData = async () => {
        console.log('cleared');
        try {
            const value = await AsyncStorage.getItem('isAppFirstLaunched')
            if (value){
                await AsyncStorage.removeItem('isAppFirstLaunched')
            }else{
                console.log('okok');
            }
            
        } catch (error) {
            console.error('Error clearing app data.',error);
        }
      }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.safeView}>
                <View style={{flex:0.35}}>
                    <Image style={{height:215,width:178}} source={require('../assets/splash.png')} />
                    <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                        <Text style={{fontWeight:'bold',fontSize:35,}}>Sign in</Text>
                    </View>
                </View>
                <View style={{flex:0.75}}>
                    <View style={{flex:0.2,backgroundColor:'red',flexDirection:'row'}}>
                        <TouchableOpacity style={{flex:1,backgroundColor:'#EF8829'}} >
                            <View style={{flex:1,backgroundColor:'white'}}>

                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity  style={{flex:1,backgroundColor:'#fff'}} >

                        </TouchableOpacity>
                    </View>
                    <View style={{flex:0.8,backgroundColor:'black'}}>

                    </View>

                </View>
                
                
                
            </View>
        </SafeAreaView>
        
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF5E0',
        justifyContent:'center',
        alignItems:'center'
    },
    safeView:{
        flex:1,
        marginHorizontal:10,
        

    },
});
