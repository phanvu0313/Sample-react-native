import { StyleSheet, Text, View ,Dimensions,Image,FlatList,Easing} from 'react-native'
import React from 'react'
import { customColors } from '../../../assets/Colors'
import Animated ,{
  StretchInY,
  FadeIn
} from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Main = ({navigation}) => {
  const [currentIndex , setCurrentIndex] = React.useState(1);
  const [popUpState,setPopUpState] = React.useState(false);
    animation = new Animated.Value(0);
    animation2 = new Animated.Value(0);
    const flipFront ={
      height : animation.interpolate({ 
        inputRange: [0,0.5, 1], 
        outputRange: [100, windowHeight*0.75,100],
      })
    }
    const flipBack ={
      opacity : animation2.interpolate({ 
        inputRange: [0,1], 
        outputRange: [0.5,1],
      })
    }
    toggleMenu = ()=> {
        Animated.timing(animation,{
            toValue : 1,
            duration:1000,
            easing: Easing.linear,
            useNativeDriver:false
        }).start();
        Animated.timing(animation2,{
          toValue : 1,
          duration:1000,
          easing: Easing.linear,
          useNativeDriver:false
      }).start();
    }
  return (
    <>
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Animated.View entering={FadeIn}  style={{backgroundColor:"red",flex:1}}>
      
      </Animated.View>

    </SafeAreaView>
    
    
    </>
  )
}
export default Main
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:customColors.black,
    marginHorizontal:0,
  },
  con:{
    flex:1,
    backgroundColor:customColors.pink,
    marginHorizontal:0,
  },
  textPS:{
    fontWeight:'500'
  },
  unSelected:{
    borderRadius:10,
    borderWidth:1,
    width:windowWidth/6,
    height:windowWidth/6,
    borderColor:customColors.white,
    justifyContent:'center',
    alignItems:'center',
    opacity:0.5
  },
  onSelected:{
    borderRadius:10,
    borderWidth:1,
    backgroundColor:customColors.bg,
    width:windowWidth/6,
    height:windowWidth/6,
    borderColor:customColors.bg,
    justifyContent:'center',
    alignItems:'center',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.13,
    shadowRadius: 5.51,
    elevation: 15,
  },
  onSelectedLiner:{
    borderRadius:10,
    borderWidth:2,
    backgroundColor:customColors.bg,
    width:windowWidth/6-3,
    height:windowWidth/6-3,
    borderColor:customColors.yellow,
    justifyContent:'center',
    alignItems:'center',

  }
})