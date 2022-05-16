import { StyleSheet, Text, View,TextInput,TouchableWithoutFeedback,TouchableOpacity,Keyboard,Dimensions,Alert } from 'react-native'
import React from 'react'
import { customColors } from '../../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Main = () => {
    const [cardList,setCardList] = React.useState([]);
    const [amount, onChangeAmount] = React.useState("");
    const swipeableRef = React.useRef(null);

    const handleAddCard =(fav)=>{
        setCardList([...cardList,fav])
    }
    const handleDeleteCard=(index)=>{
        Alert.alert(
            "DELETE",
            "Are you sure ?",
            [
                
                {
                    text:'Cancel',
                    onPress:()=>console.log('cancel')
                },
                {
                    text:'Delete',
                    onPress:()=>{
                        
                        let favListTemp=[...cardList]
                        favListTemp.splice(index,1)
                        setCardList(favListTemp)
                    }
                    
                }

            ]
        )

    }
    const DeleteAction = () =>{
        return(
          <View style={{width:90,alignItems:'center'}}>
              <TouchableOpacity onPress={()=>handleDeleteCard(0)}>
                  <View style={{justifyContent:'center',alignItems:'center',width:45,height:45}}>
                      <Icon  name = {"close-circle"} size={35} color={customColors.pink} ></Icon>
                  </View>
              </TouchableOpacity>
          </View>
        )
  }
    const ItemInScrollView = (props) => {
        return(
            <Swipeable
            renderRightActions={DeleteAction}
            red={swipeableRef}
            >
                <View style={[{flex:1,height:90,backgroundColor:props.index % 2 == 0 ? '#FFF3D7':"#BEEAFF",},styles.cardView]}>
                    <View style={{flex:0.3,}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <View style={styles.visaView}>
                                <Icon  name = {"logo-ionitron"} size={60} color={customColors.primary} ></Icon>
                            </View>
                            
                        </View>
                    </View>
                    <View style={{flex:0.7}}>
                        <View style={{flex:1,paddingLeft:20}}>
                            <Icon  name = {"logo-sass"} size={20} color={'black'} ></Icon>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{fontWeight:'bold'}}>--Bank name--</Text>

                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Text style={{fontSize:13}}>no: *****567</Text>
                            <Text style={{marginLeft:40,fontSize:12,color:customColors.primary}}>Exp Date: 15/03</Text>

                        </View>

                    </View>
                </View>
            </Swipeable>
            
        )


    }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <View style={{flex:0.2}}>
          <View style={{flex:0.25}}>
          </View>
          <View style={{flex:0.25,marginHorizontal:10,flexDirection:'row'}}>
            <Icon  name = {"wallet-outline"} size={20} color={customColors.text} ></Icon>
            <Text style={{fontWeight:'300',fontSize:20,color:customColors.text,marginLeft:10}}>Payou Balance</Text>
          </View>
          <View style={{flex:0.5,marginHorizontal:10}}>
          <Text style={{fontWeight:'bold',fontSize:50,color:customColors.text}}>$ 16,003.00</Text>
          </View>
      </View>
      <View style={{flex:0.2,marginHorizontal:10}}>
          <View style={{flex:0.3,justifyContent:'center',flexDirection:'row'}}>
              <View style={{flex:0.4,justifyContent:'center'}}>
                <Text style={{fontSize:20,fontWeight:'600'}}>Recharge wallet</Text>
              </View>
              
              <View style={{flex:0.6,flexDirection:'row'}}>
                  <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={{flex:1}} onPress={()=>onChangeAmount('10')}>
                        <View style={{backgroundColor:customColors.primary,flex:1,justifyContent:'center',alignItems:'center',marginHorizontal:5,borderRadius:20,marginVertical:5}}>
                            <Text style={{color:customColors.white,fontWeight:'600'}}>
                                $10
                            </Text>
                        </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={{flex:1}} onPress={()=>onChangeAmount('100')}>
                        <View style={{backgroundColor:customColors.primary,flex:1,justifyContent:'center',alignItems:'center',marginHorizontal:5,borderRadius:20,marginVertical:5}}>
                            <Text style={{color:customColors.white,fontWeight:'600'}}>
                                $100
                            </Text>
                        </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={{flex:1}} onPress={()=>onChangeAmount('500')}>
                        <View style={{backgroundColor:customColors.primary,flex:1,justifyContent:'center',alignItems:'center',marginHorizontal:5,borderRadius:20,marginVertical:5}}>
                            <Text style={{color:customColors.white,fontWeight:'600'}}>
                                $500
                            </Text>
                        </View>
                    </TouchableOpacity>
                  </View>
              </View>
          </View>
          <View style={{flex:0.5,backgroundColor:'white'}}>
            <TextInput
                color='black'
                selectionColor="black"
                placeholderTextColor="#8c8c8c"
                style={[styles.textAmount]}
                onChangeText={onChangeAmount}
                value={amount}
                placeholder="Enter Amount"
                returnKeyType="done"
                keyboardType='numeric'
                secureTextEntry={false}
            />
          </View>
          <View style={{flex:0.2}}>
              <Text>Minimum $10 Required*</Text>
          </View>

      </View>
      <View style={{flex:0.6,}}>
          <View style={{flex:0.1,justifyContent:'center',backgroundColor:customColors.white}}>
              <Text style={{fontWeight:'400',fontSize:20,paddingLeft:10}}>Debit From</Text>
          </View>
          <View style={{flex:0.9,marginTop:10}}>
              <ScrollView>
                  {
                    cardList.map((item,index)=>{
                        return (
                            <ItemInScrollView key={index} index={index}/>
                        )
                    })
                  }
                <View style={[{flex:1,height:90,flexDirection:'row',paddingHorizontal:10,paddingVertical:10,borderRadius:10,backgroundColor:"#fff",marginBottom:20,marginHorizontal:10},styles.addView]}>
                    <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity style={{flex:1}} onPress={()=>handleAddCard('hiiii')}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
                                <Icon  name = {"md-add-circle-outline"} size={40} color={customColors.primary} ></Icon>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:0.7}}>
                        <Text style={{fontWeight:'bold',fontSize:20,color:customColors.primary}}>Add More</Text>
                    </View>
                    
                </View>
              </ScrollView>

          </View>

      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default Main

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:customColors.white
    },
    textAmount:{
        flex:1,
        marginVertical:10,
        borderRadius:20,
        borderWidth:1.5,
        borderColor:customColors.primary,
        paddingHorizontal:20,

    },
    visaView:{
        width:70,
        height:70,
        backgroundColor:customColors.white,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 0,
        },
        shadowOpacity: 0.34,
        shadowRadius: 3.27,

        },
    addView:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        shadowColor: customColors.primary,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.24,
        shadowRadius: 5.27,
    },
    cardView:{
        flexDirection:'row',
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:10,
        marginBottom:10,
        marginTop:10,
        marginHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        shadowColor: customColors.primary,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.24,
        shadowRadius: 5.27,
    }
})