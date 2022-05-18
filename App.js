import 'react-native-gesture-handler';
import React, { useState, useEffect,Image } from 'react';
import {
  StatusBar, Settings, TouchableOpacity,Dimensions,StyleSheet,View,Animated,Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, StoreProvider, useStoreState, useStoreActions } from 'easy-peasy';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

/** Screens */
import Splash from './src/screens/Splash'
import DrawerContent from './src/screens/Drawer/DrawerContent'
import WelcomeScreen from './src/screens/WelcomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import FeedScreen from './src/screens/FeedScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import DetailsScreen from './src/screens/Feed/DetailsScreen';
import SingleScreen from './src/screens/SingleScreen'
import Moon from './src/screens/Feed/Moon';
import Cloudy from './src/screens/Feed/Cloudy';
import DiscountStack from './src/screens/StackScreens/DiscountStack';
import HomeStack from './src/screens/StackScreens/HomeStack';
import WalletStack from './src/screens/StackScreens/WalletStack';
import CalendarStack from './src/screens/StackScreens/CalendarStack';
import LinearGradient from 'react-native-linear-gradient';
/** STATE MANAGEMENT */
import STORE from './src/Store/model';
import SplashScreen from './src/screens/Splash';
import Bottombar from './src/components/common/Bottom/Bottombar';
import { customColors } from './src/assets/Colors';
const store = createStore(STORE);
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const SettingStack = createStackNavigator();
const SettingsStackScreen = () => {
  return (
    <SettingStack.Navigator screenOptions={{headerShown: false}}>
      <SettingStack.Screen
          name="Setting"
          
          component={SettingsScreen}
      />
    </SettingStack.Navigator>
  )
}

const FeedStack = createStackNavigator();
const FeedStackScreen = ({ navigation }) => {
  const signOut = useStoreActions((action) => action.signOut);
  const handleSignOut = () => {
    signOut();
  }
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
          name={"Feed"}
          component={FeedScreen}
          options={{
            title: "Hello",
            headerShadowVisible:false,
            headerLeft : () => {
              return (
                <TouchableOpacity 
                  style={{
                    paddingHorizontal: 10,
                  }}
                  onPress={() => navigation.toggleDrawer()}
                >
                  <Ionicons
                      name="ios-menu-outline"
                      size={30}
                      color={"#000"}
                  />
                </TouchableOpacity>
              )
            },
            // headerRight : () => {
            //   return (
            //     <TouchableOpacity 
            //       style={{
            //         paddingHorizontal: 10
            //       }}
            //       onPress={() => handleSignOut()}
            //     >
            //       <Ionicons
            //           name="logo-angular"
            //           size={30}
            //           color={"#000"}
            //       />
            //     </TouchableOpacity>
            //   )
            // },
          }}
      />
      <FeedStack.Screen
          name={"Details"}
          component={DetailsScreen}
      />
      <FeedStack.Screen
          name={"Moon"}
          component={Moon}
      />
      <FeedStack.Screen
          name={"Cloudy"}
          component={Cloudy}
      />
    </FeedStack.Navigator>
  )
}
const ImageHeader  = props => {
  return (
    <View style={{flex:1,backgroundColor:customColors.white}}>
      <View style={{flex:1}}/>
        <View style={{flex:1,flexDirection:'row',marginHorizontal:20}}>

          {
            props.his == null ? 
            <Text style={{fontSize:40,color:customColors.primary,fontWeight:'bold'}}>
              Pay<Text style={{color:customColors.primary_2,fontWeight:'bold'}}>ou</Text>
            </Text>
            : null
          }

        </View>

    </View>
  )
}

