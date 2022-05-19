import React from 'react'
import { View, Text,StyleSheet,Image,Dimensions,Switch } from 'react-native';
import {ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { useStoreActions } from 'easy-peasy';
import { customColors } from '../../assets/Colors';

const windowWidth = Dimensions.get('window').width;

const DrawerContent = (props) => {
    const [isEnabledFing,setIsEnableFing] = React.useState(false)
    const [isEnabledNoti,setIsEnableNoti] = React.useState(true)

    const toggleSwitchFing=()=>{
        setIsEnableFing(!isEnabledFing)
    }
    const toggleSwitchNoti=()=>{
        setIsEnableNoti(!isEnabledNoti)
    }
    const signOut = useStoreActions((action) => action.signOut);
    return (
        <View style={styles.container}>
            <View style={{flex:0.05}} />
            <View style={{flex:0.2,backgroundColor:'#434dde'}}>
                <View style={{flex:0.3,alignItems:'flex-end',marginHorizontal:20,justifyContent:'flex-end'}} >
                    <TouchableOpacity>
                        <Icon name= {"md-share-social-outline"} size={30} color={customColors.white}></Icon>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.7,marginHorizontal:20}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1/3,alignItems:'center'}} >
                            <View style={{width:100,height:100,borderRadius:100,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                                <Image style={{width:70,height:70,resizeMode:'cover'}} source={require('../../assets/ava.png')} />
                            </View>
                        </View>
                        <View style={{flex:2/3,justifyContent:'center',marginBottom:20}} >
                            <Text style={{fontWeight:'bold',fontSize:25,marginBottom:5,color:customColors.white}}>Vuphan</Text>
                            <Text style={{fontWeight:'400',fontSize:18,color:customColors.white}}>phanvanvu@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flex:0.5}}>
                <View style={{flex:1,marginHorizontal:20,marginVertical:20}}>
                    <ScrollView>
                        <TouchableOpacity >
                            <View style={{height:50,width:windowWidth,marginHorizontal:10,flexDirection:'row'}}>
                                <View style={{flex:0.15,justifyContent:'center'}}>
                                    <Icon name= {"ios-scan"} size={30} color={customColors.white}></Icon>
                                </View>
                                <View style={{flex:0.85,justifyContent:'center'}}>
                                    <Text style={{fontSize:19,fontWeight:'bold',color:customColors.white}}>My QR-Code </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={{height:50,width:windowWidth,marginHorizontal:10,flexDirection:'row'}}>
                                <View style={{flex:0.15,justifyContent:'center'}}>
                                    <Icon name= {"ios-browsers"} size={30} color={customColors.white}></Icon>
                                </View>
                                <View style={{flex:0.85,justifyContent:'center'}}>
                                    <Text style={{fontSize:19,fontWeight:'bold',color:customColors.white}}>My Link Card</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={{height:50,width:windowWidth,marginHorizontal:10,flexDirection:'row'}}>
                                <View style={{flex:0.15,justifyContent:'center'}}>
                                    <Icon name= {"ios-language"} size={30} color={customColors.white}></Icon>
                                </View>
                                <View style={{flex:0.85,justifyContent:'center'}}>
                                    <Text style={{fontSize:19,fontWeight:'bold',color:customColors.white}}>Language</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={{height:50,width:windowWidth,marginHorizontal:10,flexDirection:'row'}}>
                                <View style={{flex:0.15,justifyContent:'center'}}>
                                    <Icon name= {"md-finger-print"} size={30} color={customColors.white}></Icon>
                                </View>
                                <View style={{flex:0.55,justifyContent:'center'}}>
                                    <Text style={{fontSize:19,fontWeight:'bold',color:customColors.white}}>Biometric</Text>
                                    
                                </View>
                                <View style={{flex:0.3,justifyContent:'center'}}>
                                    <Switch
                                        trackColor={{ false: "red", true: customColors.primary_2 }}
                                        thumbColor={customColors.white}
                                        ios_backgroundColor="#434dde"
                                        onValueChange={toggleSwitchFing}
                                        value={isEnabledFing}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={{height:50,width:windowWidth,marginHorizontal:10,flexDirection:'row'}}>
                                <View style={{flex:0.15,justifyContent:'center'}}>
                                    <Icon name= {"notifications-outline"} size={30} color={customColors.white}></Icon>
                                </View>
                                <View style={{flex:0.55,justifyContent:'center'}}>
                                    <Text style={{fontSize:19,fontWeight:'bold',color:customColors.white}}>Notifications</Text>
                                </View>
                                <View style={{flex:0.3,justifyContent:'center'}}>
                                    <Switch
                                        trackColor={{ false: "red", true: customColors.primary_2 }}
                                        thumbColor={customColors.white}
                                        ios_backgroundColor="#434dde"
                                        onValueChange={toggleSwitchNoti}
                                        value={isEnabledNoti}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={{height:50,width:windowWidth,marginHorizontal:10,flexDirection:'row'}}>
                                <View style={{flex:0.15,justifyContent:'center'}}>
                                    <Icon name= {"ios-settings-outline"} size={30} color={customColors.white}></Icon>
                                </View>
                                <View style={{flex:0.85,justifyContent:'center'}}>
                                    <Text style={{fontSize:19,fontWeight:'bold',color:customColors.white}}>All Setting</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={{height:50,width:windowWidth,marginHorizontal:10,flexDirection:'row'}}>
                                <View style={{flex:0.15,justifyContent:'center'}}>
                                    <Icon name= {"ios-shield-outline"} size={30} color={customColors.white}></Icon>
                                </View>
                                <View style={{flex:0.85,justifyContent:'center'}}>
                                    <Text style={{fontSize:19,fontWeight:'bold',color:customColors.white}}>Blocked Contact</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                    

                </View>
            </View>
            <View style={{flex:0.25}}>
                <View style={{flex:0.1}}>
                    <View style={{backgroundColor:customColors.white,width:'75%',height:1,marginLeft:10,borderRadius:10}}/>
                </View>
                <View style={{flex:0.9,marginHorizontal:20,}}>
                    <View style={{paddingVertical:10}}>
                        <TouchableOpacity>
                            <Text style={{color:customColors.white,fontSize:18}}>Private policy</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingVertical:10}}>
                        <TouchableOpacity>
                            <Text style={{color:customColors.white,fontSize:18}}>Get help</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingVertical:10}}>
                        <TouchableOpacity onPress={signOut}>
                            <Text style={{color:customColors.white,fontSize:18}}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                

            </View>

        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:customColors.primary
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
        backgroundColor:'#3076e6', 
        marginRight:20,
        marginVertical:40,
        borderTopRightRadius:40,
        borderBottomRightRadius:40,
        opacity:1,
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