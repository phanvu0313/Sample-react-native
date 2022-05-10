import React from 'react'
import { View, Text,StyleSheet,Dimensions,Alert } from 'react-native'
import { ScrollView, TouchableOpacity,Switch } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const SingleScreen = ({navigation}) => {

    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.popToTop()}>
                <Text>Go back</Text>
            </TouchableOpacity>
            
        </View>  
    )
}

export default SingleScreen
const styles = StyleSheet.create({
    //View
    container:{
        flex:1 ,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    
    
      
})