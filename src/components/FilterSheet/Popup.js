import { StyleSheet, Text, View,Modal,Dimensions } from 'react-native'
import React from 'react'
import { customColors } from '../../assets/Colors'
import { BlurView } from '@react-native-community/blur'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Popup = (props) => {


  return (
    <Modal transparent visible={props.isFilterOn} animationType='fade'>
        <BlurView blurType='light' >
            <TouchableWithoutFeedback onPress={()=>props.setIsFilterOn(false)} style={styles.outside}>
                <TouchableWithoutFeedback style={styles.mainView}>
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
        height:windowHeight-400,
        width:windowWidth/1.2
    }
})