const TabStack = createBottomTabNavigator();
const TabsScreen = ({navigation}) => {
  const tabOffsetValue = React.useRef(new Animated.Value(getWith())).current;
  const signOut = useStoreActions((action) => action.signOut);
  return (
    <>
    <TabStack.Navigator screenOptions={{
      
      tabBarShowLabel:false,
      tabBarStyle: {...styles.box},
      
      }}>
      <TabStack.Screen
          name={"Hoo"}
          component={HomeStack}
          options={{
            title:'',
            headerBackground:()=><ImageHeader/>,
            headerRight: () => (
              <View style={{width:windowWidth/3,paddingHorizontal:10,paddingVertical:10}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{paddingHorizontal:5}}>
                    <TouchableOpacity onPress={signOut}>
                    <Ionicons  name = {"person-circle-outline"} size={25} color={customColors.primary} />
                    </TouchableOpacity>
                  </View>
                  <View style={{paddingHorizontal:5}}>
                    <TouchableOpacity>
                    <Ionicons  name = {"notifications-outline"} size={25} color={customColors.primary} />
                    </TouchableOpacity>
                  </View>
                  <View style={{paddingHorizontal:5}}>
                    <TouchableOpacity>
                    <Ionicons  name = {"medal-outline"} size={25} color={customColors.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              
              
            ),
            
            tabBarLabel: ({focused})=> <Image style={{width:155,height:40,resizeMode:'cover'}} source={require('./src/assets/Logo.png')}/>,
            tabBarIcon: ({ focused }) => (
              <View style={{position:'absolute', top:'40%'}}>
                   <Ionicons name="home" color={focused ? customColors.primary_2 : customColors.gray} size={focused ? 26 : 26} />
              </View>
            ),
        }} listeners={({navigation,route})=>({
          tabPress: e => {
            Animated.spring(tabOffsetValue,{
              toValue:23,
              useNativeDriver:true,
            }).start()
          }
        })}
      />
      <TabStack.Screen
          name={"Wallet"}
          component={WalletStack}
          options={{
            title:'',
            headerBackground:()=><ImageHeader/>,
            headerRight: () => (
              <View style={{width:windowWidth/3,paddingHorizontal:10,paddingVertical:10}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{paddingHorizontal:5}}>
                    <TouchableOpacity>
                    <Ionicons  name = {"person-circle-outline"} size={25} color={customColors.primary} />
                    </TouchableOpacity>
                  </View>
                  <View style={{paddingHorizontal:5}}>
                    <TouchableOpacity>
                    <Ionicons  name = {"notifications-outline"} size={25} color={customColors.primary} />
                    </TouchableOpacity>
                  </View>
                  <View style={{paddingHorizontal:5}}>
                    <TouchableOpacity>
                    <Ionicons  name = {"medal-outline"} size={25} color={customColors.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ),
            
            tabBarLabel: ({focused})=> <Image style={{width:155,height:40,resizeMode:'cover'}} source={require('./src/assets/Logo.png')}/>,
            tabBarIcon: ({ focused }) => (
              <View style={{position:'absolute', top:'40%'}}>
                   <Ionicons name="wallet" color={focused ? customColors.primary_2 : customColors.gray} size={focused ? 26 : 26} />
              </View>
            ),
        }} listeners={({navigation,route})=>({
          tabPress: e => {
            Animated.spring(tabOffsetValue,{
              toValue:getWith()*3.7,
              useNativeDriver:true,
            }).start()

          }
        })}
      />
      <TabStack.Screen
          name={"Disco"}
          component={DiscountStack}
          options={{
            title:'',
            headerBackground:()=><ImageHeader/>,
            headerRight: () => (
              <View style={{width:windowWidth/3,paddingHorizontal:10,paddingVertical:10}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{paddingHorizontal:5}}>
                    <TouchableOpacity>
                    <Ionicons  name = {"person-circle-outline"} size={25} color={customColors.primary} />
                    </TouchableOpacity>
                  </View>
                  <View style={{paddingHorizontal:5}}>
                    <TouchableOpacity>
                    <Ionicons  name = {"notifications-outline"} size={25} color={customColors.primary} />
                    </TouchableOpacity>
                  </View>
                  <View style={{paddingHorizontal:5}}>
                    <TouchableOpacity>
                    <Ionicons  name = {"medal-outline"} size={25} color={customColors.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              
              
            ),
            
            tabBarLabel: ({focused})=> <Image style={{width:155,height:40,resizeMode:'cover'}} source={require('./src/assets/Logo.png')}/>,
            tabBarIcon: ({ focused }) => (
              <View style={{position:'absolute', top:'40%'}}>
                   <Ionicons name="ios-logo-usd" color={focused ? customColors.primary_2 : customColors.gray} size={focused ? 26 : 26} />
              </View>
            ),
        }} listeners={({navigation,route})=>({
          tabPress: e => {
            Animated.spring(tabOffsetValue,{
              toValue:getWith()*6.5,
              useNativeDriver:true,
            }).start()

          }
        })}
      />
      <TabStack.Screen
          name={"Clenda"}
          component={CalendarStack}
          options={{
            title:'History',
            headerBackground:()=><ImageHeader his={true} />,
            headerRight: () => (
              <View style={{width:windowWidth/6,paddingHorizontal:10,paddingVertical:10}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{paddingHorizontal:5}}>
                    <TouchableOpacity>
                    <Ionicons  name = {"filter"} size={30} color={customColors.text } />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              
              
            ),
            
            tabBarLabel: ({focused})=> <Image style={{width:155,height:40,resizeMode:'cover'}} source={require('./src/assets/Logo.png')}/>,
            tabBarIcon: ({ focused }) => (
              <View style={{position:'absolute', top:'40%'}}>
                   <Ionicons name="ios-calendar" color={focused ? customColors.primary_2 : customColors.gray} size={focused ? 26 : 26} />
              </View>
            ),
        }}listeners={({navigation,route})=>({
          tabPress: e => {
            Animated.spring(tabOffsetValue,{
              toValue:getWith()*9.4,
              useNativeDriver:true,

            }).start()

          }
        })}
      />
      
    </TabStack.Navigator>
    <Animated.View style={{
      flexDirection:'row',
      height:4,
      width:(windowWidth-windowWidth/3.5)/12,
      left:17,
      backgroundColor:customColors.primary_2,
      position:'absolute',
      bottom: windowHeight/11-60,
      borderRadius:150,
      transform:[
        {translateX:tabOffsetValue}
      ]
    }}>
      
    </Animated.View>
    <View style={styles.QRstyle}>
        <Bottombar onPress={()=>navigation.navigate("QQR")}/>
    </View>
    </>
  )
  function getWith(){
    let width = windowWidth;
    width = width - width/3.5 - 20
    return width / 12;
  }
}


const DrawerStack = createDrawerNavigator();
const DrawerStackScreen = () => {
  return (
    <DrawerStack.Navigator drawerContent={props => <DrawerContent {...props} />} screenOptions={{
        drawerType: 'front',
        headerShown: false,
      }} >
      <DrawerStack.Screen
          name={"Home"}
          component={TabsScreen}
      />
      <DrawerStack.Screen
          name={"Home_2"}
          component={SingleScreen}
      />
    </DrawerStack.Navigator>
  )
}
const QRStack = createStackNavigator();
const PopTop =()=>{
  
}
const QRStackScreen = () => {
  return (
    <QRStack.Navigator screenOptions={{
      headerShown: false,
    }} >
      <QRStack.Screen
          name={"Home"}
          component={TabsScreen}
      />
      <QRStack.Screen
          name={"QQR"}
          component={SingleScreen}
          options={{
            headerBackground:()=><View style={{backgroundColor:customColors.white,flex:1,}} />,
            headerLeft: (props) =>(
              <View style={{marginLeft:20}}>
                <TouchableOpacity onPress={()=>props.onPress()}>
                  <Ionicons  name = {"ios-arrow-back"} size={30} color={customColors.primary} />
                </TouchableOpacity>
              </View>
            ),
            headerShown:true,
            title:'Scan & Pay',
            headerTitleStyle:{
              fontWeight:'bold',
              fontSize:30,
              color:customColors.primary,
              
            }}}
      />
    </QRStack.Navigator>
  )
}

const AuthStack = createStackNavigator();
const AuthenticationStack = (props) => {
  console.log(props)
  return (
    <AuthStack.Navigator screenOptions={{
      headerShown: false}}
      {...props}
    >
      <AuthStack.Screen
        name={"Authentication"}
        component={SplashScreen}
        options={{
          title: "Welcome"
        }}
    />
      <AuthStack.Screen options={{
        presentation: 'transparentModal'
      }}
        name={"SignIn"}
        component={LoginScreen}
      />
      <AuthStack.Screen
          name={"SignUp"}
          component={SignUpScreen}
      />
    </AuthStack.Navigator>
    
  )
}

const RootStack = createStackNavigator();
const RootStackScreen = (props) => {
    const isloggedin = useStoreState(state => state.isLoggedin);
    const firstTime = useStoreActions(action => action.firstTime)
    const isFirstime = useStoreState(state => state.isFirstime);
    const loggin = useStoreActions(action => action.loggin)
    const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  

    const checkToken = async () => {
      try{
        const token = await AsyncStorage.getItem("AUTH_TOKEN");
        if(token){
          loggin(true);
        }
      }catch(error){
        console.log(error)
      }
    }
    const checkFirst = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
      
    }
    useEffect(() => {
      checkToken()
      checkFirst()
      //clearAppData()
    }, []);
    
    const clearAppData = async function() {
      try {
          const keys = await AsyncStorage.getAllKeys();
          await AsyncStorage.multiRemove(keys);
      } catch (error) {
          console.error('Error clearing app data.');
      }
    }

    return (
      isAppFirstLaunched != null && (
      <RootStack.Navigator 
      screenOptions={{
        headerShown: false,
        
      }}
      {...props}
      >
        {isAppFirstLaunched  && (
            <RootStack.Screen name={"Welcome"}component={WelcomeScreen}
            options={{
              title: "wel"
            }}
          />
          )}
          <RootStack.Screen name={"Well"} component={Well}
            options={{
              title: "main"
            }}
          />
        
    </RootStack.Navigator>
      )
    )
  }

const WellScreen = createStackNavigator();
const Well = (props) => {
    const isloggedin = useStoreState(state => state.isLoggedin);
    const firstTime = useStoreActions(action => action.firstTime)
    const isFirstime = useStoreState(state => state.isFirstime);
    const loggin = useStoreActions(action => action.loggin)
    const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  

    const checkToken = async () => {
      try{
        const token = await AsyncStorage.getItem("AUTH_TOKEN");
        if(token){
          loggin(true);
        }
      }catch(error){
        console.log(error)
      }
    }
    
    useEffect(() => {
      checkToken()
    }, []);
    
    const clearAppData = async function() {
      try {
          const keys = await AsyncStorage.getAllKeys();
          await AsyncStorage.multiRemove(keys);
      } catch (error) {
          console.error('Error clearing app data.');
      }
    }

    return (
      
      <WellScreen.Navigator 
      screenOptions={{
        headerShown: false,
      }}
      {...props}
      >
      {
        1 ? (
            <WellScreen.Screen
                name={"Dashboard"}
                component={QRStackScreen}
                options={{
                  title: "Feed"
                }}
            />
          ) : (
            <WellScreen.Screen
              name={"SplashScreen"}
              component={AuthenticationStack}
              options={{
                animationEnabled: false
              }}
            />
          )
      }
    </WellScreen.Navigator>
    )
  }

const App = () => {
  return (
    <SafeAreaProvider>
    <StoreProvider store={store}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <RootStackScreen />
      </NavigationContainer>
    </StoreProvider>
    </SafeAreaProvider>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    position:'absolute',
    height:windowHeight/11,
    borderTopWidth:0,
    borderRadius:10,
    marginRight:windowWidth/3.5,
    paddingHorizontal:20,
    borderBottomRightRadius:0,
    shadowColor: "#000",
    shadowOffset: {
      width: -10,
      height: 0,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  QRstyle:{
    bottom:0,
    right:0,
    width:windowWidth/3.5,
    height:windowHeight/11,
    alignItems:'flex-start',
    position:'absolute',
    flexDirection:'row'
    
  },
  lable:{
    fontSize:12,
    top:'20%',
    fontWeight:'500',
    color:'white',

  }
});

