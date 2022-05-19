import { StyleSheet, Text, View,TextInput,Image ,Dimensions} from 'react-native'
import React from 'react'
import { customColors } from '../../../assets/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView,TouchableOpacity } from 'react-native-gesture-handler';
import Popup from '../../../components/FilterSheet/Popup';
import DatePicker from 'react-native-date-picker'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HistoryMain = (props) => {
    const [search, onChangeSearch] = React.useState("");
    const [cardList,setCardList] = React.useState(['1','2','3','4','5','6','7','8']);
    const [isFilterHistoryOn, setIsFilterHistoryOn] = React.useState(false);
    const [receivedCheck, setReceivedCheck] = React.useState(true);
    const [sendCheck, setSendCheck] = React.useState(true);
    const [date, setDate] = React.useState(new Date())
    const [startDay, setStartDay] = React.useState('--/--/----')
    const [endDay, setEndDay] = React.useState('--/--/----')
    const [isStartSet, setIsStartSet] = React.useState(true)
    const [open, setOpen] = React.useState(false)


    const toogleHistory=()=>{
        setIsFilterHistoryOn(!isFilterHistoryOn)
    }
    const formatDate = (date) =>{
        setOpen(false)
        let day = date.getDate()
        let month = date.getMonth()+1
        let year = date.getFullYear()
        if (isStartSet == true){
            setStartDay(day+'/'+month+'/'+year)
        }else if(isStartSet == false) {
            setEndDay(day+'/'+month+'/'+year)
            //setIsStartSet(true)
        }
        

    }
    const startDayPressed=()=>{
        setOpen(true)
        setIsStartSet(true)
    }
    const endDayPressed=()=>{
        setOpen(true)
        setIsStartSet(false)

    }

    const ItemInScrollView = (props) => {
        return(
            <View style={[{flex:1,height:90,backgroundColor:customColors.white},styles.cardView]}>
                
                <View style={{flex:0.3,}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.visaView}>
                        <Image style={{width:60,height:60,resizeMode:'cover'}} source={require('../../../assets/ava.png')} />
                        </View>
                    </View>
                </View>
                <View style={{flex:0.7}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={{marginLeft:10,fontWeight:'700',marginBottom:10}}>-Name-</Text>
                            <Text style={{marginLeft:10,fontWeight:'400',}}>08 March 2021</Text>
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{marginLeft:10,fontWeight:'bold',marginBottom:10}}>120.00$</Text>
                            <Text style={{marginLeft:10,fontWeight:'400',color:customColors.primary_2}}>Name Wallet</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
  return (
    <>
    <View style={styles.container}>
            <View style={{flex:1}}>
                <View style={{flex:0.1}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:1,flexDirection:'row',marginHorizontal:20}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>{console.log(startDay,endDay)}}>
                                <Text style={{fontWeight:'bold',fontSize:30}}>History</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                            <TouchableOpacity onPress={toogleHistory}>
                                <Icon  name = {"filter"} size={35} color={customColors.text } />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{flex:0.1,flexDirection:'row',marginHorizontal:20}}>
                    <View style={styles.iconSearch}>
                        <Icon  name = {"ios-search"} size={25} color={customColors.text} ></Icon>
                    </View>
                    <TextInput
                            color='black'
                            selectionColor="black"
                            placeholderTextColor="#8c8c8c"
                            style={[styles.textAmount]}
                            onChangeText={onChangeSearch}
                            value={search}
                            placeholder="Search"
                            returnKeyType="done"
                            keyboardType='default'
                            secureTextEntry={false}
                        />
                </View>
                <View style={{flex:0.8,marginHorizontal:10,marginTop:10}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            cardList.map((item,index)=>{
                                return(
                                    <ItemInScrollView key={index}  />
                                )
                            })
                        }
                        <View style={{height:100}}></View>
                    </ScrollView>
                </View>
            </View>
    </View>
    <Popup isOn={isFilterHistoryOn} setIsOn={setIsFilterHistoryOn} width={windowWidth-75} height={windowHeight/2.5}>
        <View style={styles.containerPopup}>
            <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:35}}>
                    Filter
                </Text>
            </View>
            <View style={{flex:0.8}}>
                <View style={{flex:0.5}}>
                    <View style={{flex:1,marginHorizontal:30,marginVertical:30,borderRadius:20,borderWidth:1,borderColor:customColors.primary,flexDirection:'row'}}>
                        <View style={{flex:0.45,justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>{startDayPressed()}}>
                                <Text style={{fontSize:16,fontWeight:'bold',color:customColors.primary}}>{startDay}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
                            <Icon  name = {"ios-caret-forward-outline"} size={20} color={customColors.primary}/>
                        </View>
                        <View style={{flex:0.45,justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>endDayPressed()}>
                                <Text style={{fontSize:16,fontWeight:'bold',color:customColors.primary}}>{endDay}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{flex:0.5}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <View style={{width:30,height:30,backgroundColor:customColors.bg,borderRadius:10,marginRight:10}}>
                                <TouchableOpacity onPress={()=>setReceivedCheck( (receivedCheck == true && sendCheck != false) ? false :true)}>
                                    <Icon  name = {"checkmark-sharp"} size={30} color={ receivedCheck  ? customColors.primary_2 : customColors.bg} ></Icon>
                                </TouchableOpacity>
                            </View>
                            <Text>Received</Text>
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <View style={{width:30,height:30,backgroundColor:customColors.bg,borderRadius:10,marginRight:10}}>
                                <TouchableOpacity onPress={()=>setSendCheck( (sendCheck == true && receivedCheck != false) ? false :true)}>
                                    <Icon  name = {"checkmark-sharp"} size={30} color={ sendCheck ? customColors.primary_2 : customColors.bg} ></Icon>
                                </TouchableOpacity>
                            </View>
                            <Text>Sent</Text>
                        </View>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={()=>setIsFilterHistoryOn(!isFilterHistoryOn)}>
                        <View style={{flex:0.5, backgroundColor:customColors.primary,width:windowWidth/3,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:customColors.white,fontWeight:'bold',fontSize:18}}>Confirm</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        
        </View>
    </Popup>
    <DatePicker
        modal
        mode='date'
        open={open}
        date={date}
        onConfirm={(date) => {
            formatDate(date)
        }}
        onCancel={() => {
            setOpen(false)
        }}
    />
    </>
  )
}

export default HistoryMain

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:customColors.white,
    },
    iconSearch:{
        flex:0.2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        marginTop:20,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        shadowColor: customColors.text,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.24,
        shadowRadius: 5.27,

    },
    textAmount:{
        flex:0.8,
        marginTop:20,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        backgroundColor:customColors.white,
        paddingHorizontal:20,
        shadowColor: customColors.text,
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
        marginTop:5,
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
    },
    visaView:{
        width:70,
        height:70,
        backgroundColor:'#FFEAF2',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    containerPopup:{
        flex:1,
        marginHorizontal:10,
        marginVertical:10,
    }
})