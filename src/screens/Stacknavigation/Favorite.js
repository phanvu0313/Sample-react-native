import React from 'react'
import { View, Text,StyleSheet ,FlatList,Dimensions,Image,Animated} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import FloattingButton from '../../components/common/FloattingButton'
import {PanGestureHandler} from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import menu from '../data/menu'
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Favorite = ({ navigation: { push } }) => {
    const [currentIndex , setCurrentIndex] = React.useState(1);
    const [currentIndexItem , setCurrentIndexItem] = React.useState(1);
    const [nameScreen,setNameScreen] = React.useState('');
    animation = new Animated.Value(0);
    
    const flipFront ={
        transform: [{
            rotateY: animation.interpolate({
                inputRange:[0,180],
                outputRange: ["0deg", '180deg'] 
            }),
          },
        ]
    }
    const flipBack ={
        transform: [{
            rotateY: animation.interpolate({
                inputRange:[0,180],
                outputRange: ["180deg", '360deg'] 
            }),
          },
        ]
    }
    toggleMenu = ()=> {
        Animated.timing(animation,{
            toValue : 180,
            duration:500,

            useNativeDriver:false
        }).start();
    }
    const DeleteAction = (progress,dragX) =>{
        const scale = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
          });
        <View >
            <Animated.Text style={[{},{transform : [{scale}]}]}>hihi</Animated.Text>
        </View>
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={{flex:0.15,flexDirection:'row'}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'flex-start',marginLeft:20}}>
                        <Text style={{fontSize:35}}>
                            Your
                        </Text>
                        <Text style={{fontSize:35,fontWeight:'bold'}}>
                            Favorite
                        </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',marginRight:20}}>
                        <TouchableOpacity>
                        <Image  style={{ width: 60,height:60}} source = {require('../../assets/avatar.png')}/>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{flex:0.2}}>
                    <View style={{flex:1,backgroundColor:'#F5D3BB',flexDirection:'row',marginHorizontal:20,paddingHorizontal:15,marginVertical:10, height:windowHeight/6,borderRadius:40}}>
                        <View style={{flex:1,justifyContent:'flex-end',marginLeft:15}}>
                            <Image  style={{ width:165,height:112}} source = {require('../../assets/elp.png')}/>
                        </View>
                        <View style={{flex:1,marginLeft:20,alignItems:'center',justifyContent:'center',position:'absolute'}}>
                            <Image  style={{ width:135,height:130}} source = {require('../../assets/dc.png')}/>
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:18}}>Discount upto</Text>
                            <Text style={{fontWeight:'bold',fontSize:70,color:'#EF8829'}}>40%</Text>
                        </View>
                    </View>
                    
                </View>
                <View style={{flex:0.65,marginBottom:10}}>
                   <View style={{flex:0.1}}>
                       <Text style={{fontWeight:'bold',fontSize:25,marginTop:20,marginLeft:20}}>
                            All Dishes
                       </Text>
                    </View> 
                    <View style={{flex:0.9}}>
                        <ScrollView>
                            <Swipeable
                            renderRightActions={DeleteAction}
                            >
                            <View style={{flex:1,backgroundColor:'#FFE2CD',flexDirection:'row',marginHorizontal:20,paddingHorizontal:15,marginVertical:10, height:windowHeight/6,borderRadius:40}}>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Image  style={{ width:100,height:100}} source = {require('../../assets/favor1.png')}/>
                                </View>
                                
                                <View style={{flex:1,justifyContent:'center'}}>
                                    
                                    <Text style={{fontWeight:'600',fontSize:20}}>Specials Sushi Full Set</Text>
                                    <Text style={{fontWeight:'600',fontSize:20,color:'#73665C'}}>$38.00</Text>
                                    
                                    
                                </View>
                                <View style={{flex:0.5,justifyContent:'flex-end',alignItems:'flex-end',marginRight:10,marginBottom:30}}>
                                    <TouchableOpacity>
                                        <View style={{width:50,height:50,borderWidth:1,borderRadius:15,borderColor:'#D3BBAA',justifyContent:'center',alignItems:'center'}}>
                                            
                                            <Icon style={{flex:0}} name="ios-add" size={25} color="#3F2D20" ></Icon>
                                            
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                            </Swipeable>
                            <View style={{flex:1,backgroundColor:'#FFE2CD',flexDirection:'row',marginHorizontal:20,paddingHorizontal:15,marginVertical:10, height:windowHeight/6,borderRadius:40}}>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Image  style={{ width:100,height:100}} source = {require('../../assets/favor1.png')}/>
                                </View>
                                
                                <View style={{flex:1,justifyContent:'center'}}>
                                    
                                    <Text style={{fontWeight:'600',fontSize:20}}>Specials Sushi Full Set</Text>
                                    <Text style={{fontWeight:'600',fontSize:20,color:'#73665C'}}>$38.00</Text>
                                    
                                </View>
                                <View style={{flex:0.5,justifyContent:'flex-end',alignItems:'flex-end',marginRight:10,marginBottom:30}}>
                                    <TouchableOpacity>
                                        <View style={{width:50,height:50,borderWidth:1,borderRadius:15,borderColor:'#D3BBAA',justifyContent:'center',alignItems:'center'}}>
                                            
                                            <Icon style={{flex:0}} name="ios-add" size={25} color="#3F2D20" ></Icon>
                                            
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                            <View style={{flex:1,backgroundColor:'#FFE2CD',flexDirection:'row',marginHorizontal:20,paddingHorizontal:15,marginVertical:10, height:windowHeight/6,borderRadius:40}}>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Image  style={{ width:100,height:100}} source = {require('../../assets/favor1.png')}/>
                                </View>
                                
                                <View style={{flex:1,justifyContent:'center'}}>
                                    
                                    <Text style={{fontWeight:'600',fontSize:20}}>Specials Sushi Full Set</Text>
                                    <Text style={{fontWeight:'600',fontSize:20,color:'#73665C'}}>$38.00</Text>
                                    
                                </View>
                                <View style={{flex:0.5,justifyContent:'flex-end',alignItems:'flex-end',marginRight:10,marginBottom:30}}>
                                    <TouchableOpacity>
                                        <View style={{width:50,height:50,borderWidth:1,borderRadius:15,borderColor:'#D3BBAA',justifyContent:'center',alignItems:'center'}}>
                                            
                                            <Icon style={{flex:0}} name="ios-add" size={25} color="#3F2D20" ></Icon>
                                            
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>

                        </ScrollView>

                    </View>
                    
                    
                    

                </View>
           
           </View>

        </SafeAreaView>
        
        
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF5E0'//'#A5D1E1',
        //alignItems:'center',
      },
      image:{
        flex:1,
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center'
        
        
    },
      
})

export default Favorite
