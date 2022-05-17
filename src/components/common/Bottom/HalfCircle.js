import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors } from '../../../assets/Colors'
import Svg, {
    Path,Stop
  } from 'react-native-svg';

const HalfCircle = () => {
  return (
    <>
    <View style={{}}>
        <Svg width={100} height={100} viewBox={`0 0 30 30`} style={{}}>
            <Path fill={customColors.white} fill-opacity="1" d={`M 0 0 C 0 20 30 20 30 0 L 30 30 L 0 30 L 0 0 M 0 0`}/>
        </Svg>
    </View>
    <View style={{position:'absolute'}}>
        <Svg width={100} height={100} viewBox={`0 0 30 30`} style={{}}>
            <Path fill={'#ECECEC'} fill-opacity="1" d={`M 0 0 C 0 20 30 21 30 0 L 30 0 C 29 20 1 19 0 0 L 0 0`}/>
        </Svg>

    </View>
    </>
  )
}

export default HalfCircle

const styles = StyleSheet.create({})