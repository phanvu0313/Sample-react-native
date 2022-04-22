import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    Animated,
    TouchableWithoutFeedback,
    TouchableOpacity
 } from 'react-native';
 import Icon from 'react-native-vector-icons/Ionicons';
 import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import PropType from 'prop-types'


const FloattingButton = (props) => {

    const [currentSeclect, setCurrentSeclect] = React.useState("");

    animation = new Animated.Value(0);
    toggleMenu = ()=> {
        const toValue = this.open ? 0 : 1 ;
        Animated.spring(animation,{
            toValue,
            friction:5,
            useNativeDriver:false
        }).start();
        this.open = !this.open;
    }
    const onSeclected =(name)=>{
       toggleMenu()
       props.onPress()
    }


    const rotation ={
        transform: [{
            rotate: animation.interpolate({
              inputRange: [0, 1],
              outputRange: ["0deg", '45deg'] 
            }),
          }]
    }
    const firstStyle ={
        transform: [
            {scale:animation},
            {
                translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -80] 
                }),
            }]

    }
    const secondStyle ={
        transform: [
            {scale:animation},
            {
                translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -140] 
                }),
            }]

    }
    const thirdStyle ={
        transform: [
            {scale:animation},
            {
                translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -200] 
                }),
            }]
    }
    const opacity = animation.interpolate({
        inputRange:[0, 0.5, 1],
        outputRange:[0, 0, 1]
    })
    
    return (
        <View style={[styles.container, props.style]}>
            <TouchableOpacity onPress ={()=>{
                onSeclected('Details')
            }} >
            <Animated.View style={[styles.button,styles.secondary,thirdStyle,opacity]}>

                <Icon name="ios-logo-ionic" size={24} color="red" ></Icon>

                </Animated.View>
                
            </TouchableOpacity>

            <TouchableOpacity onPress ={()=>{
                onSeclected('second')
            }} >
            <Animated.View style={[styles.button,styles.secondary,secondStyle,opacity]}>

                <Icon name="ios-logo-foursquare" size={24} color="red" ></Icon>

                </Animated.View>
                
            </TouchableOpacity>

            <TouchableOpacity  onPress ={()=>{
                onSeclected('first')
            }} >
            <Animated.View style={[styles.button,styles.secondary,firstStyle,opacity]}>

                <Icon name="ios-moon-outline" size={24} color="red" ></Icon>

                </Animated.View>
                
            </TouchableOpacity>

            <TouchableWithoutFeedback onPress={toggleMenu} >
                
                <Animated.View style={[styles.button,styles.menu,rotation]}>
                    <LinearGradient
                        start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                        locations={[1,1,0.5]}
                        colors={['#fa7e45', '#fa7e45', '#fe636a']}
                        style={styles.button}>
                        <Icon name="md-add" size={30} color="white" ></Icon>
                    </LinearGradient>
                </Animated.View>
                
            </TouchableWithoutFeedback>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        //backgroundColor:'red',
        //alignItems:'center',
        position:'absolute'
    },
    menu:{
        backgroundColor:'#f74b20',
        borderColor:'white',
        borderWidth:1,

    },
    button:{
        position:'absolute',
        width:60,
        height:60,
        borderRadius:60/2,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.2,
        borderColor:'white',
        shadowRadius:10,
        shadowColor:'red',
        shadowOpacity:0.7,
        shadowOffset:{height:10},

    },
      
    secondary:{
        width:48,
        height:48,
        borderRadius:60/2,
        justifyContent:'center',
        alignItems:'center',
        shadowRadius:10,
        shadowColor:'red',
        shadowOpacity:0.3,
        shadowOffset:{height:10},
        backgroundColor:'white'
    },
      
      
})

export default FloattingButton;

FloattingButton.propTypes = {
    onPress: PropType.func,
  }