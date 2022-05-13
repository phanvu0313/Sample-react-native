import { StyleSheet, Text, View,Dimensions } from 'react-native'
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
  Image,
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
import { customColors } from '../../assets/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const index = (props) => {
    const height = props.height;
    const width = props.width;
    const SHeight=height
    const SWidth=width
    const cuverTopHeight = height-20
    const cuverTopWidth= width-80
    const square =(width/22)
    return (
        <View style={{width:width,height:height}}>
          <View style={{flex:1,backgroundColor:'white'}}>
            {/* <Svg  style={{marginHorizontal:20}} width={width-40} height={height}  viewBox={`0 0 30 14`} >
              <Path fill={customColors.primary} fill-opacity="1" d='M 3 0 L 27 0 C 29 0 30 1 30 3 L 30 12 C 20 15 10 15 0 12 L 0 3 C 0 1 1 0 3 0'/>
            </Svg> */}
            <View style={{height:(height/3)*2,marginHorizontal:20,backgroundColor:customColors.primary,}}/>
            <BlurView blurType='light' blurAmount={20} style={{width:width,height:(height/3)*2,borderRadius:25,position:'absolute'}}>

            </BlurView>
            <View style={{position:'absolute',top:(height/3)*2,left:30}}>
              <Svg width={width-60} height={(width-60)/10} viewBox={`0 0 30 3`} style={{}}>
                  <Path fill={customColors.primary} fill-opacity="1" d={`M 0 0 L 30 0 C 20 4 10 4 0 0`}/>
              </Svg>
            </View>
            <View style={{position:'absolute',top:(height/3)*2,left:30}}>
              <Svg width={width-60} height={(width-60)/10} viewBox={`0 0 30 3`} style={{}}>
                  <Path fill={customColors.primary_2} fill-opacity="1" d={`M 0 2 L 30 2 C 20 0 10 0 0 2`}/>
              </Svg>
            </View>
            
          </View>
        </View>
    )
}
export default index

const styles = StyleSheet.create({
    
})