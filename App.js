import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  StatusBar, Settings, TouchableOpacity
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
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import FeedScreen from './src/screens/FeedScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import DetailsScreen from './src/screens/Feed/DetailsScreen';
import Moon from './src/screens/Feed/Moon';

/** STATE MANAGEMENT */
import STORE from './src/Store/model';
const store = createStore(STORE);

const SettingStack = createStackNavigator();
const SettingsStackScreen = () => {
  return (
    <SettingStack.Navigator>
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
            headerLeft : () => {
              return (
                <TouchableOpacity 
                  style={{
                    paddingHorizontal: 10
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
    </FeedStack.Navigator>
  )
}

const TabStack = createBottomTabNavigator();
const TabsScreen = () => {
  return (
    <TabStack.Navigator screenOptions={{
      headerShown: false,
      
    }}>
      <TabStack.Screen
          name={"FeedStack"}
          component={FeedStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
            <Ionicons name="logo-sass" color={color} size={26} />
            ),
        }}
      />
      <TabStack.Screen
          name={"Settings"}
          component={SettingsStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
            <Ionicons name="logo-sass" color={'red'} size={26} />
            ),
        }}
      />
      <TabStack.Screen
          name={"Profile"}
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
            <Ionicons name="logo-sass" color={'yellow'} size={26} />
            ),
        }}
      />
    </TabStack.Navigator>
  )
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
          name={"Profile"}
          component={ProfileScreen}
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
        component={WelcomeScreen}
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
  const loggin = useStoreActions(action => action.loggin)
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

  return (
    <RootStack.Navigator 
    screenOptions={{
      headerShown: false,
      
    }}
    {...props}
    >
      {
        isloggedin ? (
          <RootStack.Screen
              name={"Dashboard"}
              component={DrawerStackScreen}
              options={{
                title: "Feed"
              }}
          />
        ) : (
          <RootStack.Screen
            name={"Welcome"}
            component={AuthenticationStack}
            options={{
              animationEnabled: false
            }}
          />
        )
      }
    
  </RootStack.Navigator>
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
