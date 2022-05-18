import { StyleSheet, Text, View,TextInput,TouchableWithoutFeedback ,Keyboard} from 'react-native'
import React from 'react'
import { customColors } from '../../../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

const HistoryMain = () => {
    const [search, onChangeSearch] = React.useState("");
  return (
    <View style={styles.container}>
        
            <View style={{flex:1}}>
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
                <View style={{flex:0.9}}>
                    <ScrollView>
                        <Text>hihoha</Text>
                    </ScrollView>

                </View>

            </View>

    </View>
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
})