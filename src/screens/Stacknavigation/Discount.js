import React from 'react'
import { View, Text,StyleSheet ,FlatList,Dimensions,Image,Animated,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native'
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



const Discount = ({ navigation: { push } }) => {
    const [currentIndex , setCurrentIndex] = React.useState(1);
    const [currentIndexItem , setCurrentIndexItem] = React.useState(1);
    const [nameScreen,setNameScreen] = React.useState('');
    const swipeableRef = React.useRef(null);
    const [favList,setFavList] = React.useState([]);
    const favv = 'hi'
    
   




    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                {/* <View style={{flex:0.15,flexDirection:'row'}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'flex-start',marginLeft:20}}>
                        <Text style={{fontSize:35}}>
                            Your
                        </Text>
                        <Text style={{fontSize:35,fontWeight:'bold'}}>
                            Favorite
                        </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',marginRight:20}}>
                        <TouchableOpacity onPress ={()=>{handleAddFav(favv)}} >
                        <Image  style={{ width: 60,height:60}} source = {require('../../assets/avatar.png')}/>
                        </TouchableOpacity>
                    </View>
                </View> */}
                <View style={{flex:1}}>
                    <ScrollView>
                        <TouchableOpacity>
                            <View style={{flex:1,backgroundColor:'#F5D3BB',flexDirection:'row',marginHorizontal:20,marginVertical:10, height:windowHeight/5,borderRadius:40}}>
                                <View style={{marginLeft:20,justifyContent:'center',}}>
                                    <Text style={{fontSize:20,fontWeight:'bold'}}>
                                        $0 delivery for
                                    </Text>
                                    <Text style={{fontSize:20,fontWeight:'bold'}}>
                                        30 days!
                                    </Text>
                                    <Text style={{color:'#EF8829',marginTop:10,fontSize:17,fontWeight:'600'}}>
                                        Quick, Quick ...
                                    </Text>
                                </View>
                                <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>
                                    <Image  style={{ width:130,height:120,borderBottomRightRadius:40}} source = {require('../../assets/cir.png')}/>
                                </View>
                                <View style={{position:'absolute',left:'60%',top:'20%'}}>
                                <Image  style={{ width:100,height:100}} source = {require('../../assets/bike.png')}/>
                                </View>
                                
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{flex:1,backgroundColor:'#F5D3BB',flexDirection:'row',marginHorizontal:20,paddingHorizontal:15,marginVertical:10, height:windowHeight/5,borderRadius:40}}>
                                <View style={{flex:1,justifyContent:'flex-end',marginLeft:15}}>
                                    <Image  style={{ width:165,height:112}} source = {require('../../assets/elp.png')}/>
                                </View>
                                <View style={{flex:1,marginLeft:20,alignItems:'center',justifyContent:'center',position:'absolute'}}>
                                    <Image  style={{ width:165,height:160}} source = {require('../../assets/dc.png')}/>
                                </View>
                                <View style={{flex:1,alignItems:'flex-end',marginRight:20,marginBottom:20}}>
                                    <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize:25,color:'#000'}}>
                                            Specials Sushi
                                        </Text>
                                        <Text style={{fontWeight:'bold',fontSize:18}}>
                                            $38.60
                                        </Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                                        <Text style={{fontSize:15}}>Discount upto</Text>
                                        <Text style={{fontWeight:'bold',fontSize:50,color:'#EF8829'}}>40%</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{flex:1,backgroundColor:'#F5D3BB',flexDirection:'row',marginHorizontal:20,paddingHorizontal:15,marginVertical:10, height:windowHeight/5,borderRadius:40}}>
                                <View style={{flex:1,justifyContent:'flex-end',marginLeft:15}}>
                                    <Image  style={{ width:165,height:112}} source = {require('../../assets/elp.png')}/>
                                </View>
                                <View style={{flex:1,marginLeft:20,alignItems:'center',justifyContent:'center',position:'absolute',marginTop:'5%'}}>
                                    <Image  style={{ width:200,height:160}} source = {require('../../assets/dish.png')}/>
                                </View>
                                <View style={{flex:1,alignItems:'flex-end',marginRight:20,marginBottom:20}}>
                                    <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                                        <Text style={{fontWeight:'bold',fontSize:25,color:'#000'}}>
                                            Specials Sushi
                                        </Text>
                                        <Text style={{fontWeight:'bold',fontSize:18}}>
                                            $38.60
                                        </Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                                        <Text style={{fontSize:15}}>Discount upto</Text>
                                        <Text style={{fontWeight:'bold',fontSize:50,color:'#EF8829'}}>40%</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                    
                    
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

export default Discount
