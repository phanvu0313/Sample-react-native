import React , {useState,useRef} from 'react'
import { View, Text,StyleSheet,Image,FlatList,Animated,Dimensions } from 'react-native'
import Slide from './SlideIndex';
import OnboardingItem from './OnboardingItem'
import { TouchableOpacity } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('window').width;
const Onboarding = (props) => {
    const [currentIndex , setCurrentIndex] = React.useState(0)
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const Footer=()=>{
        return(
            <View style={{height:10,width:windowWidth/3,justifyContent:'space-between',paddingHorizontal:20}}>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    {Slide.map((_,index)=>(
                        <View key={index} style={[styles.indicator,
                            currentIndex == index && {
                                opacity:1,
                                width:windowWidth/12,
                            }
                        ]} />
                    ))}
                </View>

            </View>
        )
    }
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / windowWidth);
        setCurrentIndex(currentIndex);
      };

    return (
        <View style={[styles.container,{}]}>
            <FlatList data={Slide} renderItem={({ item })=><OnboardingItem item={item} />} 
            horizontal 
            style={{flex:0.85,marginTop:35}}
            showsHorizontalScrollIndicator={false} 
            pagingEnabled 
            bounces={false} 
            keyExtractor={(item)=>item.id}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            //onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:false,})}
            //onViewableItemsChanged={viewtableItemsChanged}
            />
            <Footer style={{flex:0.025,backgroundColor:'white'}}/>
            <View style={{flex:0.15}}>
                <TouchableOpacity onPress={props.onPress} >
                    <View  style={{borderRadius:20,borderWidth:1.5,borderColor:'#E6DCCD',width:windowWidth/4,height:50,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:20,color :'#84BD93'}}>
                            Skip
                        </Text>
                    </View>

                </TouchableOpacity>

            </View>
           
        </View>

        
        
    )
}

export default Onboarding


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFF5E0'
      },
      indicator:{
        height:8,
        width:windowWidth/40,
        backgroundColor:'#84BD93',
        borderRadius:100,
        opacity:0.5,
        marginHorizontal:2
      }
      
      
});
