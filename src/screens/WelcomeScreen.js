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
                <View style={styles.middView}/>
                <View style={styles.backMiddView}>
                    <View style={{flex:0.8,justifyContent:'center',alignItems:'center'}}>
                        <View style={{flex:0.7,justifyContent:'center',alignItems:'center'}}>
                            <Image style={{width:155,height:155,resizeMode:'cover'}} source={require('../assets/Icon.png')} />
                        </View>
                        <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Chào mừng bạn tới ứng dụng </Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Bắt đầu khám phá nào </Text>
                        </View>

                    </View>
                    <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>login()}>
                            <View style={{backgroundColor:customColors.yellow,width:100,height:40,borderRadius:10,justifyContent:"center",alignItems:'center'}}>
                                <Text style={{color:'white',fontSize:17,fontWeight:'bold'}}>Skip</Text>
                            </View>
                        </TouchableOpacity>

                        
                    </View>

                </View>
            </View>
        </View> 
    )
}

export default WelcomeScreen


const styles = StyleSheet.create({
    conti:{
        flex:1,
        backgroundColor: customColors.bg 
    },
    middView:{
        backgroundColor:customColors.bg,
        width:windowWidth-150,
        height:windowHeight/2,
        marginTop:40,
        borderRadius:20,
        shadowColor: customColors.text,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.24,
        shadowRadius: 10.27,
    },
    backMiddView:{
        backgroundColor:customColors.bg,
        width:windowWidth-100,
        height:windowHeight/2,
        borderRadius:20,
        shadowColor: customColors.text,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.24,
        shadowRadius: 10.27,
        position:'absolute',

    }
      
});