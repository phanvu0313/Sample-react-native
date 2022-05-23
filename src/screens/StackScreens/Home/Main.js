import { StyleSheet, Text, View ,Dimensions,Image} from 'react-native'
import React from 'react'
import { customColors } from '../../../assets/Colors'
import ActionCard from '../../../components/ActionCard/index'
import {BlurView} from '@react-native-community/blur'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Main = () => {
  const SendPressed = () => {
    console.log('sendPressed');
  }
  const ScanPressed = () => {
    console.log('ScanPressed');
  }
  const RePressed = () => {
    console.log('RePressed');
  }
  return (
    <View style={styles.container}>
      
    </View>
  )
}
export default Main
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:customColors.bg,
    marginHorizontal:0,
  },
  textPS:{
    fontWeight:'500'

  }
  

})