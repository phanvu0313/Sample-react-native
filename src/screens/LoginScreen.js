import React, { useState, useEffect } from 'react'
import { View, Text,StyleSheet,Dimensions,TouchableWithoutFeedback,Animated,Image,TouchableOpacity,TextInput } from 'react-native'
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
                
                <View style={{flex:0.35,alignItems:'center'}}>
                    <Image style={{height:215,width:178}} source={require('../assets/splash.png')} />
                    <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                        <Text style={{fontWeight:'bold',fontSize:35,color:'#3F2D20'}}>Sign in</Text>
                    </View>
                </View>
                
                <View style={{flex:0.7}}>
                    <View style={{flex:0.15,flexDirection:'row'}}>
                        <View style={{width:(windowWidth-20)/2,marginHorizontal:5}}>
                            <TouchableOpacity style={{flex:1,backgroundColor:'#EF8829',borderRadius:20,marginVertical:15}}>
                                <View style={{flex:1,flexDirection:'row',marginHorizontal:20,alignItems:'center'}}>
                                    <Icon style={{marginRight:10}} name="ios-logo-google" size={25} color="white" ></Icon>
                                    <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>With Google</Text>

                                </View>
                            </TouchableOpacity>

                        </View>
                        <View style={{width:(windowWidth-40)/5,marginHorizontal:5}}>
                        <TouchableOpacity style={{flex:1,borderWidth:1,borderColor:'black',borderRadius:20,borderColor:'#E6DCCD',marginVertical:15}}>
                                <View style={{flex:1,flexDirection:'row',marginHorizontal:20,alignItems:'center',justifyContent:'center'}}>
                                    <Icon style={{}} name="ios-logo-facebook" size={25} color="#3F2D20" ></Icon>
                                    {/* <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>With Google</Text> */}
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:(windowWidth-40)/5,marginHorizontal:5}}>
                            <TouchableOpacity style={{flex:1,borderWidth:1,borderColor:'black',borderRadius:20,borderColor:'#E6DCCD',marginVertical:15}}>
                                <View style={{flex:1,flexDirection:'row',marginHorizontal:20,alignItems:'center',justifyContent:'center'}}>
                                    <Icon style={{}} name="logo-twitter" size={25} color="#3F2D20" ></Icon>
                                    {/* <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>With Google</Text> */}

                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>

                    
                    <View style={{flex:0.15,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'#73665C',fontSize:15}}>Or With Email</Text>
                    </View>
                    
                    <View style={{flex:0.4}}>
                        <View style={{marginVertical:5,flex:1,justifyContent:'center',borderWidth:1,borderRadius:20,borderColor:'#E6DCCD'}}>
                            <Icon style={{position:'absolute', left:windowWidth-80,opacity:0.7}} name = {validateEmail ?  "md-checkmark-sharp" : "close-sharp"} size={25} color="#3F2D20" ></Icon>
                            <TextInput
                                color='black'
                                selectionColor="black"
                                placeholderTextColor="#8c8c8c"
                                style={[styles.userName]}
                                onChangeText={onChangeUserName}
                                value={userName}
                                placeholder="Your Email"
                                returnKeyType="next"
                                secureTextEntry={false}
                                onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            />

                        </View>
                        <View style={{marginVertical:5,flex:1,justifyContent:'center',borderWidth:1,borderRadius:20,borderColor:'#E6DCCD'}}>
                            <TextInput
                                color='black'
                                selectionColor="black"
                                placeholderTextColor="#8c8c8c"
                                style={[styles.userName,{flex:1,marginRight:0, borderTopRightRadius:0,borderBottomRightRadius:0}]}
                                onChangeText={onChangePassWord}
                                value={passWord}
                                placeholder="Password"
                                returnKeyType="done"
                                secureTextEntry={securePass ? true : false}
                                ref={(input) => { this.secondTextInput = input; }}
                            />
                            <TouchableOpacity  style={{alignItems:'flex-end',justifyContent:"center",right:20,position:'absolute'}} >
                                <Text style={{opacity:0.6}}>Forgot?</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{marginVertical:10,flex:1,borderRadius:20}}>
                            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'#84BD93',borderRadius:20}} 
                            onPress={()=>{loggin()}}
                            >
                                <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Sign In</Text>
                            </TouchableOpacity>

                        </View>
                        

                    </View>
                    <View style={{flex:0.3,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <Text style={{fontSize:16,justifyContent:'center',alignItems:'center'}}>
                            New User?
                        </Text>
                        <TouchableOpacity onPress={()=>{clearAppData()}}>
                            <Text style={{color:'#84BD93',fontSize:16,fontWeight:'700'}}>  Sign up</Text>
                            </TouchableOpacity>

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
        backgroundColor:'#FFF5E0',
        justifyContent:'center',
        alignItems:'center'
    },
    safeView:{
        flex:1,
        width:windowWidth-40,
        

    },
    userName:{
        marginHorizontal:20
    }
});
