import { StyleSheet, Text, View,Modal,Dimensions } from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur'
import PropType from 'prop-types'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { customColors } from '../../assets/Colors'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CountryPicker = (props) => {
  return (
    <Modal transparent visible={props.isOn}  animationType='fade'>
        <TouchableWithoutFeedback onPress={()=>props.setIsOn(false)} style={styles.outside}>
            <TouchableWithoutFeedback style={[styles.mainView,{width:props.width,height:props.height}]}>
                {props.children}
            </TouchableWithoutFeedback>
        </TouchableWithoutFeedback>
    </Modal>
  )
}
export default CountryPicker

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    outside:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    mainView:{
        backgroundColor:customColors.white,
        borderRadius:20,
        
    }
})
CountryPicker.propsType = {
    width:PropType.number,
    height:PropType.number,
    isOn:PropType.bool,
    setIsOn:PropType.func,
    
  }
  CountryPicker.defaultProps = {
    width:windowWidth-50,
    height:windowHeight-200
  }