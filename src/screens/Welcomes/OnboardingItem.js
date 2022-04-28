import React , {useEffect} from 'react'
import { View, Text,StyleSheet,Image,Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Slide from './SlideIndex';

const windowWidth = Dimensions.get('window').width;

const OnboardingItem = ({ item }) => {
    
  
    return (
        <View style={[styles.container,{width:windowWidth}]}>
            <Image source={item.image} style={[styles.image,{width:windowWidth, resizeMode:'cover'}]} />
        </View>

        
        
    )
}

export default OnboardingItem


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent:'center',
        alignItems:'center',
        
      },
    image:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    title:{
        fontWeight:'800',
        fontSize:28,
        marginBottom:10,
        textAlign:'center',
        color:'#3F2D20'

    },
    des:{
        fontWeight:'300',
        textAlign:'center',
        color:'red',
        paddingHorizontal:64

    }
      
});
