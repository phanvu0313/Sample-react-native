import { StyleSheet, Text, View,Dimensions,TouchableOpacity,TextInput ,TouchableWithoutFeedback,Keyboard} from 'react-native'
import React from 'react'
import { customColors } from '../../assets/Colors'
import Animated, {
    FadeInDown,
    FadeInLeft,
    FadeInRight,
    FadeInUp,
  } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ConfirmCode = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <Animated.View entering={FadeInUp.delay(300)} style={{flex:0.2,justifyContent:'center'}}>
                <Text style={{marginLeft:40,fontSize:40,fontWeight:'bold',color:customColors.red}}>Verification<Text style={{fontSize:40,fontWeight:'bold',color:customColors.black}}> code.</Text></Text>
                <Text style={{marginHorizontal:40,marginTop:10}}>We've sent your 4-digit code to your phone number.</Text>
            </Animated.View>
            <View style={{flex:0.1,marginHorizontal:40,flexDirection:'row'}}>
                <View style={styles.viewNumber}>
                    <TextInput
                        color='black'
                        selectionColor="black"
                        placeholderTextColor="#A8A8A8"
                        style={[styles.number,{}]}
                        returnKeyType="next"
                        keyboardType='number-pad'
                        secureTextEntry={false}
                        maxLength={1}
                    />
                </View>
                <View style={styles.viewNumber}>
                    <TextInput
                        color='black'
                        selectionColor="black"
                        placeholderTextColor="#A8A8A8"
                        style={[styles.number,{}]}
                        returnKeyType="next"
                        keyboardType='number-pad'
                        secureTextEntry={false}
                        maxLength={1}
                    />
                </View>
                <View style={styles.viewNumber}>
                    <TextInput
                        color='black'
                        selectionColor="black"
                        placeholderTextColor="#A8A8A8"
                        style={[styles.number,{}]}
                        returnKeyType="next"
                        keyboardType='number-pad'
                        secureTextEntry={false}
                        maxLength={1}
                    />
                </View>
                <View style={styles.viewNumber}>
                    <TextInput
                        color='black'
                        selectionColor="black"
                        placeholderTextColor="#A8A8A8"
                        style={[styles.number,{}]}
                        returnKeyType="next"
                        keyboardType='number-pad'
                        secureTextEntry={false}
                        maxLength={1}
                    />
                </View>

            </View>
            <View style={{flex:0.1,justifyContent:'flex-end'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('AutoAddress')}>
                    <View style={{height:60,backgroundColor:customColors.black,borderRadius:20,marginHorizontal:40,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:customColors.bg,fontSize:23,fontWeight:'bold'}}>Confirm</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default ConfirmCode

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:customColors.bg
    },
    viewNumber:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    number:{
        backgroundColor:'white',
        width:((windowWidth-80)/4)-10,
        height:((windowHeight*0.1)-20),
        borderRadius:10,
        borderWidth:1,
        borderColor:customColors.gray,
        fontSize:40,
        paddingLeft:25,
    }

})