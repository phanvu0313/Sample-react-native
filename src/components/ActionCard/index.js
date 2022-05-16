import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React from 'react'
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import {BlurView} from '@react-native-community/blur'
import Icon from 'react-native-vector-icons/Ionicons';
import { customColors } from '../../assets/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const index = (props) => {
    const height = props.height;
    const width = props.width;
    const HEIGHT_MAX = (props.height/3)*2.5
    return (
        <View style={{width:width,height:height}}>
          <View style={{flex:1}}>
            {/* <Svg  style={{marginHorizontal:20}} width={width-40} height={height}  viewBox={`0 0 30 14`} >
              <Path fill={customColors.primary} fill-opacity="1" d='M 3 0 L 27 0 C 29 0 30 1 30 3 L 30 12 C 20 15 10 15 0 12 L 0 3 C 0 1 1 0 3 0'/>
            </Svg> */}
            <View style={{height:HEIGHT_MAX-10,marginHorizontal:10,marginTop:10,backgroundColor:customColors.primary,borderRadius:40}}/>
            <BlurView blurType='light' blurAmount={20} style={{width:width,height:HEIGHT_MAX,borderRadius:25,position:'absolute'}}>
              <View style={{flex:0.3,flexDirection:'row',justifyContent:'center',alignItems:'flex-end'}}>
                <Icon  name = {"wallet-outline"} size={20} color={customColors.white} ></Icon>
                <Text style={{fontWeight:'bold',fontSize:20,color:customColors.white}}>{'$'} 123,000,00</Text>
                

              </View>
              <View style={{flex:0.7,flexDirection:'row',justifyContent:'center',alignItems:'center',paddingHorizontal:20}}>
                <View style={{flex:1/3,justifyContent:'center',alignItems:'center'}}>
                  <TouchableOpacity onPress={props.Send}>
                    <BlurView blurType='light' style={{height:(HEIGHT_MAX/10)*3.5,width:(HEIGHT_MAX/10)*3.5,justifyContent:'center',alignItems:'center',borderRadius:(HEIGHT_MAX/10)*3.5/2}}>
                      <Image style={{width:25,height:25,resizeMode:'cover'}} source={require('../../assets/send.png')}/>
                    </BlurView>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1/3,justifyContent:'center',alignItems:'center'}}>
                  <TouchableOpacity onPress={props.Scan}>
                    <BlurView blurType='light' style={{height:(HEIGHT_MAX/10)*3.5,width:(HEIGHT_MAX/10)*3.5,justifyContent:'center',alignItems:'center',borderRadius:(HEIGHT_MAX/10)*3.5/2}}>
                      <Image style={{width:25,height:25,resizeMode:'cover'}} source={require('../../assets/Scan.png')}/>
                    </BlurView>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1/3,justifyContent:'center',alignItems:'center'}}>
                  <TouchableOpacity onPress={props.Re}>
                    <BlurView blurType='light' style={{height:(HEIGHT_MAX/10)*3.5,width:(HEIGHT_MAX/10)*3.5,justifyContent:'center',alignItems:'center',borderRadius:(HEIGHT_MAX/10)*3.5/2}}>
                      <Image style={{width:25,height:25,resizeMode:'cover'}} source={require('../../assets/CirArr.png')}/>
                    </BlurView>
                  </TouchableOpacity>
                </View>

              </View>

            </BlurView>
            <View style={{position:'absolute',top:HEIGHT_MAX,left:30}}>
              <Svg width={width-60} height={(width-60)/10} viewBox={`0 0 30 3`} style={{}}>
                  <Path fill={customColors.primary} fill-opacity="1" d={`M 0 0 L 30 0 C 20 3 10 3 0 0`}/>
              </Svg>
            </View>
            <View style={{position:'absolute',top:(HEIGHT_MAX)-((width)/10),left:30}}>
              <Svg width={width-60} height={(width-60)/5+3} viewBox={`0 0 30 3`} style={{}}>
                  <Path fill={customColors.primary} fill-opacity="1" d={`M 0 2 L 30 2 C 15 0 15 0 0 2`}/>
              </Svg>
            </View>
            
          </View>
        </View>
    )
}
export default index

const styles = StyleSheet.create({
    
})