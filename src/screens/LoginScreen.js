import React, { useState, useEffect } from 'react'
import { View, Text,StyleSheet,Dimensions,TouchableWithoutFeedback,Animated,Image,TouchableOpacity,TextInput ,Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useStoreState, useStoreActions } from 'easy-peasy';
import LinearGradient from 'react-native-linear-gradient';

import {Keyboard} from "react-native";
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Icon from 'react-native-vector-icons/Ionicons';
import LoadingSpinner from '../components/common/LoadingSpinner';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { customColors } from '../assets/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = (props) => {
    const isloggedin = useStoreState(state => state.isLoggedin);
    const loggin = useStoreActions(action => action.loggin)
    const starPlay = React.useRef(null);
    const [userName, onChangeUserName] = React.useState("");
    const [passWord, onChangePassWord] = React.useState("");
    const [securePass,setSecurePass]= React.useState(true);
    const [validateEmail,setValidateEmail] = React.useState(false);
    

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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView behavior='position' style={{flex:1}} keyboardVerticalOffset={-150} >
            <View style={styles.safeView}>
                
                <View style={{flex:0.2,alignItems:'flex-start'}}>
                    <View style={{justifyContent:'center',marginTop:10}}>
                        <Text style={{fontWeight:'bold',fontSize:30,color:'#3F2D20'}}>Welcome Back</Text>
                        <Text style={{fontWeight:'400',fontSize:25,color:'#3F2D20'}}>Sign in to continue</Text>
                    </View>
                    
                    
                </View>
                
                <View style={{flex:0.8,marginHorizontal:10}}>
                    <View style={{flex:0.2}}>
                        <Image style={{width:155,height:40,resizeMode:'cover'}} source={require('../assets/Logo.png')} />
                    </View>
                    <View style={{flex:0.6}}>
                        <View style={{marginVertical:5,flex:1,justifyContent:'center'}}>
                            <View style={{position:'absolute', left:0,opacity:0.7,borderRadius:15,borderWidth:1,paddingHorizontal:10,paddingVertical:10,borderColor:customColors.primary}}>
                                <Icon  name = {"md-person"} size={25} color={customColors.primary} ></Icon>
                            </View>
                            
                            <TextInput
                                color='black'
                                selectionColor="black"
                                placeholderTextColor="#8c8c8c"
                                style={[styles.userName,{}]}
                                onChangeText={onChangeUserName}
                                value={userName}
                                placeholder="User Name"
                                returnKeyType="next"
                                secureTextEntry={false}
                                onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            />

                        </View>
                        <View style={{marginVertical:5,flex:1,justifyContent:'center'}}>
                            <View style={{position:'absolute', left:0,opacity:0.7,borderRadius:15,borderWidth:1,paddingHorizontal:10,paddingVertical:10,borderColor:customColors.primary}}>
                                <Icon  name = {"ios-key"} size={25} color={customColors.primary} ></Icon>
                            </View>
                            <TextInput
                                color='black'
                                selectionColor="black"
                                placeholderTextColor="#8c8c8c"
                                style={[styles.userName,{}]}
                                onChangeText={onChangePassWord}
                                value={passWord}
                                placeholder="Password"
                                returnKeyType="done"
                                secureTextEntry={securePass ? true : false}
                                ref={(input) => { this.secondTextInput = input; }}
                            />
                            <TouchableOpacity onPress={()=>{if(securePass){setSecurePass(false)}else{setSecurePass(true)}}}  style={{alignItems:'flex-end',justifyContent:"center",right:20,position:'absolute'}} >
                                <Icon name = {securePass?  "ios-eye":"md-eye-off"} size={20} color={customColors.text} ></Icon>
                            </TouchableOpacity>

                        </View>
                        <View style={{flex:1,alignItems:'flex-start'}}>
                            <Button
                                title="Forgot your password ?"
                                
                            />

                        </View>
                        <View style={{marginVertical:10,flex:0.75,borderRadius:20}}>
                            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:customColors.primary,borderRadius:40}} 
                            onPress={()=>{loggin()}}
                            >
                                <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Sign In</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{marginVertical:10,flex:0.75,borderRadius:20}}>
                            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:customColors.primary,borderRadius:40}} 
                            onPress={()=>{loggin()}}
                            >
                                <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Create an Account</Text>
                            </TouchableOpacity>

                        </View>
                        

                    </View>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>{clearAppData()}}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Icon  name = {"md-finger-print-outline"} size={60} color={customColors.primary_2} ></Icon>
                            </View>

                        </TouchableOpacity>
                        
                        {/* <TouchableOpacity onPress={()=>{clearAppData()}}>
                            <Text style={{color:'#84BD93',fontSize:16,fontWeight:'700'}}>  Sign up</Text>
                        </TouchableOpacity> */}

                    </View>

                </View>
                
                
                
            </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        </SafeAreaView>
        
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:customColors.bg,
        justifyContent:'center',
        alignItems:'center'
    },
    safeView:{
        flex:1,
        width:windowWidth-40,
        

    },
    userName:{
        //marginHorizontal:20,
        fontSize:20,
        borderBottomWidth:1,
        paddingLeft:windowWidth/7,
        flex:1,
        marginRight:0, 
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        borderBottomWidth:1,
        borderColor:customColors.textOpacity

    }
});