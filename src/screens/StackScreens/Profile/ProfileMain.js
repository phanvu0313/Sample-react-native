import { StyleSheet, Text, View,Image,Dimensions,TextInput } from 'react-native'
import React from 'react'
import { customColors } from '../../../assets/Colors'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import Popup from '../../../components/FilterSheet/Popup';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfileMain = () => {
    const [name,setName] = React.useState('Vũ Phan')
    const [sdt,setSdt] = React.useState('0969128277')
    const [address,setAddress] = React.useState('77A,Hai Thuong Lan Ong')
    const [onChangeName,setOnChangeName] = React.useState(false)
  return (
    <View style={styles.container}>
        <View style={{flex:1}}>
            <View style={{flex:0.2,flexDirection:'row'}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:40,opacity:0.6}}>Chào Vũ</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:120,height:120,borderRadius:100,backgroundColor:customColors.white,justifyContent:'center',alignItems:'center'}}>
                        <Image style={{width:80,height:80,resizeMode:'cover'}} source={require('../../../assets/ava.png')} />
                    </View>
                </View>
            </View>
            <View style={{flex:0.8}}>
                <ScrollView>
                <View style={{height:100,width:windowWidth,marginVertical:10}}>
                        <View style={{flex:0.3,marginHorizontal:40}}>
                            <Text style={{fontSize:20,fontWeight:'500',opacity:0.5}}>Tên</Text>
                        </View>
                        <View style={{flex:0.7}}>
                            <View style={[styles.TextInput,{justifyContent:'center'}]}>
                                <Text style={{fontSize:20,}}>{name}</Text>
                            </View>
                            <View style={{position:'absolute',left:windowWidth-100,borderRadius:15,paddingHorizontal:10,paddingVertical:10}}>
                                <TouchableOpacity onPress={()=>setOnChangeName(!onChangeName)}>
                                    <View style={{flex:1,paddingHorizontal:10,paddingVertical:10,backgroundColor:customColors.yellow,borderRadius:300}}>
                                        <Icon name={"pencil-sharp"} size={25} color={customColors.black} ></Icon>
                                    </View>
                                </TouchableOpacity>
                                <Popup height={50} width={windowWidth-80} isOn={onChangeName} setIsOn={setOnChangeName}>
                                    <TextInput
                                        color='black'
                                        selectionColor="black"
                                        placeholderTextColor="#000"
                                        style={[styles.TextInput]}
                                        value={name}
                                        onChangeText={setName}
                                        returnKeyType="done"
                                        editable={onChangeName}
                                        secureTextEntry={false}
                                    />
                                </Popup>
                                
                            </View>

                        </View>

                    </View>
                    <View style={{height:100,width:windowWidth,marginVertical:10}}>
                        <View style={{flex:0.3,marginHorizontal:40}}>
                            <Text style={{fontSize:20,fontWeight:'500',opacity:0.5}}>Số Điện Thoại</Text>
                        </View>
                        <View style={{flex:0.7}}>
                            <View style={[styles.TextInput,{justifyContent:'center'}]}>
                                <Text style={{fontSize:20,}}>{sdt}</Text>
                            </View>
                            <View style={{position:'absolute',left:windowWidth-100,borderRadius:15,paddingHorizontal:10,paddingVertical:10}}>
                                <TouchableOpacity onPress={()=>setOnChangeName(!onChangeName)}>
                                    <View style={{flex:1,paddingHorizontal:10,paddingVertical:10,backgroundColor:customColors.yellow,borderRadius:300}}>
                                        <Icon name={"pencil-sharp"} size={25} color={customColors.black} ></Icon>
                                    </View>
                                </TouchableOpacity>
                                <Popup height={50} width={windowWidth-80} isOn={onChangeName} setIsOn={setOnChangeName}>
                                    <TextInput
                                        color='black'
                                        selectionColor="black"
                                        placeholderTextColor="#000"
                                        style={[styles.TextInput]}
                                        value={sdt}
                                        onChangeText={setSdt}
                                        returnKeyType="done"
                                        editable={onChangeName}
                                        secureTextEntry={false}
                                    />
                                </Popup>
                                
                            </View>

                        </View>

                    </View>
                    <View style={{height:100,width:windowWidth,marginVertical:10}}>
                        <View style={{flex:0.3,marginHorizontal:40}}>
                            <Text style={{fontSize:20,fontWeight:'500',opacity:0.5}}>Địa Chỉ</Text>
                        </View>
                        <View style={{flex:0.7}}>
                            <View style={[styles.TextInput,{justifyContent:'center'}]}>
                                <Text style={{fontSize:20,}}>{address}</Text>
                            </View>
                            <View style={{position:'absolute',left:windowWidth-100,borderRadius:15,paddingHorizontal:10,paddingVertical:10}}>
                                <TouchableOpacity onPress={()=>setOnChangeName(!onChangeName)}>
                                    <View style={{flex:1,paddingHorizontal:10,paddingVertical:10,backgroundColor:customColors.yellow,borderRadius:300}}>
                                        <Icon name={"pencil-sharp"} size={25} color={customColors.black} ></Icon>
                                    </View>
                                </TouchableOpacity>
                                <Popup height={50} width={windowWidth-80} isOn={onChangeName} setIsOn={setOnChangeName}>
                                    <TextInput
                                        color='black'
                                        selectionColor="black"
                                        placeholderTextColor="#000"
                                        style={[styles.TextInput]}
                                        value={address}
                                        onChangeText={setAddress}
                                        returnKeyType="done"
                                        editable={onChangeName}
                                        secureTextEntry={false}
                                    />
                                </Popup>
                                
                            </View>

                        </View>

                    </View>

                </ScrollView>

            </View>

        </View>
    </View>
  )
}

export default ProfileMain

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:customColors.bg
    },
    TextInput:{
        flex:1,
        borderRadius:20,
        marginHorizontal:20,
        paddingHorizontal:20,
        fontSize:20,
        backgroundColor:customColors.white

    }
})