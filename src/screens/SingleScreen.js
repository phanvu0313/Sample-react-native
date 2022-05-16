import React from 'react'
import { View, Text,StyleSheet,Dimensions,Image } from 'react-native'
import { ScrollView, TouchableOpacity,Switch } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { customColors } from '../assets/Colors';
import QR from '../components/CameraQR/QR'
import ImagePicker from 'react-native-image-crop-picker';
import RNQRGenerator from 'rn-qr-generator';


const SingleScreen = ({navigation}) => {
    const [isFlashOn,setIsFlashOn] = React.useState(true)
    const [qrCode,setQrCode] = React.useState('')
    const [image,setImage] = React.useState('')
    

    const openImage=()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            includeBase64:true,
          }).then(image => {
            setImage(image)
            codeDetect(image)
          });
    }
    const codeDetect=(image)=>{
        RNQRGenerator.detect({
            uri: image.path,
            base64: image.data,
            })
            .then(response => {
                console.log('okok',response)
                const { values } = response;
                setQrCode(values)
            })
            .catch(error => console.log('Cannot detect QR code in image', error));

    }
    

     

    
    const PressFlash = ()=>{
        setIsFlashOn(!isFlashOn)
    }
return (
    <View style={styles.container}>
        <View style={{flex:1}}>
            <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:22}}>Scan QR Code</Text>
            </View>
            <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                <View style={{borderWidth:10,borderRadius:20,borderColor:customColors.primary,width:300,height:300}}>
                    <QR isFlashOn={isFlashOn} setQrCode={setQrCode} ></QR>
                </View>
                <View style={styles.middleLine}/>
            </View>
            <View style={{flex:0.3}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    
                    <Text style={{fontWeight:'bold',color:'#8F92A1'}}>QR :{qrCode}</Text>
                </View>
                <View style={{flex:1,flexDirection:"row"}}>
                    <View style={{flex:1,alignItems:'flex-end',paddingHorizontal:30}}>
                        <TouchableOpacity onPress={()=>openImage()}>
                            <Icon  name = {"ios-image-outline"} size={40} color={customColors.primary} ></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,alignItems:'flex-start',paddingHorizontal:30}}>
                        <TouchableOpacity onPress={()=>PressFlash()}>
                            <Icon  name = {isFlashOn ? "md-flash-outline" : "md-flash" } size={40} color={customColors.primary} ></Icon>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold'}}>Others</Text>

                </View>

            </View>
            <View style={styles.bottomView}>
                <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:150,height:5,borderRadius:100,backgroundColor:'black'}} />
                </View>
                <View style={{flex:0.8,flexDirection:'row'}}>
                    <View style={{flex:1/4,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity style={{}}>
                            <View style={{width:70,height:70,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:20,backgroundColor:'#FFF5DE'}}>
                                 <Text style={{fontWeight:'bold',color:'#FFD065',fontSize:17}}>ALL</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{fontWeight:'600',marginTop:5}}>All</Text>

                    </View>
                    <View style={{flex:1/4,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity style={{}}>
                            <View style={{width:70,height:70,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:20,backgroundColor:'#DCF7F2'}}>
                                <Image style={{width:19,height:22,resizeMode:'cover'}} source={require('../assets/SendPri.png')}/>
                            </View>
                            
                        </TouchableOpacity>
                        <Text style={{fontWeight:'600',marginTop:5}}>Send</Text>

                    </View>
                    <View style={{flex:1/4,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity style={{}}>
                            <View style={{width:70,height:70,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:20,backgroundColor:'#E8F7DC'}}>
                            <Image style={{width:21.9,height:24,resizeMode:'cover'}} source={require('../assets/RePri.png')}/>
                            </View>
                            
                        </TouchableOpacity>
                        <Text style={{fontWeight:'600',marginTop:5}}>Received</Text>

                    </View>
                    <View style={{flex:1/4,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity style={{}}>
                            <View style={{width:70,height:70,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:20,backgroundColor:'#F7DCDE'}}>
                            <Image style={{width:24,height:24,resizeMode:'cover'}} source={require('../assets/Clock.png')}/>
                            </View>
                            
                        </TouchableOpacity>
                        <Text style={{fontWeight:'600',marginTop:5}}>Failed</Text>

                    </View>

                </View>

            </View>
        </View>
    </View>  
)
}

export default SingleScreen
const styles = StyleSheet.create({
    //View
    container:{
        flex:1 ,
        backgroundColor:customColors.white,
        
    },
    middleLine:{
        position:'absolute',
        width:350,
        height:7,
        borderRadius:100,
        backgroundColor:customColors.white,
        top:113,
        shadowColor: customColors.primary,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 10.0,
        shadowRadius: 10.0,
    },
    bottomView:{
        flex:0.3,
        backgroundColor:'white',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 13,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        paddingHorizontal:20,
        
    }
    
    
      
})