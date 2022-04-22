import React , {useEffect} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import {LogBox} from "react-native";
import LinearGradient from 'react-native-linear-gradient';


LogBox.ignoreLogs([
"ViewPropTypes will be removed",

])

const WelcomeScreen = ({ navigation }) => {
    const Loading = React.useRef(null);
    const onLoading = () => {
        Animated.timing(LoginAnimation1,{
            duration:500, 
            toValue:50,
            useNativeDriver: false}
            ).start();
        Animated.timing(LoginAnimation2,{
            duration:500, 
            toValue:50,
            useNativeDriver: false}
            ).start();
    };

    console.log(navigation)
    useEffect(() => {
        Loading.current.play(0, 175)
        
        setTimeout(() => {
            
            navigation.navigate("SignIn")
        }, 1000)
        
      }, [])
    return (
        <LinearGradient colors={['#A5D1E1', '#199FB1', '#0D5C75']} style={styles.linearGradient}>
        <View style={{flex:1}}>
            <View style={{flex:1}} >
                <LottieView ref={Loading} loop = {false} source={require('../assets/loadin.json')} speed={2}  />
            </View>
            
        </View>
        </LinearGradient>
        // <View style={{
        //     flex: 1,
        //     justifyContent: 'center',
        //     alignItems: 'center'
        // }}>
        //     <TouchableOpacity style={{
        //         backgroundColor: '#000',
        //         paddingHorizontal: 40, 
        //         borderRadius: 20,
        //         paddingVertical: 8,
        //         margin: 6
        //     }}
        //         onPress={() => {
        //             navigation.navigate("SignIn")
        //         }}
        //     >
        //         <Text style={{
        //             color: '#fff',
        //             fontSize: 20
        //         }}>
        //             Sign In
        //         </Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={{
        //         backgroundColor: '#000',
        //         paddingHorizontal: 40, 
        //         borderRadius: 20,
        //         paddingVertical: 8,
        //         margin: 6
        //     }}
        //         onPress={() => {
        //             navigation.navigate("SignUp")
        //         }}
        //     >
        //         <Text style={{
        //             color: '#fff',
        //             fontSize: 20
        //         }}>
        //             Sign Up
        //         </Text>
        //     </TouchableOpacity>
        // </View>
    )
}

export default WelcomeScreen


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
      
});
