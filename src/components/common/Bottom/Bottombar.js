import { StyleSheet, Text, View ,Dimensions,Animated,Easing} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { customColors } from '../../../assets/Colors'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
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
    <View style={{justifyContent:'center',alignItems:'center'}} >
      
      <View style={{width:windowWidth/3.5,flexDirection:'row'}}>
        <View style={{backgroundColor:'white',marginTop:MARGIN_TOP_QR,width:100}}>
          <View style={{ top:-50}}>
              <View style={{width:100,height:100,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:customColors.bg}}>
                <TouchableWithoutFeedback onPress={props.onPress} onPressIn={onPressIn} onPressOut={onPressOut} >
                  <Animated.View style={[{borderRadius:45,backgroundColor:customColors.primary,width:75,height:75,justifyContent:"center",alignItems:'center'},animatedScaleStyle]}>
                      <Ionicons name="md-qr-code" color={focused ? 'white' : 'white'} size={focused ? 40 : 40}/>    
                  </Animated.View>
                </TouchableWithoutFeedback>
            </View>       
          </View>
        </View>
        <View style={{backgroundColor:'white',width:(windowWidth/3.5)-100,marginTop:MARGIN_TOP_QR,borderRadius:10}} />
      </View>
    </View>
  )
}
export default Bottombar

const styles = StyleSheet.create({

})