import React , {useEffect} from 'react'
import { View, Text,StyleSheet,Image ,Animated,Easing} from 'react-native'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { customColors } from '../assets/Colors';
import LinearGradient from 'react-native-linear-gradient'



const SplashScreen = ({ navigation }) => {

    const animatedValue = React.useRef(new Animated.Value(0)).current

    const startAnimation = toValue => {
        Animated.timing(animatedValue, {
            toValue,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start()
    }
    const rotation ={
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [200,0],
                    extrapolate: 'clamp'
                })
            },
            {
                rotate: animatedValue.interpolate({
                    inputRange: [0,1],
                    outputRange: ["45deg", '0deg'] 
                }),
            },
        ]
    }
    const opacity = animatedValue.interpolate({
        inputRange:[0, 0.5, 1],
        outputRange:[0, 0, 1]
    })
    useEffect(() => {
        startAnimation()
        setTimeout(() => {
            navigation.navigate("SignIn")
        }, 1500)
        
      }, [])
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Animated.Text style={[{fontWeight:'bold',fontSize:100,opacity:opacity}]}>R I </Animated.Text>
                <Animated.Text style={[{color:customColors.yellow,fontWeight:'bold',fontSize:100},rotation]}>O</Animated.Text>
            </View>
            <Animated.Text style={[{fontWeight:'bold',fontSize:40,opacity:opacity}]}>Coffee & Milktea</Animated.Text>
        </View>
    )
}

export default SplashScreen


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:customColors.bg,
        justifyContent:'center',
        alignItems:'center',
        
    }
      
});