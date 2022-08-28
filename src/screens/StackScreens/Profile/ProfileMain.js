import { StyleSheet, Text, View,Image,Dimensions,TextInput } from 'react-native'
import React from 'react'
import { customColors } from '../../../assets/Colors'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import Popup from '../../../components/FilterSheet/Popup';
import Animated ,{
    FadeInRight,
    FadeIn
  } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfileMain = ({navigation}) => {
  return (
    <>
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Animated.View entering={FadeIn}  style={{backgroundColor:customColors.pink,flex:1}}>
      
      </Animated.View>

    </SafeAreaView>
    </>
  )
}

export default ProfileMain

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:customColors.black
    },
    TextInput:{
        flex:1,
        borderRadius:20,
        marginHorizontal:20,
        paddingHorizontal:20,
        fontSize:20,
        backgroundColor:customColors.white

    }
})