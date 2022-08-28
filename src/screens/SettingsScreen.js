import React from 'react'
import { View, Text,StyleSheet,Dimensions } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { customColors } from '../assets/Colors';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SettingsScreen = ({navigation},props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity >
                <Text>hihihihi</Text>
            </TouchableOpacity>
        </View>  
    )
    }

export default SettingsScreen
const styles = StyleSheet.create({
    //View
    container:{
        flex:1 ,
        backgroundColor:customColors.bg,
        justifyContent:'center',
        alignItems:'center'
    },
    alarmView:{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'

    },

    //Neumorphism
    inner:{
        
        backgroundColor:'#E0E5EC',
        alignItems:'center',
        justifyContent:'center',
    },
    topShadow:{
        flexDirection:'row',
        shadowOffset:{
            width:-5,
            height:-5,

        },
        shadowOpacity:1,
        shadowRadius:6,
        shadowColor:'#fff'
    },
    bottomShadow:{
        shadowOffset:{
            width:6,
            height:6,

        },
        shadowOpacity:1,
        shadowRadius:6,
        shadowColor:'#3d4246'
    },

    // inset Neumorphism
    inset:{
        backgroundColor:'#E0E5EC',
        //backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0,
        borderColor: 'rgba(158, 150, 150, .5)',
       
    },
    
    
    
      
})