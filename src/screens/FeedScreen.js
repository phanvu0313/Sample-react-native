import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FloattingButton from '../components/common/FloattingButton'
import {PanGestureHandler} from 'react-native-gesture-handler'

const FeedScreen = ({ navigation: { push } }) => {
    return (
        <View style={styles.container}>

            <FloattingButton onPress={()=>{push('Details')}} style = {styles.floatingButtonStyle} />

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
        backgroundColor:'#A5D1E1',
        //alignItems:'center',
      },
      floatingButtonStyle:{
          bottom:100,
          left:10
      }
      
})

export default FeedScreen
