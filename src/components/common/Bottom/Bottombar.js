import { StyleSheet, Text, View ,Dimensions,Animated,Easing} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { customColors } from '../../../assets/Colors'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import HalfCircle from './HalfCircle';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const MARGIN_TOP_QR =(windowWidth/11)/1.5

const Bottombar = (props,{focused}) => {
  
  const animatedValue = new Animated.Value(0);
  const buttonScale = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.2, 1.1]
  });
  const onPressIn = () => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 250,
        easing: Easing.linear,
        useNativeDriver: true
      }).start();
  }
  const onPressOut = () => {
      Animated.timing(animatedValue, {
          toValue: 0,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true
        }).start();
  };
  const animatedScaleStyle = {
      transform: [{scale: buttonScale}]
  };

  return (
    <>
    <View style={{flex:1,backgroundColor:'back',flexDirection:'row'}}>
      
      <View style={{top:5}}>
        <HalfCircle/>
      </View>
      <View style={{flex:1,backgroundColor:customColors.white,borderTopLeftRadius:10,borderTopRightRadius:20}}></View>
    </View>

    <View style={{position:'absolute',left:12.5,top:-30}}>
      <TouchableWithoutFeedback onPress={props.onPress} onPressIn={onPressIn} onPressOut={onPressOut} >
        <Animated.View style={[{borderRadius:45,backgroundColor:customColors.primary,width:75,height:75,justifyContent:"center",alignItems:'center'},animatedScaleStyle,styles.qrbutton]}>
            <Ionicons name="md-qr-code" color={focused ? 'white' : 'white'} size={focused ? 40 : 40}/>    
        </Animated.View>
      </TouchableWithoutFeedback>

    </View>
    </>
  )
}
export default Bottombar

const styles = StyleSheet.create({
  qrbutton:{
    shadowColor: customColors.primary,
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 1.24,
    shadowRadius: 5.27,
  }
})