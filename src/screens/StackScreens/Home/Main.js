import { StyleSheet, Text, View ,Dimensions,Image} from 'react-native'
import React from 'react'
import { customColors } from '../../../assets/Colors'
import ActionCard from '../../../components/ActionCard/index'
import {BlurView} from '@react-native-community/blur'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Main = () => {
  const SendPressed = () => {
    console.log('sendPressed');
  }
  const ScanPressed = () => {
    console.log('ScanPressed');
  }
  const RePressed = () => {
    console.log('RePressed');
  }
  return (
    <View style={styles.container}>
      <View style={{flex:0.3}}>
        <View style={{flex:1,backgroundColor:customColors.white,paddingTop:40}}>
          <View style={{flex:1,marginHorizontal:20}}>
            <ActionCard Send={SendPressed} Scan={ScanPressed} Re={RePressed} width={windowWidth-40} height={190}></ActionCard>
          </View>
        </View>
      </View>
      <View style={{flex:0.15,backgroundColor:'red', flexDirection:'row'}}>
        <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}} onPress={()=>{console.log('award pressed')}}>
            <View style={{width:63,height:63,borderRadius:35,backgroundColor:customColors.pink}} />
            <BlurView blurType='light' blurAmount={20} style={{width:70,height:70,borderRadius:35,top:15,position:'absolute',justifyContent:'center',alignItems:'center'}}>
              <Image style={{width:16,height:25,resizeMode:'cover'}} source={require('../../../assets/Award.png')}/>
            </BlurView>
          </TouchableOpacity>
        </View>
        <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}} onPress={()=>{console.log('Plus pressed')}}>
            <View style={{width:63,height:63,borderRadius:35,backgroundColor:customColors.primary_2}} />
            <BlurView blurType='light' blurAmount={20} style={{width:70,height:70,borderRadius:35,top:15,position:'absolute',justifyContent:'center',alignItems:'center'}}>
              <Image style={{width:25,height:25,resizeMode:'cover'}} source={require('../../../assets/Plus.png')}/>
            </BlurView>
          </TouchableOpacity>
        </View>
        <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}} onPress={()=>{console.log('Recive pressed')}}>
            <View style={{width:63,height:63,borderRadius:35,backgroundColor:customColors.yellow}} />
            <BlurView blurType='light' blurAmount={20} style={{width:70,height:70,borderRadius:35,top:15,position:'absolute',justifyContent:'center',alignItems:'center'}}>
              <Image style={{width:19,height:22,resizeMode:'cover'}} source={require('../../../assets/Recive.png')}/>
            </BlurView>
          </TouchableOpacity>
        </View>

      </View>
      <View style={{flex:0.55}}>
        <View style={{flex:1,backgroundColor:customColors.bg,borderRadius:60,paddingHorizontal:10,paddingVertical:20}}>
          <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold',color:customColors.primary,marginBottom:5}}>Payou Services</Text>
            <View style={{width:25,height:5,backgroundColor:customColors.primary,borderRadius:20}}></View>
          </View>
          <View style={{flex:0.9,}}>
            <View style={{}}>
              <View style={{flexDirection:'row',marginHorizontal:30,marginTop:30}}>
                <View style={{flex:1/4,justifyContent:'center',alignItems:'center'}}>
                  <TouchableOpacity>
                    <View style={{width:60,height:60,borderRadius:100,justifyContent:'center',alignItems:'center',backgroundColor:'pink'}}>
                      <Icon  name = {"md-phone-portrait"} size={30} color={customColors.pink} ></Icon>
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.textPS}>Recharge</Text>
                </View>
                <View style={{flex:1/4,justifyContent:'center',alignItems:'center'}}>
                  <TouchableOpacity>
                    <View style={{width:60,height:60,borderRadius:100,justifyContent:'center',alignItems:'center',backgroundColor:'#DCF7F2'}}>
                      <Icon  name = {"ios-rocket"} size={30} color={'#33CEFF'} ></Icon>
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.textPS}>Travelling</Text>
                </View>
                <View style={{flex:1/4,justifyContent:'center',alignItems:'center'}}>
                  <TouchableOpacity>
                    <View style={{width:60,height:60,borderRadius:100,justifyContent:'center',alignItems:'center',backgroundColor:'#FFF4B8'}}>
                      <Icon  name = {"md-business"} size={30} color={'#FADA29'} ></Icon>
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.textPS}>Hotel</Text>
                </View>
                <View style={{flex:1/4,justifyContent:'center',alignItems:'center'}}>
                  <TouchableOpacity>
                    <View style={{width:60,height:60,borderRadius:100,justifyContent:'center',alignItems:'center',backgroundColor:'#CBFFB8'}}>
                      <Icon  name = {"wifi"} size={30} color={customColors.primary_2} ></Icon>
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.textPS}>Wifi</Text>
                </View>
              </View>
              <View style={{}}>
                <View style={{flexDirection:'row',marginHorizontal:30,marginTop:30}}>
                  <View style={{flex:1/4,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity>
                      <View style={{width:60,height:60,borderRadius:100,justifyContent:'center',alignItems:'center',backgroundColor:'#DCF7F2'}}>
                        <Icon  name = {"ios-logo-electron"} size={30} color={'#33CEFF'} ></Icon>
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.textPS}>Electricity</Text>
                  </View>
                  <View style={{flex:1/4,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity>
                      <View style={{width:60,height:60,borderRadius:100,justifyContent:'center',alignItems:'center',backgroundColor:'#FFF4B8'}}>
                        <Icon  name = {"ios-film-sharp"} size={30} color={'#FADA29'} ></Icon>
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.textPS}>Movie</Text>
                  </View>
                  <View style={{flex:1/4,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity>
                      <View style={{width:60,height:60,borderRadius:100,justifyContent:'center',alignItems:'center',backgroundColor:'pink'}}>
                        <Icon  name = {"md-basket"} size={30} color={customColors.pink} ></Icon>
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.textPS}>Store</Text>
                  </View>
                  <View style={{flex:1/4,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity>
                      <View style={{width:60,height:60,borderRadius:100,justifyContent:'center',alignItems:'center',backgroundColor:'#F0EEFF'}}>
                        <Icon  name = {"ios-ellipsis-horizontal"} size={30} color={'#614BFF'} ></Icon>
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.textPS}>See all</Text>
                  </View>
                </View>
              </View>

            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
export default Main
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:customColors.white,
    marginHorizontal:0,
  },
  textPS:{
    fontWeight:'500'

  }
  

})