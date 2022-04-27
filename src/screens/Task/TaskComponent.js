import React from 'react'
import { View, Text,StyleSheet,Dimensions,Animated } from 'react-native'
import NeuButton from '../../components/NeuButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Neomorph,NeomorphBlur } from 'react-native-neomorph-shadows';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TaskComponent = (props) => {
    const {number} = props;
    const numberText = number < 10 ? `0${number}` : number

    const rightAction = (process,dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 200],
            outputRange: [1,0],
            extrapolate:'clamp'
          })
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [0, 0, 0, -10],
        });

        return (
            <TouchableOpacity>
                <Animated.View  style={[styles.rightStyle,{transform:[{translateX: trans}]}]} >
                    <NeomorphBlur
                    inner
                        style={{
                            shadowRadius: 4,
                            borderRadius: 20,
                            backgroundColor: '#E0E5EC',
                            width: 40,
                            height:40,
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <Icon name="md-close" size={30} color="#545454" ></Icon>
                        </NeomorphBlur>
                    
                </Animated.View>
            </TouchableOpacity>
        );
      };
    return (
        <Swipeable renderRightActions={rightAction} overshootRight={false} >
            <View style={[styles.buttonView]}>
                <NeuButton  onPress={props.onPress} isToggle={true}  sizeW={windowWidth-40} sizeH={100} style={{borderRadius:15}} custom={false}>
                    <View style={{flex:1,marginTop:10,flexDirection:'column'}}>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Text style={{flex:1,marginLeft:10,fontWeight:'300',fontSize:13}}>{numberText}</Text>
                            <Icon style={{flex:1, }} name="ios-earth" size={30} color="#545454" ></Icon>
                        </View>
                        <Text style={{flex:1,marginLeft:30,fontWeight:'600'}}>Task Name</Text>
                    </View>
                </NeuButton>
            </View>
        </Swipeable>
    )
}

export default TaskComponent

const styles = StyleSheet.create({
    //View
    container:{
        flex:1 ,
        backgroundColor:'#E0E5EC',
    },
    topView:{
        flex:0.1,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'

    },
    buttonView:{
        marginTop:15,
        marginBottom:15,
        //backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    bottomView:{
        flex:0.17,
        //marginTop:20,
        justifyContent:'center',
        alignItems:'center'

    },
    rightStyle:{
        marginVertical:15,
        marginRight:30,
        //backgroundColor:'red',
        justifyContent:'center',
        alignItems:'flex-end'
    }
   

    
      
})

