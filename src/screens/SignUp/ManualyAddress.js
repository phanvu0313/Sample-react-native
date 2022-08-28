import { StyleSheet, Text, View ,TouchableOpacity,TouchableWithoutFeedback,Dimensions} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { customColors } from '../../assets/Colors'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ManualyAddress = ({navigation}) => {
    const [userName, onChangeUserName] = React.useState(1);
    const setFocus=()=>{
        if (userName == 1){
            
        }

    }
    React.useEffect(() => {
        setFocus()
    }, [])
  return (
    <View style={styles.container}>
        <View style={{flex:0.2,justifyContent:'center'}}>
            <Text style={{marginLeft:40,fontSize:40,fontWeight:'bold',color:customColors.red}}>Add<Text style={{fontSize:40,fontWeight:'bold',color:customColors.black}}> your address.</Text></Text>
        </View>
        <View style={{flex:0.1}}>
            <View style={{flex:1,flexDirection:'row',marginHorizontal:40}}>
                <View style={{flex:1}}>
                    <TouchableWithoutFeedback>
                        <View style={styles.nameSeclect}>
                            <Icon  name = {"ios-home-outline"} size={25} color={"#000"} ></Icon>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity>
                        <View style={styles.nameSeclect}>
                            <Icon  name = {"md-business-outline"} size={25} color={"#000"} ></Icon>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity>
                        <View style={styles.nameSeclect}>
                            <Icon  name = {"md-locate-outline"} size={25} color={"#000"} ></Icon>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={{flex:0.5}}></View>
        <View style={{flex:0.1,justifyContent:'flex-start'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Payment')}>
                <View style={{height:60,backgroundColor:customColors.black,borderRadius:20,marginHorizontal:40,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                    <Text style={{color:customColors.bg,fontSize:23,fontWeight:'bold'}}>Save</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ManualyAddress

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:customColors.bg
    },
    nameSeclect:{
        width:((windowWidth-80)/3)-20,
        height:(windowHeight*0.1),
        borderRadius:20,
        borderWidth:1,
        borderColor:customColors.gray,
        justifyContent:'center',
        alignItems:'center'
    }
})