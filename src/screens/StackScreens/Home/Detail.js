import { StyleSheet, Text, View ,Image,Dimensions} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { customColors } from '../../../assets/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler';
import DetailAction from '../../../components/DetailsAction/DetailAction';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Detail = ({navigation,route}) => {
    const {currentIndex , item} = route.params
    const [quantity,setQuantity] = React.useState(1);
  return (
    <View style={styles.container}>
        <View style={{flex:0.05,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:windowWidth/3,height:6,borderRadius:100,backgroundColor:customColors.gray}}></View>
        </View>
        
    </View>
  )
}
export default Detail

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:customColors.bg,
    }
})