import React from 'react'
import { View, Text,StyleSheet ,FlatList,Dimensions,Image,Animated,Alert,TouchableWithoutFeedback,Keyboard,TextInput} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import FloattingButton from '../../components/common/FloattingButton'
import {PanGestureHandler} from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import menu from '../data/menu'
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Cart = ({ navigation: { push } }) => {
    const [currentIndex , setCurrentIndex] = React.useState(1);
    const [currentIndexItem , setCurrentIndexItem] = React.useState(1);
    const [nameScreen,setNameScreen] = React.useState('');
    const swipeableRef = React.useRef(null);
    const [favList,setFavList] = React.useState([]);
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
    
    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '' }}>
            <View style={{flex:0.4,backgroundColor:'#F5D3BB',height:windowHeight/5,marginHorizontal:20,borderRadius:30,marginTop:30,marginBottom:15,flexDirection:'row'}}>
                <View style={{flex:1,alignItems:'flex-start',marginLeft:20}}>
                    <View>
                        <Image  style={{ width:121,height:70,marginTop:20}} source = {require('../../assets/doub.png')}/>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text >
                            DELIVERY TIME
                        </Text>
                        <Text style={{fontSize:25,fontWeight:'bold',color:'#84BD93'}}>
                            11:11 <Text style={{fontWeight:'bold',color:'#000'}}>min</Text>
                        </Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text>
                             STATUS
                        </Text>
                        <Text style={{fontSize:17,fontWeight:'bold',color:'#84BD93'}}>
                            On The Way
                        </Text>
                    </View>
                    
                </View>
                <View style={{flex:1}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',marginRight:30}}>
                        <Text style={{fontSize:20,fontWeight:'bold',marginBottom:10}}>
                            Steak, Sushi
                        </Text>
                        <Text style={{color:'#84BD93',fontSize:17,fontWeight:'bold'}}>
                            #342347
                        </Text>

                    </View>
                    
                    <View style={{flex:1}}>
                        <View style={{flex:1,marginHorizontal:20}}>
                            <TouchableOpacity style={{borderWidth:1,borderRadius:15,justifyContent:'center',alignItems:'center',height:40,borderColor:"#D3BBAA"}}>
                                <Text>
                                    Refund
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1,marginHorizontal:20}}>
                        <TouchableOpacity style={{borderRadius:15,backgroundColor:'#84BD93',justifyContent:'center',alignItems:'center',height:40}}>
                            <Text style={{color:'white'}}>Track Order</Text>
                        </TouchableOpacity>
                        </View>
                        
                        
                    </View>
                    
                </View>
            </View>
            <View style={{flex:0.05,marginVertical:10}}>
                <Text style={{fontWeight:'bold',fontSize:25,marginLeft:20}}>
                    Latest Orders
                </Text>

            </View>
            
            <View style={{flex:0.4,borderColor:'#E6DCCD',height:windowHeight/5,marginHorizontal:20,borderRadius:30,borderWidth:1}}>
                <View style={{flex:1,marginHorizontal:20,flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Image  style={{ width:121,height:70,marginTop:20}} source = {require('../../assets/doub.png')}/>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',marginTop:10}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>
                            Fried, Mixed Potatoes
                        </Text>
                        <Text style={{fontWeight:'400',fontSize:16,marginTop:0}}>
                            $38.60<Text>  •  </Text><Text style={{fontWeight:'300'}}>2 Dishs</Text>
                        </Text>
                    </View>

                </View>
                <View style={{flex:0.5,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Image  style={{ width:20,height:20}} source = {require('../../assets/tick.png')}/>
                    <Text style={{color:'#84BD93',marginHorizontal:20,fontWeight:'500'}}>
                        Delivered
                    </Text>
                    <Text style={{color:'#84BD93',marginHorizontal:20,fontWeight:'500'}}>
                        #342347
                    </Text>
                    <Text style={{color:'#84BD93',marginHorizontal:20,fontWeight:'500'}}>
                        26 Jun, 11:15
                    </Text>

                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <View style={{flex:1,marginHorizontal:10}}>
                        <TouchableOpacity style={{borderWidth:1,borderRadius:15,justifyContent:'center',alignItems:'center',height:40,borderColor:"#D3BBAA"}}>
                            <Text>
                                Rate Courier
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,marginHorizontal:10}}>
                        <TouchableOpacity style={{borderRadius:15,backgroundColor:'#84BD93',justifyContent:'center',alignItems:'center',height:40}}>
                            <Text style={{color:'white'}}>
                                Re Order
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
      );
      
    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: 'black' }} />
    );

    const ThirdRoute = () => (
        <View style={{ flex: 1, backgroundColor: 'white' }} />
        );
    
    const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute,
    });
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Up coming' },
        { key: 'second', title: 'History' },
        { key: 'third', title: 'Refund' },
    ]);
    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#84BD93',height:4,borderRadius:20,marginLeft:20,width:70 }}
          style={{ backgroundColor: 'transparent',marginRight:40}}
          labelStyle = {{color:'#BCB3AB',fontWeight:'bold',fontSize:18,textTransform:'none'}}
          activeColor ={'#3F2D20'}
          
        />
      );
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                {/* <View style={{flex:0.15,flexDirection:'row'}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'flex-start',marginLeft:20}}>
                        <Text style={{fontSize:35}}>
                            Your
                        </Text>
                        <Text style={{fontSize:35,fontWeight:'bold'}}>
                            Orders
                        </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',marginRight:20}}>
                        <TouchableOpacity >
                        <Image  style={{ width: 60,height:60}} source = {require('../../assets/avatar.png')}/>
                        </TouchableOpacity>
                    </View>

                </View> */}
                <View style={{flex:1}}>
                    
                    <View style={{flex:1}}>
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            renderTabBar={renderTabBar}
                            
                            />
                    </View>

                </View>
           
           </View>
           </TouchableWithoutFeedback>

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
    tabBar: {
        flexDirection: 'row',
        paddingTop: 20,
      },
      tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
      },
      
})

export default Cart
