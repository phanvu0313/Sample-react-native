import React from 'react'
import { View, Text,StyleSheet ,FlatList,Dimensions,Image,Animated,Alert,TouchableWithoutFeedback,Keyboard,TextInput,} from 'react-native'
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



const Menu = ({ navigation: { push } }) => {
    const [currentIndex , setCurrentIndex] = React.useState(1);
    const [currentIndexItem , setCurrentIndexItem] = React.useState(1);
    const [nameScreen,setNameScreen] = React.useState('');
    const swipeableRef = React.useRef(null);
    const [favList,setFavList] = React.useState([]);
    const favv = 'hi'
    
    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '' }}>
            <View style={{backgroundColor:'#F5D3BB',height:windowHeight/5,marginHorizontal:20,borderRadius:30,borderWidth:2,borderColor:'white',marginVertical:5}}>
            </View>
            <View style={{backgroundColor:'#F5D3BB',height:windowHeight/5,marginHorizontal:20,borderRadius:30,borderWidth:2,borderColor:'white'}}>
                
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
        { key: 'first', title: 'Main Dishes' },
        { key: 'second', title: 'Desserts' },
        { key: 'third', title: 'Drinks' },
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
                            We have
                        </Text>
                        <Text style={{fontSize:35,fontWeight:'bold'}}>
                            Greate Menu
                        </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',marginRight:20}}>
                        <TouchableOpacity >
                        <Image  style={{ width: 60,height:60}} source = {require('../../assets/avatar.png')}/>
                        </TouchableOpacity>
                    </View>

                </View> */}
                <View style={{flex:1}}>
                    <View style={{flex:0.09 ,flexDirection:'row'}}>
                        <View style={{flex:0.85,borderWidth:1,borderColor:'#E6DCCD',justifyContent:'center',borderRadius:20,marginHorizontal:20,marginVertical:5}}>
                            <Icon style={{position:'absolute', right:'5%',opacity:0.7}} name = 'ios-search-outline' size={25} color="#3F2D20" />
                            <TextInput
                                color='black'
                                selectionColor="black"
                                placeholderTextColor="#3F2D20"
                                style={[{marginHorizontal:20}]}
                                placeholder="Search"
                                returnKeyType="search"
                                secureTextEntry={false}
                            />
                            
                        </View>
                        <View style={{flex:0.15, borderWidth:1,borderColor:'#E6DCCD',borderRadius:20,marginRight:20,marginVertical:5,justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity>
                                <Image  style={{ width: 20,height:20}} source = {require('../../assets/filter.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:0.91}}>
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

export default Menu
