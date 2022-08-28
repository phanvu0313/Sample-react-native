import 'react-native-gesture-handler';
import React, { useState, useEffect,Image } from 'react';
import {StatusBar, Settings, TouchableOpacity,Dimensions,StyleSheet,View,Animated}  from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, StoreProvider, useStoreState, useStoreActions } from 'easy-peasy';
import { createDrawerNavigator,
  useDrawerProgress,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useDrawerStatus, } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
/** Screens */
import Splash from './src/screens/Splash'
import DrawerContent from './src/screens/Drawer/DrawerContent'
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import FeedScreen from './src/screens/FeedScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import DetailsScreen from './src/screens/Feed/DetailsScreen';
import SingleScreen from './src/screens/SingleScreen'
import Moon from './src/screens/Feed/Moon';
import Cloudy from './src/screens/Feed/Cloudy';
import HomeStack from './src/screens/StackScreens/HomeStack';

import LinearGradient from 'react-native-linear-gradient';
/** STATE MANAGEMENT */
import STORE from './src/Store/model';
import SplashScreen from './src/screens/Splash';
import Bottombar from './src/components/common/Bottom/Bottombar';
import { customColors } from './src/assets/Colors';
import SearchStack from './src/screens/StackScreens/SearchStack';
import NotificationStack from './src/screens/StackScreens/NotificationStack';
import ProfileStack from './src/screens/StackScreens/ProfileStack';
import ProfileScreen from './src/screens/ProfileScreen';
import { TouchableWithoutFeedback,TouchableHighlight} from 'react-native-gesture-handler';
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
const tabbar=(iconName)=>
  ({focused})=>(
    <TouchableHighlight>
      <Ionicons name= {iconName} size={25} color={focused ? 'red' : '#ddd'}></Ionicons>
    </TouchableHighlight>
  )


const TabStack = createBottomTabNavigator();
const TabsScreen = ({navigation},props) => {
 
  const tabOffsetValue = React.useRef(new Animated.Value(0)).current;
  const signOut = useStoreActions((action) => action.signOut);

  return (
    <Animated.View style={[{backgroundColor:'red',flex:1}]}>
    <TabStack.Navigator
      tabBarPosition='bottom'
      screenOptions={{
        unmountOnBlur:true,
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle: {...styles.box},
        }} {...props}>
      <TabStack.Screen
          name={"Hoo"}
          id={1}
          component={HomeStack}
          options={{ tabBarIcon: tabbar("ios-skull") }}
          
      />
      <TabStack.Screen
          name={"Tìm Kiếm"}
          component={SearchStack}
          options={{ tabBarIcon: tabbar('radio-button-on') }}
          
      />
      <TabStack.Screen
          name={"Noti"}
          component={NotificationStack}
          options={{ tabBarIcon: tabbar("ios-paw")}}
          
      />
      <TabStack.Screen
          name={"Pro"}
          component={ProfileStack}
          options={{  tabBarIcon: tabbar('ios-settings')}}
          
      />
      
    </TabStack.Navigator>
    
    </Animated.View>
  )
}


const DrawerStack = createDrawerNavigator();
const DrawerStackScreen = () => {
  return (
    <DrawerStack.Navigator drawerContent={props =>  <DrawerContent {...props} />} screenOptions={{
        drawerType: 'front',
        overlayColor:null,
        headerShown: false,
        drawerStyle:{
          width:windowWidth*0.66
        }
      }}>
      <DrawerStack.Screen 
          name={"Home"}
          component={TabsScreen}
      />
      <DrawerStack.Screen 
      animationEnabled
          name={"Sett"}
          component={SettingsScreen}
      />
    </DrawerStack.Navigator>
  )
}
const QRStack = createStackNavigator();

const QRStackScreen = ()=> {
  return (
    <QRStack.Navigator screenOptions={{
      headerShown: false,
    }} >
      <QRStack.Screen
          name={"Srack"}
          component={DrawerStackScreen }
      />
      <QRStack.Screen
          name={"Profile"}
          component={ProfileScreen }
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
  //console.log('duna',props)
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
        1? (
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
    height:windowHeight/10,
    backgroundColor:customColors.black,
    borderTopWidth:0,
    
  },
  bottomIcon:{
    position:'absolute', 
    top:'15%',
    paddingVertical:15,
    paddingHorizontal:15,
    borderRadius:100
  },
  lable:{
    fontSize:12,
    top:'20%',
    fontWeight:'500',
    color:'white',

  }
});

