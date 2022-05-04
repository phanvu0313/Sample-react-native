import React from 'react'
import { View, Text,StyleSheet ,FlatList,Dimensions,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FloattingButton from '../../components/common/FloattingButton'
import {PanGestureHandler} from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import menu from '../data/menu'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const MenuFlatItems = ({ item }) => {
    
  
    return (
        <View style={[{width:windowWidth/4,marginHorizontal:20,justifyContent:'center',alignItems:'center'}]}>
            <Image resizeMode='contain' source={item.image} style={[styles.image,{width:windowWidth/5}]} />
            <TouchableOpacity onPress={()=>{console.log('jhi')}}>

            </TouchableOpacity>
        </View>

        
        
    )
}

const Home = ({ navigation: { push } }) => {
    const [currentIndex , setCurrentIndex] = React.useState(0)
    const [nameScreen,setNameScreen] = React.useState('');
    callbackFunction = (childData) => {
        setNameScreen(childData)
      }

    
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / windowWidth);
        setCurrentIndex(currentIndex);
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={{flex:0.15,backgroundColor:'red'}}>


                </View>
                <View style={{flex:0.15}}>
                    <FlatList data={menu} renderItem={({ item })=><MenuFlatItems item={item} />} 
                        horizontal 
                        style={{flex:0.85}}
                        showsHorizontalScrollIndicator={false} 
                        bounces={true} 
                        keyExtractor={(item)=>item.id}
                        onMomentumScrollEnd={updateCurrentSlideIndex}
                        //onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:false,})}
                        //onViewableItemsChanged={viewtableItemsChanged}
                    />
                </View>
                <View style={{flex:0.7,backgroundColor:'white'}}>

                </View>
           
           </View>

        </SafeAreaView>
        
        
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF5E0'//'#A5D1E1',
        //alignItems:'center',
      },
      image:{
        flex:1,
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center'
        
        
    },
      
})

export default Home
