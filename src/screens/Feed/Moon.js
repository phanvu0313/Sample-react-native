import React from 'react'
import { View, Text, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Moon = () => {
    return (
        <View style={{flex:1}}>
            <LinearGradient style={{flex:1}} start={{x: 1, y: 0}} end={{x: 0, y: 0}} colors={['#B2FEFA', '#0ED2F7'] }>
            </LinearGradient>   
        </View>
        
    )
}

export default Moon
