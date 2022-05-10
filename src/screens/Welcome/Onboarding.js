import React , {useState,useRef} from 'react'
import { View, Text,StyleSheet,Image,FlatList,Animated,Dimensions } from 'react-native'
import Slide from './SlideIndex';
import OnboardingItem from './OnboardingItem'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { customColors } from '../../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ITEM_SIZE = windowWidth/2+50;
const SPACING = (windowWidth-ITEM_SIZE)/2;
const Onboarding = (props) => {
    const [currentIndex , setCurrentIndex] = React.useState(0)
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const ref = React.useRef();

    let favListTemp=[...Slide];
    favListTemp.splice(0,2)

    

    const Footer=()=>{
        return(
            <View style={{height:10,width:10,justifyContent:'space-between',paddingHorizontal:40}}>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    {favListTemp.map((_,index)=>(
                        <View key={index} style={[styles.indicator,
                            currentIndex == index && {
                                opacity:1,
                            }
                        ]} />
                    ))}
                </View>
            </View>
        )
    }
    const goToNextSlide = () => {
        const nextSlideIndex = currentIndex + 1;
        if(currentIndex<2){
            const offset = nextSlideIndex * ITEM_SIZE;
            ref?.current.scrollToOffset({offset});
            setCurrentIndex(currentIndex+1)
        }
        if(currentIndex==2){
            props.onPress()
        }
    };
    const goToBackSlide = () => {
        const nextSlideIndex = currentIndex - 1;
        if(currentIndex>0){
            const offset = nextSlideIndex * ITEM_SIZE;
            ref?.current.scrollToOffset({offset});
            setCurrentIndex(currentIndex-1)
        }
    };
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / ITEM_SIZE);
        setCurrentIndex(currentIndex);
    };

    return (
        <>
        <View style={[styles.container,{}]}>
            <FlatList data={Slide} renderItem={({ item,index })=><OnboardingItem index={index} item={item} scrollX={scrollX} /> } 
            //snapToInterval
            horizontal 
            snapToInterval={ITEM_SIZE}
            snapToAlignment='start'
            ref = {ref}
            style={{marginTop:35,backgroundColor:customColors.bg}}
            showsHorizontalScrollIndicator={false} 
            pagingEnabled 
            bounces={false} 
            keyExtractor={(item)=>item.id}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
            scrollEventThrottle={16}
            />
            
            
           
        </View>
        <View style={{flex:0.3,backgroundColor:'transparent'}}>
            <View style={{flex:0.6,justifyContent:'flex-start',alignItems:'center'}}>
                <Text style={{color:customColors.primary,fontSize:25,fontWeight:'bold',marginVertical:10}}>
                    Safe Transaction
                </Text>
                <Text style={{color:customColors.primary,fontSize:20,fontWeight:'400'}}>
                    Forgot to bring your wallet
                </Text>
                <Text style={{color:customColors.primary,fontSize:20,fontWeight:'400'}}>
                    when you are shopping?
                </Text>

            </View>
            
            <View style={{flex:0.3,flexDirection:'row',width:windowWidth-80}}>
                <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={goToBackSlide} disabled={currentIndex==0 ? true:false} backgroundColor={currentIndex==0 ? 'white':'black'} >
                        <View  style={[{opacity:currentIndex==0 ? 0.4:1},styles.button]}>
                            <Icon name="ios-chevron-back-outline" size={30} color={customColors.text} ></Icon>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,alignItems:'center',paddingHorizontal:20,marginTop:20}}>
                    <Footer style={{flex:1}}/>
                </View>
                <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={goToNextSlide}  >
                        <View  style={styles.button}>
                            <Icon name="ios-chevron-forward-outline" size={30} color={customColors.text} ></Icon>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
        
        </>

        
        
    )
}

export default Onboarding


const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        justifyContent:'center',
        alignItems:'center',
      },
      indicator:{
        height:10,
        width:10,
        backgroundColor:customColors.primary,
        borderRadius:100,
        opacity:0.5,
        marginHorizontal:4
      },
      button:{
        borderRadius:40,
        borderColor:'#E6DCCD',
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.27,
      }
      
      
});