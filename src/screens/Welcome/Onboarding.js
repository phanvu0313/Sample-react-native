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
        
        if(currentIndex==2){
            props.onPress()
        }
    };
    const goToBackSlide = () => {
        
    };
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / ITEM_SIZE);
        setCurrentIndex(currentIndex);
    };

    return (
        <>
        <View>
            
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