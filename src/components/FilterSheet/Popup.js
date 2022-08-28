import { StyleSheet, Text, View,Modal,Dimensions } from 'react-native'
import React from 'react'
import { customColors } from '../../assets/Colors'
import { BlurView } from '@react-native-community/blur'
import PropType from 'prop-types'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Popup = (props) => {
  return (
    <Modal transparent visible={props.isOn} animationType='none'>
        <BlurView blurType='light' >
            <TouchableWithoutFeedback onPress={()=>props.setIsOn(false)} style={styles.outside}>
                <TouchableWithoutFeedback style={[styles.mainView,{width:props.width,height:props.height}]}>
                    {props.children}
                </TouchableWithoutFeedback>
            </TouchableWithoutFeedback>
        </BlurView>
    </Modal>
  )
}

export default Popup

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
        borderRadius:40,
        
    }
})
Popup.propsType = {
    width:PropType.number,
    height:PropType.number,
    isOn:PropType.bool,
    setIsOn:PropType.func,
    
  }
Popup.defaultProps = {
    width:300,
    height:400
  }