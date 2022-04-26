import React, { useState, useEffect } from 'react'
import { View, Text,StyleSheet,Dimensions,TouchableWithoutFeedback,Animated } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { useStoreState, useStoreActions } from 'easy-peasy';
import LinearGradient from 'react-native-linear-gradient';

import {Keyboard} from "react-native";
import LottieView from 'lottie-react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Icon from 'react-native-vector-icons/Ionicons';
import LoadingSpinner from '../components/common/LoadingSpinner';
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
    useEffect(() => {
        Animated.timing(LoginViewAnimation,{
            duration:1000,
            toValue:1,
            useNativeDriver:false}
            ).start();
            

      }, []);
    return (
        <>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex:1,backgroundColor:'white'}}>
            <LinearGradient colors={['#0cebeb', '#20e3b2', '#29ffc6']} style={styles.linearGradient}>
                <Animated.View style={{flex:0.3,
                transform: [{
                    translateY: LoginViewAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-1000, 0] 
                    }),
                  }],}}>
                        <LottieView source={require('../assets/walk.json')}  autoPlay loop  />
                </Animated.View>
                <Animated.View style={[styles.loginView, {
                    opacity: LoginViewAnimation, 
                    transform: [{
                      translateY: LoginViewAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1000,1] 
                      }),
                    }],
                }]}>
                    <KeyboardAvoidingView behavior="padding" style={styles.inputArea}>
                        <View style={{flex:1,justifyContent:'center',borderBottomWidth:1,borderColor:'white'}}>
                            <View style={{flex:0.5}}>
                                <TextInput
                                    color='black'
                                    selectionColor="black"
                                    placeholderTextColor="#8c8c8c"
                                    style={[styles.userName,{marginTop:10}]}
                                    onChangeText={onChangeUserName}
                                    value={userName}
                                    placeholder="User Name"
                                    returnKeyType="next"
                                    secureTextEntry={false}
                                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                                />
                            </View>
                            <View  style={{flexDirection:'row'}}>
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
                                <View style={{flex:0.1,marginRight:10,backgroundColor:"white",borderTopRightRadius:20,borderBottomRightRadius:20,height:50,  justifyContent:'center',alignItems:'center' }}>
                                    <Icon  name= {securePass ? "skull-sharp" : "skull-outline" } size={21} color="#009394" 
                                        onPress={()=>{
                                            if(securePass){
                                                setSecurePass(false)
                                            }else{
                                                setSecurePass(true)
                                            }
                                    }} >
                                            
                                    </Icon>
                                </View>

                            </View>

                        </View>
                        

                    </KeyboardAvoidingView>
                    <View style={{flex:0.5}}>
                        <View style={{flex:0.5,justifyContent:'center',height:windowWidth/10,paddingHorizontal:40}}>
                            <TouchableOpacity 
                                onPress={() => {
                                    loggin()
                                }} 
                                style={[styles.logButton,{backgroundColor:'white'}]}>
                                <Text style={{flex:1,fontSize:17,color:'#1cb1e9',fontWeight:'bold' }}>Log in</Text>
                                <Icon name="chevron-forward-sharp" size={30} color="#1cb1e9" ></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:0.1,justifyContent:'center',alignContent:'center',height:windowWidth/8,paddingHorizontal:40}}>
                            <TouchableOpacity style={styles.logButton}>
                                <Text style={{flex:1,fontSize:19,fontWeight:'bold',color:'white'}}>Sign up</Text>
                                <Icon name="chevron-forward-sharp" size={30} color="white" ></Icon>
                            </TouchableOpacity>
                        </View>
                        

                    </View>
                    <View style={{flex:0.1}}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <View style={{borderBottomWidth:1,borderColor:'white'}}>
                                <Text style={{color:'white'}} >Term of use</Text>
                            </View>
                            
                        </TouchableOpacity>

                    </View>
                    
                </Animated.View>
            </LinearGradient>
        </View>
        
        </TouchableWithoutFeedback>
        {isloggedin ? <LoadingSpinner/>  : null}
        </>
        
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
      logButton:{
        height:windowWidth/8,
        backgroundColor:'#009394',
        borderRadius:20, 
        flexDirection:'row' , 
        alignItems:"center",
        paddingLeft:130,
        borderWidth:2.5,
        borderColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

      },
      userName: {
        height: 50,
        marginHorizontal:10,
        padding: 10,
        backgroundColor:'white',
        textAlign: 'center',
        borderRadius:20,
        fontSize:19,
        borderWidth:1,
        borderColor:'#009394'
      },
      inputArea:{
        flex:0.4,
    },
    loginView:{
        flex:0.7,
       marginHorizontal:10,
        backgroundColor:'#199FB1',
        borderRadius:40,
        borderBottomRightRadius:0,
        borderBottomLeftRadius:0,
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

    }
});
