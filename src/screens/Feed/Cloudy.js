import React from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const Cloudy = () => {
    return (
        <View style={{flex:1}}>
            <LinearGradient style={{flex:1}} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#02CBD6', '#00B4D4'] }>

            </LinearGradient> 
        </View>
    )
}

export default Cloudy
