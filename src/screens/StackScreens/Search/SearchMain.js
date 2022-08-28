import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors } from '../../../assets/Colors'
import Animated ,{
  FadeInRight,
  SlideInLeft,
  FadeIn
} from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
const SearchMain = () => {
  return (
    <>
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Animated.View entering={FadeIn}  style={{backgroundColor:customColors.yellow,flex:1}}>
      
      </Animated.View>

    </SafeAreaView>
    </>
  )
}

export default SearchMain

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:customColors.black
    }
})