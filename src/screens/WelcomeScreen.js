import React , {useEffect} from 'react'
import { View, Text,StyleSheet,Image,Dimensions } from 'react-native'
import { useStoreState, useStoreActions } from 'easy-peasy';
import Onboarding from './Welcome/Onboarding'
import AsyncStorage from '@react-native-community/async-storage';
import { customColors } from '../assets/Colors';
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WelcomeScreen = ({ navigation },props) => {
    const isFirstime = useStoreState(state => state.isFirstime);
    const firstTime = useStoreActions(action => action.firstTime)
    const login=()=>{
        navigation.replace('Well')
    }
    //onPress={()=>navigation.replace("Well")}

    return (
        <View style={styles.conti}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image resizeMode='contain' source={require('../assets/image/bg.png')} style={[{height:windowHeight}]}/>
            </View>
            
            <View style={styles.bottomView}>
                <View style={{flex:1,justifyContent:'center',left:windowWidth/9}}>
                    <Text style={{fontWeight:'bold',fontSize:30,color:customColors.red,marginBottom:20}}>Get <Text style={{fontWeight:'bold',fontSize:30,color:customColors.black}}>Started.</Text></Text>
                    <Text style={{}}>Order from your favourite restaurants and </Text>
                    <Text style={{}}>takeaways within the matter of seconds.</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
                    <TouchableOpacity onPress={()=>login()}>
                        <View style={styles.button}>
                            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Let's Go</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View> 
    )
}

export default WelcomeScreen


const styles = StyleSheet.create({
    conti:{
        flex:1,
    },
    bottomView:{
        width:windowWidth,
        height:300,
        backgroundColor:'white',
        position:'absolute',
        bottom:0,
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        justifyContent:'center'
    },
    button:{
        borderRadius:20,
        width:windowWidth/1.3,
        height:60,
        backgroundColor:customColors.black,
        justifyContent:'center',
        alignItems:'center'
    }
    
});