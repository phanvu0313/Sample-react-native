import React from 'react'
import { View, Text,StyleSheet,Dimensions } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import NeuButton from '../components/NeuButton';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SettingsScreen = () => {

    
    const NeuMorph = ({children,style,sizeW,sizeH,radius}) =>{
        return (
            <View style={styles.topShadow}>
                <View style={styles.bottomShadow}>
                    <View style={[{flexDirection:'row'},styles.inner,{width:sizeW||40,height:sizeH||40,borderRadius:radius, borderWidth:0.5,borderColor:'white',borderBottomWidth:0,borderRightWidth:0},style]}>
                        {children}
                    </View>
                </View>
            </View>
        )
    }
    return (
            <View style={styles.container}>
                <View style={[styles.alarmView,{flexDirection:'row',marginTop:60,paddingBottom:10,borderBottomWidth:2,borderColor:'white'}]}>
                    <View style={{flex:2,marginLeft:100,justifyContent:'center',alignItems:'center'}}>
                        <NeuButton size={50} style={{borderRadius:20}}>
                            <Icon name="add" size={30} color="#545454" ></Icon>
                        </NeuButton>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity>
                                <NeuMorph sizeH={60} sizeW={60} radius={120}>
                                    <Icon name="add" size={30} color="#545454" ></Icon>
                                </NeuMorph>
                        </TouchableOpacity>

                    </View>
                        
                    </View>
                    <View style={[styles.alarmView,{marginTop:60}]}>
                        <TouchableOpacity>
                            <NeuMorph sizeW={windowWidth-40} sizeH={80} radius={20}>
                                <Icon name="timer-sharp" size={30} color="#545454" ></Icon>
                            </NeuMorph>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.alarmView,{marginTop:60}]}>
                        <TouchableOpacity>
                            <NeuMorph sizeW={windowWidth-40} sizeH={80} radius={20}>
                                {/* <Icon name="timer-sharp" size={30} color="#545454" ></Icon> */}
                            </NeuMorph>
                        </TouchableOpacity>
                    </View>
            </View>  
    )
}

export default SettingsScreen
const styles = StyleSheet.create({
    //View
    container:{
        flex:1 ,
        backgroundColor:'#E0E5EC',
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