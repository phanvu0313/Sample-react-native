import React , {useEffect} from 'react'
import { View, Text,StyleSheet,Image,Dimensions,Animated } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Slide from './SlideIndex';

const windowWidth = Dimensions.get('window').width;
const ITEM_SIZE = windowWidth/2+50;
const SPACING = (windowWidth-ITEM_SIZE)/2;
const OnboardingItem = ({ item,index,scrollX}) => {
    const inputRange = [
        (index - 2) * ITEM_SIZE,
        (index - 1) * ITEM_SIZE,
        (index) * ITEM_SIZE,
    ];

    const rotation ={
        transform: [{
            rotate: scrollX.interpolate({
              inputRange: [
                (index - 2) * ITEM_SIZE,
                (index - 1) * ITEM_SIZE,
                (index) * ITEM_SIZE,
            ],
              outputRange: ["10deg",'0deg','-10deg'] 
            }),

          },
          {
            translateY : scrollX.interpolate({
                inputRange,
                outputRange: [50, 0, 50],
                extrapolate: 'clamp',
            })
          }
        ]
        
    }
    
  
    return (
        <Animated.View style={[styles.container,{width:index == 0? SPACING:ITEM_SIZE ,padding:40,borderRadius:30},rotation]}>
            <Image source={item.image} style={[styles.image,{width:ITEM_SIZE, resizeMode:'cover'}]} />
        </Animated.View>
    )
}

export default OnboardingItem

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        
      },
    image:{
        flex:1,
        ///backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        
    },
    title:{
        fontWeight:'800',
        fontSize:28,
        marginBottom:10,
        textAlign:'center',
        color:'#3F2D20'

    },
    des:{
        fontWeight:'300',
        textAlign:'center',
        color:'red',
        paddingHorizontal:64

    }
      
});