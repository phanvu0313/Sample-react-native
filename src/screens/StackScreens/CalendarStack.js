import { StyleSheet, Text, View,Dimensions ,TouchableOpacity} from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { customColors } from '../../assets/Colors'
import HistoryMain from './History/HistoryMain';
import Ionicons from 'react-native-vector-icons/Ionicons'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const StackScreens = createStackNavigator();
const CalendarStack = (props) => {
  
  const ImageHeader  = () => {
    return (
      <View style={{flex:1,backgroundColor:customColors.white}}>
        <View style={{flex:1}}/>
          <View style={{flex:1,flexDirection:'row',marginHorizontal:20}}>
          <Text style={{fontSize:35,color:customColors.text,fontWeight:'bold'}}>
                History
              </Text>
          </View>
  
      </View>
    )
  }
  

  return (
    <StackScreens.Navigator screenOptions={{headerShown: false}}>
      <StackScreens.Screen
          name="historymain"
          component={HistoryMain}
          options={{
            title:'',
            headerBackground:()=><ImageHeader/>,
            headerRight: () => (
              <View style={{width:windowWidth/6,paddingHorizontal:10,paddingVertical:10}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{paddingHorizontal:5}}>
                    <TouchableOpacity onPress={toogleHistory}>
                      <Ionicons  name = {"filter"} size={30} color={customColors.text }/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ),
          }}
      ></StackScreens.Screen>
    </StackScreens.Navigator>
  )
}

export default CalendarStack

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:customColors.bg
    }
})