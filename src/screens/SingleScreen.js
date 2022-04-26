import React from 'react'
import { View, Text,StyleSheet,Dimensions } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SingleScreen = () => {
    const NeuMorph = ({children,style,sizeW,sizeH}) =>{
        return (
            <View style={styles.topShadow}>
                <View style={styles.bottomShadow}>
                    <View style={[styles.inner,{width:sizeW||40,height:sizeH||40,borderRadius:25},style]}>
                        {children}
                    </View>
                </View>
            </View>
        )
    }
    return (
            <View style={styles.container}>
                <View style={[styles.alarmView,{flexDirection:'row',marginTop:60,paddingBottom:10,borderBottomWidth:2,borderColor:'white'}]}>
                    <View style={{flex:2}}>
                        <Text style={{marginLeft:30,fontWeight:'bold',fontSize:35,color:'#545454'}}>
                            Wake Up
                        </Text>

                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity >
                                <NeuMorph sizeW={70} sizeH={70}>
                                    <Icon name="timer-outline" size={30} color="#545454" ></Icon>
                                </NeuMorph>
                        </TouchableOpacity>

                    </View>
                        
                    </View>
                <ScrollView>
                    
                    <View style={[styles.alarmView,{marginTop:60}]}>
                        <TouchableOpacity>
                            <NeuMorph sizeW={windowWidth-40} sizeH={80}>
                                <Text>Arlam</Text>
                                <Icon name="timer-sharp" size={30} color="#545454" ></Icon>
                            </NeuMorph>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.alarmView}>
                        <TouchableOpacity>
                            <NeuMorph sizeW={windowWidth-40} sizeH={80}>
                                <Text>Arlam</Text>
                                <Icon name="timer-sharp" size={30} color="#545454" ></Icon>
                            </NeuMorph>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.alarmView}>
                        <TouchableOpacity>
                            <NeuMorph sizeW={windowWidth-40} sizeH={80}>
                                <Text>Arlam</Text>
                                <Icon name="timer-sharp" size={30} color="#545454" ></Icon>
                            </NeuMorph>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.alarmView}>
                        <TouchableOpacity>
                            <NeuMorph sizeW={windowWidth-40} sizeH={80}>
                                <Text>Arlam</Text>
                                <Icon name="timer-sharp" size={30} color="#545454" ></Icon>
                            </NeuMorph>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
                
                
            </View>  
    )
}

export default SingleScreen
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
        shadowColor:'#A3B1C6'
    },
    
      
})