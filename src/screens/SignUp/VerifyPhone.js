import { StyleSheet, Text, View,TextInput,Dimensions,TouchableWithoutFeedback,Keyboard,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { customColors } from '../../assets/Colors'
import CountryPicker from '../../components/CountryPicker/CountryPicker';
import Icon from 'react-native-vector-icons/Ionicons';
import CountryList from '../Data/CountryList';
import { ScrollView } from 'react-native-gesture-handler'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const VerifyPhone = ({navigation}) => {
    const [onContryPick,setOnContryPick] = React.useState(false)
    const [contrySelected,setContrySelected] = React.useState(235)
    const [onChangeSearch,setOnchangeSearch] = React.useState('')
    const [setData,onSetData] = React.useState(CountryList)

    const selectCountry=(item,index)=>{
        const trueIndex = findTrueIndex(item,index)
        setContrySelected(trueIndex)
        setOnContryPick(!onContryPick)
        onSetData(CountryList)
        setOnchangeSearch('')
    }
    const findTrueIndex=(item,index)=>{

        const itemTerm = CountryList.indexOf(item)
        return itemTerm
    }
    const getFlagEmoji = (countryCode) =>{
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char =>  127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
    }
    const searchFilter = (text) =>{
        setOnchangeSearch(text)
        if(text){ 
            const newData = CountryList.filter((item,index) => {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            onSetData(newData);
        } else {
            onSetData(CountryList);
        }
    }
  return (
      <>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:40,fontWeight:'bold',color:customColors.red}}>Verify <Text style={{fontSize:40,fontWeight:'bold',color:customColors.black}}>phone number.</Text></Text>
                <Text style={{marginHorizontal:55,marginTop:10}}>We need to send a 4-digit code to your phone to help us keep your account safe.</Text>
            </View>
            <View style={{flex:0.2}}>
                <View style={{marginHorizontal:20,height:140,borderRadius:20,borderWidth:1,borderColor:customColors.gray}}>
                    <View style={{flex:1,borderBottomWidth:1,borderColor:customColors.gray,flexDirection:'row'}}>
                        <View style ={{flex:0.8,flexDirection:'row'}}>
                            <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:60}}>
                                    {getFlagEmoji( CountryList[contrySelected]!=null ? CountryList[contrySelected].code : 'nul')}
                                </Text>
                            </View>
                            <View style={{flex:0.7,justifyContent:'center'}}>
                                <Text style={{fontSize:20}}>{ CountryList[contrySelected]!=null ? CountryList[contrySelected].name : 'nul'}({ CountryList[contrySelected]!=null ? CountryList[contrySelected].dial_code : 'nul'})</Text>
                            </View>
                        </View>
                        <View style ={{flex:0.2,}}>
                            <TouchableOpacity onPress={()=>setOnContryPick(!onContryPick)}>
                                <View style={{height:70,justifyContent:'center',alignItems:"center"}}>
                                    <Icon name = {"ios-chevron-down"} size={30} color={customColors.red}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <TextInput
                            color='black'
                            selectionColor="black"
                            placeholderTextColor="#A8A8A8"
                            style={[styles.number,{}]}
                            placeholder="Phone Number"
                            returnKeyType="next"
                            keyboardType='number-pad'
                            secureTextEntry={false}
                            maxLength={10}
                        />
                    </View>
                </View>
            </View>
            <View style={{flex:0.1}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Confirm')}>
                    <View style={{height:60,backgroundColor:customColors.black,borderRadius:20,marginHorizontal:20,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:customColors.bg,fontSize:23,fontWeight:'bold'}}>Continue</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableWithoutFeedback>
        <CountryPicker isOn={onContryPick} setIsOn={setOnContryPick}>
            <View style={{flex:0.1}}>
                <View style={{flex:1}}>
                    <TextInput
                        color='black'
                        selectionColor="black"
                        placeholderTextColor="#A8A8A8"
                        style={[styles.searchNumber,{}]}
                        placeholder="Search"
                        returnKeyType="done"
                        value={onChangeSearch}
                        onChangeText={(onChangeSearch)=>{
                            searchFilter(onChangeSearch)
                        }}
                        keyboardType='default'
                        secureTextEntry={false}
                        maxLength={10}
                    />  
                </View>
            </View>
            <View style={{flex:0.9}}>
                <ScrollView>
                    {
                        setData.map((item,index)=>{
                            return (
                            <TouchableOpacity key={index} onPress={()=> selectCountry(item,index) }>
                                <View style={{height:80,marginBottom:5}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                                            <Text style={{fontSize:60}}>
                                            {getFlagEmoji(item.code)}
                                            </Text>
                                        </View>
                                        <View style={{flex:0.7,justifyContent:'center'}}>
                                            <Text style={{fontSize:20}}>{item.name}({item.dial_code})</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </CountryPicker>
    </>
  )
}
export default VerifyPhone
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:customColors.bg
    },
    number:{
        fontSize:20,
        height:70,
        marginLeft:30,
    },
    searchNumber:{
        fontSize:20,
        height:70,
        marginHorizontal:30,
        borderBottomWidth:0.5

    }
})