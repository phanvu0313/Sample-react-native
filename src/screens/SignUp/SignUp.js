import React, { useState, useEffect } from 'react'
import { View, Text,StyleSheet,Dimensions,TouchableWithoutFeedback,Animated,Image,TouchableOpacity,TextInput ,Button} from 'react-native'
import { useStoreState, useStoreActions } from 'easy-peasy';
import {Keyboard} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { customColors } from '../../assets/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUp = ({navigation},props) => {
    const isloggedin = useStoreState(state => state.isLoggedin);
    const loggin = useStoreActions(action => action.loggin)
    const starPlay = React.useRef(null);
    const [userName, onChangeUserName] = React.useState("");
    const [passWord, onChangePassWord] = React.useState("");
    const [securePass,setSecurePass]= React.useState(true);
    const [validateEmail,setValidateEmail] = React.useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

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
                    <View style={{flex:0.15,justifyContent:'flex-end'}}>
                        <Text style={{fontWeight:'bold',fontSize:30,color:customColors.red}}>Create <Text style={{fontWeight:'bold',fontSize:30,color:customColors.black}}>Account.</Text></Text>
                    </View>
                    <View style={{flex:0.75}}>
                        <View style={{marginVertical:5,flex:0.2,justifyContent:'center'}}>
                            <TextInput
                                color='black'
                                selectionColor="black"
                                placeholderTextColor="#A8A8A8"
                                style={[styles.userName,{}]}
                                onChangeText={onChangeUserName}
                                value={userName}
                                placeholder="Name"
                                returnKeyType="next"
                                secureTextEntry={false}
                                onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            />
                            <View style={{position:'absolute', left:15,opacity:0.7,borderRadius:15,paddingHorizontal:10,paddingVertical:10}}>
                                <Icon  name = {"person-outline"} size={25} color={"#000"} ></Icon>
                            </View>
                        </View>
                        <View style={{marginVertical:5,flex:0.2,justifyContent:'flex-start'}}>
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
                            <View style={{position:'absolute', left:15,opacity:0.7,paddingHorizontal:10,paddingVertical:15,}}>
                                <Icon  name = {"mail-outline"} size={25} color={"#000"} ></Icon>
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
                            <View style={{position:'absolute', left:15,opacity:0.7,paddingHorizontal:10,paddingVertical:15,}}>
                                <Icon  name = {"lock-closed-outline"} size={25} color={"#000"} ></Icon>
                            </View>
                            <TouchableOpacity onPress={()=>{if(securePass){setSecurePass(false)}else{setSecurePass(true)}}}  style={{alignItems:'flex-end',marginVertical:15,right:20,position:'absolute'}} >
                                <Icon name = {securePass?  "ios-eye":"md-eye-off"} size={20} color={customColors.text} style={{opacity:0.5}}></Icon>
                            </TouchableOpacity>
                        </View>
                        
                        
                        <View style={{flex:0.5}}>
                            <View style={{marginVertical:10,height:60,borderRadius:20}}>
                                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('VerifyPhone')}>
                                    <Text style={{fontWeight:'bold',fontSize:25,color:customColors.bg}}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor:'white',height:30}}>
                                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <View style={{height:1,width:100,backgroundColor:customColors.gray,borderRadius:100}} />
                                    <Text>Or Sign Up With</Text>
                                    <View style={{height:1,width:100,backgroundColor:customColors.gray,borderRadius:100}} />
                                </View>
                            </View>
                            <View style={{height:100,backgroundColor:'white',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                <TouchableOpacity onPress={()=>{clearAppData()}}>
                                    <View style={styles.socialM}>
                                        <Image resizeMode='contain' source={require('../../assets/image/gg.png')} style={[{height:30}]}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{clearAppData()}}>
                                    <View style={styles.socialM}>
                                        <Image resizeMode='contain' source={require('../../assets/image/apple.png')} style={[{height:30}]}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{clearAppData()}}>
                                    <View style={styles.socialM}>
                                        <Image resizeMode='contain' source={require('../../assets/image/fb.png')} style={[{height:30}]}/>
                                    </View>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </View>
                    <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
                        {/* <TouchableOpacity onPress={()=>{clearAppData()}}> */}
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontWeight:'500',fontSize:18}}>Already have an account?</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                                <Text style={{fontWeight:'500',fontSize:18,color:customColors.red}}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                
                
                
            </View>
        </TouchableWithoutFeedback>
        </SafeAreaView>
        
    )
}

export default SignUp

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
        fontSize:20,
        paddingLeft:windowWidth/6,
        borderRadius:20,
        backgroundColor:customColors.bg,
        height:60,
        borderColor:customColors.gray,
        borderWidth:1,
        

    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:customColors.black,
        borderRadius:20,
       
    },
    socialM:{
        marginHorizontal:20,
        width:80,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        borderWidth:1,
        borderColor:customColors.gray
    }
});