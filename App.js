import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
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
import DrawerContent from './src/screens/Drawer/DrawerContent'
import WelcomeScreen from './src/screens/WelcomeScreen';
import SplashScreen from './src/screens/Splash';
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
import LinearGradient from 'react-native-linear-gradient';
/** STATE MANAGEMENT */
import STORE from './src/Store/model';
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

const TabStack = createBottomTabNavigator();
const TabsScreen = () => {
  const tabOffsetValue = React.useRef(new Animated.Value(getWith())).current;
  
  return (
    <>
    <TabStack.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel:false,
      tabBarStyle: {...styles.box}
      
      }}>
      <TabStack.Screen
          name={"FeedStack"}
          component={FeedStackScreen}
          options={{
            tabBarLabel: ({focused})=> <Text style={[styles.lable, ]}>Home</Text>,
            tabBarIcon: ({ focused }) => (
              <View style={{position:'absolute', top:'40%'}}>
                <Ionicons name="pizza" color={focused ? '#FF4E50' : 'gray'} size={focused ? 28 : 26}/>             
              </View>
           
            ),
        }} listeners={({navigation,route})=>({
          tabPress: e => {
            Animated.spring(tabOffsetValue,{
              toValue:getWith()*1,
              useNativeDriver:true,
            }).start()

          }
        })}
      />
      <TabStack.Screen
          name={"Weather"}
          component={SettingsStackScreen}
          options={{
            tabBarLabel: ({focused})=> <Text style={[styles.lable, ]}>Weather</Text>,
            tabBarIcon: ({ focused }) => (
              <View style={{position:'absolute', top:'50%'}}>
                   <Ionicons name="rainy" color={focused ? '#00d2ff' : 'gray'} size={focused ? 28 : 26} />
              </View>
            
            ),
        }}listeners={({navigation,route})=>({
          tabPress: e => {
            Animated.spring(tabOffsetValue,{
              toValue:getWith()*7,
              useNativeDriver:true,

            }).start()

          }
        })}
      />
      <TabStack.Screen
          name={"Profile"}
          component={ProfileScreen}
          options={{
            tabBarLabel: ({focused})=> <Text style={[styles.lable, ]}>Pizza</Text>,
            tabBarIcon: ({ focused }) => (
              <View style={{position:'absolute', top:'50%'}}>
                   <Ionicons name="ios-settings" color={focused ? '#fff' : 'gray'} size={focused ? 28 : 26} />
              </View>
            
            ),
        }}listeners={({navigation,route})=>({
          tabPress: e => {
            Animated.spring(tabOffsetValue,{
              toValue:getWith() * 13,
              useNativeDriver:true
            }).start()

          }
        })}
      />
    </TabStack.Navigator>
    <Animated.View style={{
      flexDirection:'row',
      height:4,
      width:((windowWidth-60)/18)*4,
      left:20,
      backgroundColor:'white',
      position:'absolute',
      bottom:20 + windowHeight/11,
      borderRadius:150,
      transform:[
        {translateX:tabOffsetValue}
      ]
    }}>
      
    </Animated.View>
    </>
  )
  function getWith(){
    let width = Dimensions.get('window').width;
    width = width - 40
    return width / 18;
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
          title: "SplashScreen"
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
        console.log('first');
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
      
    }
    useEffect(() => {
      console.log(props.abc)
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
          isloggedin ? (
            <WellScreen.Screen
                name={"Dashboard"}
                component={DrawerStackScreen}
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
    const [abc, setAbc] = React.useState('hihihoho');
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
    justifyContent: 'center'
  },
  box: {
    position:'absolute',
    bottom:25,
    height:windowHeight/11,
    marginHorizontal:20,
    borderRadius:17,
    backgroundColor:'black',
    shadowRadius:10,
    shadowColor:'#000',
    shadowOpacity:0.5,
    shadowOffset:{height:10},
    borderColor:'#fff',
    borderWidth:4,
    borderBottomWidth:0
  },
  lable:{
    fontSize:12,
    top:'20%',
    fontWeight:'500',
    color:'white',

  }
});

