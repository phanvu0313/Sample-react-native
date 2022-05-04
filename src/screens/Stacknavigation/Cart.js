import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FloattingButton from '../../components/common/FloattingButton'
import {PanGestureHandler} from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

const Cart = ({ navigation: { push } }) => {
    const [nameScreen,setNameScreen] = React.useState('');
    callbackFunction = (childData) => {
        setNameScreen(childData)
      }

    
    
    return (
        <View style={styles.container}>
            <FloattingButton push ={push} style = {styles.floatingButtonStyle} />
        </View>
        // <View style={{
        //     flex: 1,
        //     justifyContent: 'center',
        //     alignItems: 'center'
        // }}>
        //     <TouchableOpacity 
        //     style={{
        //         backgroundColor: '#000',
        //         paddingHorizontal: 40, 
        //         borderRadius: 20,
        //         paddingVertical: 8,
        //         margin: 6
        //     }}
        //     onPress={() => {
        //         push("Details")
        //     }}>
        //         <Text
        //             style={{
        //                 color: '#fff',
        //                 fontSize: 20
        //             }}
        //         >View More</Text>
        //     </TouchableOpacity>
        // </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF5E0'//'#A5D1E1',
        //alignItems:'center',
      },
      floatingButtonStyle:{
          bottom:200,
          left:20
      }
      
})

export default Cart
