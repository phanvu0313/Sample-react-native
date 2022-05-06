import { StyleSheet, Text, View,Dimensions,Image,Animated,TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import { useStoreActions } from 'easy-peasy';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const H_MAX_HEIGHT = 250;
const H_MIN_HEIGHT = 100;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;


const Profile = () => {
    const signOut = useStoreActions((action) => action.signOut);
    const scrollOffsetY = React.useRef(new Animated.Value(0)).current;
    
    const headerScrollHeight = scrollOffsetY.interpolate({
        inputRange: [0, H_SCROLL_DISTANCE],
        outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
        extrapolate: "clamp"
    });
    const heightOfText = scrollOffsetY.interpolate({
        inputRange: [0, 70],
        outputRange: [70, 0],
        extrapolate: "clamp"
    });
    const opacity = scrollOffsetY.interpolate({
        inputRange:[0,1],
        outputRange:[1, 0]
    })

    const FirstRoute = () => (
        
        <View style={{ flex: 1}}>
            <View style={{flex:0.125,marginHorizontal:20,marginVertical:10,borderRadius:30,borderWidth:1,borderColor:"#D3BBAA",justifyContent:'center',alignItems:'flex-start',paddingHorizontal:20}}>
                <Text>Vu Phan</Text>

            </View>
            <View style={{flex:0.125,marginHorizontal:20,marginVertical:10,borderRadius:30,borderWidth:1,borderColor:"#D3BBAA",justifyContent:'center',alignItems:'flex-start',paddingHorizontal:20}}>
                <Text>cuonght@gmail.com</Text>

            </View>
            <View style={{flex:0.125,marginHorizontal:20,marginVertical:10,borderRadius:30,borderWidth:1,borderColor:"#D3BBAA",justifyContent:'center',alignItems:'flex-start',paddingHorizontal:20}}>
                <Text>034 455 45443 </Text>

            </View>
            <View style={{flex:0.125,marginHorizontal:20,marginVertical:10,borderRadius:30,borderWidth:1,borderColor:"#D3BBAA",justifyContent:'center',alignItems:'flex-start',paddingHorizontal:20}}>
                <Text>••••••••</Text>

            </View>
            <View style={{flex:0.125,marginHorizontal:20,marginVertical:10,borderRadius:30,borderWidth:1,borderColor:"#D3BBAA",justifyContent:'center',alignItems:'flex-start',paddingHorizontal:20}}>
                <Text>004 Riley Street, 2050 Sydney</Text>
            </View>
            <View style={{flex:0.2,flexDirection:'row',marginHorizontal:20,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={signOut} style={{flex:0.3,marginRight:10,borderWidth:1,borderRadius:15,justifyContent:'center',alignItems:'center',height:40,borderColor:"#D3BBAA"}}>
                    <Icon style={{}} name="exit-outline" size={25} color="#3F2D20" ></Icon>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:0.7,marginLeft:10,borderWidth:1,borderRadius:15,justifyContent:'center',alignItems:'center',height:40,borderColor:"#D3BBAA",backgroundColor:'#84BD93'}}>
                    <Text style={{color:'white'}}>
                        Save Profile
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
      );
      
    const SecondRoute = () => (
        <View style={{ flex: 1,marginHorizontal:20,marginVertical:20}}>
            <View style={{flex:0.1,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>
                        My Card
                    </Text>
                </View>
                <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>
                    <Text style={{color:'#84BD93'}}>
                        ADD CARD
                    </Text>
                </View>
            </View>
            <View style={{flex:0.4, backgroundColor:'#F5D3BB',borderRadius:30,paddingHorizontal:40,paddingVertical:40}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Image  style={{ width:46,height:27}} source = {require('../../../assets/mc.png')}/>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <Text style={{fontWeight:'bold',fontSize:20}}>Master Card</Text>
                    </View>
                    
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <View>
                            <Text>
                                1322  3344  3443  2678
                            </Text>
                            <Text style={{fontWeight:'bold',fontSize:20}}>
                                Tony Nguyen
                            </Text>
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <View style={{justifyContent:'center',alignItems:'flex-end'}}>
                            <Text style={{fontWeight:'300'}}>
                                MONTH/ YEAR
                            </Text>
                            <Text style={{fontWeight:'500',fontSize:20}}>
                            04/05
                            </Text>
                        </View>
                    </View>
                    
                </View>
            </View>
            <View style={{flex:0.2,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:0.9}}>
                    <Text style={{fontSize:20,fontWeight:'bold',marginVertical:5}}>
                        My Paypal
                    </Text>
                    <Text style={{fontSize:20,fontWeight:'200'}}>
                        cuonght@gmail.com
                    </Text>
                </View>
                <View style={{flex:0.1}}>
                    <TouchableOpacity style={{borderWidth:1,paddingHorizontal:5,paddingVertical:5,borderRadius:10,borderColor:'#D3BBAA'}}>
                        <Icon style={{}} name="md-pencil-sharp" size={25} color="#3F2D20" ></Icon>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:0.2}}>
                <TouchableOpacity style={{flex:0.7,marginLeft:10,borderWidth:1,borderRadius:15,justifyContent:'center',alignItems:'center',height:40,borderColor:"#D3BBAA",backgroundColor:'#84BD93'}}>
                    <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>
                    Save Payment
                    </Text>
                </TouchableOpacity>

            </View>
            
        </View>
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
        { key: 'first', title: 'Account' },
        { key: 'second', title: 'Payment' },
        { key: 'third', title: 'Notification' },
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
    <View style={styles.container}>
        <View style={{flex:0.05,justifyContent:'center',alignItems:'center'}}>
            <View style={{backgroundColor:'#FFF5E0',width:100,height:5,borderRadius:10}} />
        </View>
        <View style={{flex:0.95}}>
            <ScrollView
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollOffsetY } } }
                  ],{useNativeDriver: false})}
                scrollEventThrottle={16}
                >
                 <View style={{ paddingTop: H_MAX_HEIGHT }}>
                    {/** Page contant goes here **/}

                    <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    style={{height:500}}
                    onIndexChange={setIndex}
                    renderTabBar={renderTabBar}
                    
                    />
                    <View style={{height:300}}/>
                </View>
                

            </ScrollView>
            <Animated.View
                style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: headerScrollHeight,
                width: "100%",
                overflow: "hidden",
                zIndex: 999,
                // STYLE
                backgroundColor:'#FFE2CD',
                padding: 10,
                justifyContent:'center',
                alignItems:'center'
                }}
                >
                    
                    <Image
                    source = {require('../../../assets/ava.png')}
                    style={{ flex: 1 }}
                    resizeMode={"contain"}
                    />
                    <Animated.View style={[{opacity:opacity}]}>
                        <TouchableOpacity style={{backgroundColor:'#84BD93',paddingHorizontal:5,paddingVertical:5,borderRadius:10,position:'absolute',bottom:0,right:'-20%'}}>
                            <Icon style={{}} name="camera-outline" size={25} color="white" ></Icon>
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={{alignItems:'center',height:heightOfText}}>
                        <Text style={{marginVertical:5,fontSize:20,fontWeight:'bold'}}>Welcome To</Text>
                        <Text style={{marginVertical:5,fontSize:30,fontWeight:'bold',color:'#EF8829'}}>Vu Phan</Text>
                    </Animated.View>
                    

            </Animated.View>
            
            

        </View>
      
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFE2CD',
        height:200
    },header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#03A9F4',
        overflow: 'hidden',
      },
      bar: {
        marginTop: 28,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 18,
      },
      scrollViewContent: {
        marginTop: 200,
      },
})