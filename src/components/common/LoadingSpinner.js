import React from 'react'
import { View, StyleSheet } from 'react-native';

const LoadingSpinner = () => {
    return (
        <View style={[{flex:0.5},styles.container,StyleSheet.absoluteFill]}>
            <View style={{flex:1,marginHorizontal:50,marginVertical:350,justifyContent:'center',alignItems:'center'}} >
                
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#0D5C75',
        opacity:0.7,
        zIndex:1
      },
      
      
})

export default LoadingSpinner;

