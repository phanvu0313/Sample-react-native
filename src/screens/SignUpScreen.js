import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SignUp from './SignUp/SignUp';
import VerifyPhone from './SignUp/VerifyPhone';
import { customColors } from '../assets/Colors';
import ConfirmCode from './SignUp/ConfirmCode';
import AutoAddress from './SignUp/AutoAddress';
import ManualyAddress from './SignUp/ManualyAddress';
import Payment from './SignUp/Payment';



const StackScreens = createStackNavigator();
const SignUpScreen = () => {
    const ImageHeader  = props => {
        let colorStart = customColors.yellow
        let colorEnd = customColors.yellow
        
        return (
          <View style={{flex:1,backgroundColor:customColors.bg}}>
            
          </View>
        )
      }
      const headderItems=(nameIcon,navigation)=>{
        const action=()=>{
          if (nameIcon == 'ios-menu') {
            navigation.openDrawer()
          }else{
            navigation.pop();
          }
        }
        return(
          <View style={{paddingHorizontal:10}}>
            <TouchableOpacity onPress={()=>action()}>
                  <Ionicons  name = {nameIcon} size={30} color={customColors.black}/>
                </TouchableOpacity>
          </View>
      
        )
      }
  return (
    <StackScreens.Navigator screenOptions={{headerShown: false}}>
      <StackScreens.Screen
          name="main"
          
          component={SignUp}
      />
      <StackScreens.Screen
          
          name="VerifyPhone"
          component={VerifyPhone}
          options={{
            title:'',
            headerShown:true,
            headerStyle:{backgroundColor:'red'},
            headerBackground:()=><ImageHeader />,
            headerLeft: (props) => (
              <View style={{paddingHorizontal:10,marginRight:10}}>
                <TouchableOpacity onPress={()=>props.onPress()}>
                    <View style={{width:40,height:40,borderWidth:1,borderRadius:10,borderColor:customColors.gray,justifyContent:'center',alignItems:'center'}}>
                        <Ionicons  name = {'ios-chevron-back'} size={30} color={customColors.black}/>
                    </View>
                </TouchableOpacity>
              </View>
            ),
          }}
          
      />
      <StackScreens.Screen
          name="Confirm"
          component={ConfirmCode}
          options={{
            title:'',
            headerShown:true,
            headerStyle:{backgroundColor:'red'},
            headerBackground:()=><ImageHeader />,
            headerLeft: (props) => (
              <View style={{paddingHorizontal:10,marginRight:10}}>
                <TouchableOpacity onPress={()=>props.onPress()}>
                    <View style={{width:40,height:40,borderWidth:1,borderRadius:10,borderColor:customColors.gray,justifyContent:'center',alignItems:'center'}}>
                        <Ionicons  name = {'ios-chevron-back'} size={30} color={customColors.black}/>
                    </View>
                  
                </TouchableOpacity>
              </View>
            ),
          }}
          
      />
      <StackScreens.Screen
          name="AutoAddress"
          component={AutoAddress}
          options={{
            title:'',
            headerShown:true,
            headerStyle:{backgroundColor:'red'},
            headerBackground:()=><ImageHeader />,
            headerLeft: (props) => (
              <View style={{paddingHorizontal:10,marginRight:10}}>
                <TouchableOpacity onPress={()=>props.onPress()}>
                    <View style={{width:40,height:40,borderWidth:1,borderRadius:10,borderColor:customColors.gray,justifyContent:'center',alignItems:'center'}}>
                        <Ionicons  name = {'ios-chevron-back'} size={30} color={customColors.black}/>
                    </View>
                  
                </TouchableOpacity>
              </View>
            ),
          }}
          
      />
      <StackScreens.Screen
          name="ManualyAddress"
          component={ManualyAddress}
          options={{
            title:'',
            headerShown:true,
            headerStyle:{backgroundColor:'red'},
            headerBackground:()=><ImageHeader />,
            headerLeft: (props) => (
              <View style={{paddingHorizontal:10,marginRight:10}}>
                <TouchableOpacity onPress={()=>props.onPress()}>
                    <View style={{width:40,height:40,borderWidth:1,borderRadius:10,borderColor:customColors.gray,justifyContent:'center',alignItems:'center'}}>
                        <Ionicons  name = {'ios-chevron-back'} size={30} color={customColors.black}/>
                    </View>
                  
                </TouchableOpacity>
              </View>
            ),
          }}
          
      />
      <StackScreens.Screen
          name="Payment"
          component={Payment}
          options={{
            title:'',
            headerShown:true,
            headerStyle:{backgroundColor:'red'},
            headerBackground:()=><ImageHeader />,
            headerLeft: (props) => (
              <View style={{paddingHorizontal:10,marginRight:10}}>
                <TouchableOpacity onPress={()=>props.onPress()}>
                    <View style={{width:40,height:40,borderWidth:1,borderRadius:10,borderColor:customColors.gray,justifyContent:'center',alignItems:'center'}}>
                        <Ionicons  name = {'ios-chevron-back'} size={30} color={customColors.black}/>
                    </View>
                  
                </TouchableOpacity>
              </View>
            ),
          }}
          
      />
    </StackScreens.Navigator>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})