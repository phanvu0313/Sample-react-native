import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import { customColors } from '../../../assets/Colors'
import ActionCard from '../../../components/ActionCard/index'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <View style={{flex:1,backgroundColor:customColors.white,paddingTop:40}}>
          <View style={{flex:1,marginHorizontal:20}}>
            <ActionCard width={windowWidth-40} height={200}></ActionCard>
          </View>
          

        </View>
        <View style={styles.cuve}/>
        
      </View>
      <View style={{flex:1}}>
      </View>
      <View style={{flex:1,backgroundColor:'yellow'}}>
      </View>
    </View>
  )
}
export default Main
const styles = StyleSheet.create({
  container:{
    flex:1,
    //backgroundColor:'red',
    marginHorizontal:0,
  },
  

})