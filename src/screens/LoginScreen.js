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
            
            <View style={styles.safeView}>
                <View style={{flex:1,marginHorizontal:10}}>
                    <View style={{flex:0.1,justifyContent:'center'}}>
                        <Text style={{fontWeight:'500',fontSize:30}}>Login</Text>
                    </View>
                    <View style={{flex:0.7}}>
                        <View style={{marginVertical:5,flex:0.2,justifyContent:'center'}}>
                            <TextInput
                                color='black'
                                selectionColor="black"
                                placeholderTextColor="#A8A8A8"
                                style={[styles.userName,{}]}
                                onChangeText={onChangeUserName}
                                value={userName}
                                placeholder="E-mail"
                                returnKeyType="next"
                                secureTextEntry={false}
                                onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            />
                            <View style={{position:'absolute', left:0,opacity:0.7,borderRadius:15,paddingHorizontal:10,paddingVertical:10}}>
                                <Icon  name = {"md-person"} size={25} color={"#A8A8A8"} ></Icon>
                            </View>
                        </View>
                        <View style={{marginVertical:5,flex:0.2,justifyContent:'flex-start'}}>
                            
                            <TextInput
                                color='black'
                                selectionColor="black"
                                placeholderTextColor="#A8A8A8"
                                style={[styles.userName,{}]}
                                onChangeText={onChangePassWord}
                                value={passWord}
                                placeholder="Password"
                                returnKeyType="done"
                                secureTextEntry={securePass ? true : false}
                                ref={(input) => { this.secondTextInput = input; }}
                            />
                            <View style={{position:'absolute', left:0,opacity:0.7,paddingHorizontal:10,paddingVertical:15,}}>
                                <Icon  name = {"ios-key"} size={25} color={"#A8A8A8"} ></Icon>
                            </View>
                            <TouchableOpacity onPress={()=>{if(securePass){setSecurePass(false)}else{setSecurePass(true)}}}  style={{alignItems:'flex-end',marginVertical:15,right:20,position:'absolute'}} >
                                <Icon name = {securePass?  "ios-eye":"md-eye-off"} size={20} color={customColors.text} style={{opacity:0.5}}></Icon>
                            </TouchableOpacity>

                        </View>
                        <View style={{flex:0.1,alignItems:'flex-end'}}>
                            <Button
                                title="Quên mật khẩu?"
                            />
                        </View>
                        <View style={{flex:0.5}}>
                            <View style={{marginVertical:10,flex:0.3,borderRadius:20}}>
                                <TouchableOpacity style={styles.button} 
                                onPress={()=>{loggin()}}
                                >
                                    <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Đăng Nhập</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{marginVertical:10,flex:0.3,borderRadius:20}}>
                                <TouchableOpacity style={styles.button} 
                                onPress={()=>{loggin()}}
                                >
                                    <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Tạo Tài Khoản</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <View style={{flex:0.2}}>
                            <Text>Đăng nhập bằng </Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',flex:0.9}}>
                            <TouchableOpacity onPress={()=>{clearAppData()}}>
                                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#4b4bde',paddingVertical:10,paddingHorizontal:10,borderRadius:10}}>
                                    <Icon  name = {"logo-facebook"} size={35} color={customColors.white} ></Icon>
                                </View>
                            </TouchableOpacity>
                            <View style={{width:10}}></View>
                            <TouchableOpacity onPress={()=>{clearAppData()}}>
                                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#f25246',paddingVertical:10,paddingHorizontal:10,borderRadius:10}}>
                                    <Icon  name = {"logo-google"} size={35} color={customColors.bg} ></Icon>
                                </View>
                            </TouchableOpacity>
                        </View>
                        

                    </View>

                </View>
                
                
                
            </View>
        </TouchableWithoutFeedback>
        </SafeAreaView>
        
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FBFBFD',
        justifyContent:'center',
        alignItems:'center'
    },
    safeView:{
        flex:1,
        width:windowWidth-40,
        

    },
    userName:{
        fontSize:20,
        paddingLeft:windowWidth/7,
        borderRadius:20,
        backgroundColor:customColors.bg,
        height:60,

    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        flex:0.7,
        backgroundColor:customColors.yellow,
        borderRadius:40,
        shadowColor: customColors.yellow,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.64,
        shadowRadius: 10.27,
    }
});