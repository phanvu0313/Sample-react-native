import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { customColors } from '../../assets/Colors'
import Main from './Home/Main';
import Detail from './Home/Detail';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StackScreens = createStackNavigator();
const ImageHeader  = props => {
  let colorStart = customColors.yellow
  let colorEnd = customColors.yellow
  
  return (
    <View style={{flex:1,backgroundColor:customColors.bg}}>
      <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 0}} colors={[colorStart, colorEnd] } style={{height:windowHeight/5,bottom:windowHeight/5/2,backgroundColor:colorStart,borderBottomLeftRadius:150,borderBottomRightRadius:10}}>
      
      </LinearGradient>
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
const HomeStack = ({navigation}) => {
  return (
    <StackScreens.Navigator screenOptions={{headerShown: false}}>
      <StackScreens.Screen
          
          name="main"
          
          component={Main}
      />
      <StackScreens.Screen
          options={{
            //presentation:'card',
            title:'',
            headerShown:false,
            headerStyle:{backgroundColor:'red'},
            presentation:'modal'
          }}
          name="Detail"
          component={Detail}
      />
    </StackScreens.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:customColors.red
    }
})