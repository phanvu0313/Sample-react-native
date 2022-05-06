import React from 'react'
import { View, Text,StyleSheet ,FlatList,Dimensions,Image,Animated} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FloattingButton from '../../components/common/FloattingButton'
import {PanGestureHandler} from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import menu from '../data/menu'
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet from '../../components/BottomSheet'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const MenuFlatItems = ({ item,setCurrentIndex,currentIndex }) => {
    
  
    return (
        <View style={[{width:windowWidth/5.5,marginHorizontal:20,justifyContent:'center',alignItems:'center'}]}>
            <TouchableOpacity onPress={()=>{setCurrentIndex(item.id)}} style={{alignItems:'center'}}>
                <Image resizeMode='contain' source={item.image} style={[styles.image,{width:windowWidth/7}]} />
                <Text style={{fontWeight :item.id ==currentIndex ? 'bold':"400",fontSize:18,color: item.id ==currentIndex? "#3F2D20":"#BCB3AB"}}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    )
}
const ItemInMenuFlat = ({ item,setCurrentIndexItem,currentIndexItem }) => {
    
  
    return (
        <View style={[{width:windowWidth-30}]}>
            <View style={{flex:0.1, justifyContent:'flex-end', alignItems:'flex-end',marginRight:30}}>
                <TouchableOpacity>
                    <Image style={{ width: 25, height: 24 }} source = {require('../../assets/redFavor.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{flex:0.5,justifyContent:'center',alignItems:"center"}}>
                <Image resizeMode='contain' style={{ width: 260,height:260}} source = {item.image} />
            </View>
            <View style={{flex:0.3,flexDirection:'row'}}>
                <View style={{flex:0.7,marginLeft:20,justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:40}}>
                        {item.name}
                    </Text>
                    <Text style={{fontWeight:'bold',fontSize:20,color:'#73665C'}}>
                        {item.price}
                    </Text>

                </View>
                <View style={{flex:0.3,justifyContent:'flex-end',alignItems:'flex-end',marginRight:40}}>
                    <TouchableOpacity>
                        <View style={{width:50,height:50,borderWidth:1,borderRadius:15,borderColor:'#D3BBAA',justifyContent:'center',alignItems:'center'}}>
                            
                            <Icon style={{flex:0}} name="ios-add" size={25} color="#3F2D20" ></Icon>
                            
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}
const bot=()=>{
    console.log('dcm');
    return (
        <View style={[{flex:1,backgroundColor:'red'},StyleSheet.absoluteFill]}>
            <Text>hihi</Text>
        </View>
    )
}

const Home = ({ navigation: { push } }) => {
    const [currentIndex , setCurrentIndex] = React.useState(1);
    const [currentIndexItem , setCurrentIndexItem] = React.useState(1);
    const [nameScreen,setNameScreen] = React.useState('');
    animation = new Animated.Value(0);
    
    const flipFront ={
        transform: [{
            rotateY: animation.interpolate({
                inputRange:[0,180],
                outputRange: ["0deg", '180deg'] 
            }),
          },
        ]
    }
    const flipBack ={
        transform: [{
            rotateY: animation.interpolate({
                inputRange:[0,180],
                outputRange: ["180deg", '360deg'] 
            }),
          },
        ]
    }
    toggleMenu = ()=> {
        Animated.timing(animation,{
            toValue : 180,
            duration:500,

            useNativeDriver:false
        }).start();
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={{flex:0.1}}>
                    <FlatList data={menu} renderItem={({ item })=><MenuFlatItems item={item} setCurrentIndex = {setCurrentIndex} currentIndex = {currentIndex} />} 
                        horizontal
                        showsHorizontalScrollIndicator={false} 
                        bounces={true} 
                        keyExtractor={(item)=>item.id}
                        onMomentumScrollEnd={console.log(currentIndex)}
                        //onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:false,})}
                        onViewableItemsChanged={toggleMenu()}
                    />
                </View>
                <View style={{flex:0.8,marginBottom:10}}>
                    <Animated.View style={[flipBack,{backgroundColor:'red',flex:1, marginHorizontal:35,marginTop:30,marginBottom:40,borderRadius:30,backgroundColor:'#FFE2CD'},StyleSheet.absoluteFill]}>
                    </Animated.View>
                    <Animated.View style={[{flex:0.9, marginHorizontal:15,marginTop:30,borderRadius:30,backgroundColor:'#F5D3BB'},flipBack]}>
                        <FlatList data={menu[currentIndex-1].item} renderItem={({ item })=><ItemInMenuFlat item={item} setCurrentIndexItem = {setCurrentIndexItem} currentIndexItem = {currentIndexItem} />} 
                            horizontal
                            showsHorizontalScrollIndicator={false} 
                            bounces={false} 
                            keyExtractor={(item)=>item.id}
                            onMomentumScrollEnd={console.log(currentIndex)}
                            //onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:false,})}
                            onViewableItemsChanged={toggleMenu()}
                            pagingEnabled
                        />
                        
                        
                    </Animated.View>
                    
                    
                    

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
