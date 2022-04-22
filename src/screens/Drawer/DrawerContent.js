import React from 'react'
import { View, Text,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { useStoreActions } from 'easy-peasy';
import LottieView from 'lottie-react-native';

const DrawerContent = (props) => {

    const signOut = useStoreActions((action) => action.signOut);
    return (
        <>
        <View style={[{flex:1,backgroundColor:'red',opacity:1,}]}>
            <View style={{flex:0.75,backgroundColor:'#fa7e45'}} />
            <View style={{flex:2,backgroundColor:'#3076e6'}} />
            <View style={{flex:0.25,backgroundColor:'yellow'}} />
        </View>
        <View style={[styles.container,StyleSheet.absoluteFill]}>
           <View style={{flex:0.75,backgroundColor:'#3076e6',borderBottomLeftRadius:70}}>
                <LottieView source={require('../../assets/Avatar.json')}  autoPlay loop  />
           </View>


           <View style={{flex:2,flexDirection:'row'}}>
            <LinearGradient colors={['#fa7e45', '#fa7e45', '#fe636a']} style={styles.linearGradient}>
                <View style={styles.mainView2}>
                </View>
                <View style={[styles.mainView,StyleSheet.absoluteFill,{paddingTop:150}]}>
                    <TouchableOpacity style={styles.button}>
                        <Icon style={{flex:0.2}} name="earth-outline" size={30} color="#0D5C75" ></Icon>
                        <Text style={{flex:0.5,fontSize:20,fontWeight:'bold',color:'#0D5C75'}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon style={{flex:0.2}} name="gift-outline" size={30} color="#0D5C75" ></Icon>
                        <Text style={{flex:0.5,fontSize:20,fontWeight:'bold',color:'#0D5C75'}}>Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon style={{flex:0.2}} name="headset-outline" size={30} color="#0D5C75" ></Icon>
                        <Text style={{flex:0.5,fontSize:20,fontWeight:'bold',color:'#0D5C75'}}>More</Text>
                    </TouchableOpacity>
                </View>   
            </LinearGradient>
            <View style={{flex:0.05,backgroundColor:'#3076e6'}}/>
           </View>
           <View style={{flex:0.25,backgroundColor:'#fe636a',flexDirection:'row'}}>
               <View style={{flex:1}}>
                <TouchableOpacity onPress={signOut} style={[styles.logOut]}>
                        <Icon style={{flex:0.2}} name="exit" size={30} color="white" ></Icon>
                        <Text style={{flex:0.5,fontSize:18,fontWeight:'bold',color:'white'}}>Log out</Text>
                </TouchableOpacity>

               </View>
               
               <View style={{flex:0.05,backgroundColor:'#3076e6'}}/>
           </View>
        </View>
        
        </>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'transparent',
    },
    logOut:{
        flexDirection:'row', 
        backgroundColor:'#199FB1',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        borderColor:'white',
        borderWidth:2,
        marginHorizontal:40,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

    },
    button:{
        flexDirection:'row', 
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'black',
        paddingVertical:5,
        borderWidth:0.5,
        marginTop:20,
        marginRight:20,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        

    },
    mainView:{
        flex:1, 
        marginRight:20,
        //backgroundColor:'white',
        //justifyContent:'center',
        //alignItems:'center',
        //marginVertical:40,
        borderTopRightRadius:40,
        borderBottomRightRadius:40,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

    },
    mainView2:{
        flex:1,
        backgroundColor:'#a63dcc', 
        marginRight:20,
        marginVertical:40,
        borderTopRightRadius:40,
        borderBottomRightRadius:40,
        opacity:0.3,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

    },
    linearGradient: {
        flex: 0.95,
        borderTopRightRadius:40,
        //justifyContent:'center',
        //alignContent:'center',
        
      },
  });