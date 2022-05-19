import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { customColors } from '../../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur'
import Popup from '../../../components/FilterSheet/Popup';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OfferMain = () => {
    const [cardList,setCardList] = React.useState(['1','2','3','4','5','6']);
    const [topCard,setTopCard] = React.useState(['1','2','3']);
    const [amount, onChangeAmount] = React.useState("");
    const listFilter = ['All','Food','Entertainment','Shopping','Health','Transport','Other']
    const [currentFilter, setCurrentFilter] = React.useState(0);
    const [isFilterOn,setIsFilterOn] =React.useState(false)
    const swipeableRef = React.useRef(null);

   const toogleFilter=()=>{
       setIsFilterOn(!isFilterOn)
   }
    const ItemInScrollView = (props) => {
        return(
            <Swipeable
            ref={swipeableRef}
            >
                <View style={[{flex:1,height:90,backgroundColor:customColors.white},styles.cardView]}>
                    <View style={{flex:0.3,}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <View style={styles.visaView}>
                                <Icon  name = {"logo-ionitron"} size={60} color={customColors.primary} ></Icon>
                            </View>
                            
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,paddingLeft:20}}>
                            <Icon  name = {"logo-sass"} size={20} color={'black'} ></Icon>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{fontWeight:'bold'}}>--{props.item}--</Text>

                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Text style={{fontSize:13}}>no: *****567</Text>
                            <Text style={{marginLeft:40,fontSize:12,color:customColors.primary}}>Exp Date: 15/03</Text>

                        </View>

                    </View>
                    <View style={{flex:0.2,alignItems:'flex-end'}}>
                        <Icon  name = {"ios-chevron-forward"} size={20} color={customColors.text} ></Icon>
                    </View>
                </View>
            </Swipeable>
        )
    }
    const ItemsTopScrollView = (props) => {
        return(
            <View style={[{flex:1,width:windowWidth/1.5,backgroundColor:customColors.white},styles.topCardView]}>
                <LinearGradient style={{flex:1,marginHorizontal:5,marginVertical:20,borderRadius:20}} colors={['#ff4b1f', '#ff9068']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <BlurView blurType='ultraThinMaterialLight' blurAmount={20} style={{flex:1}}>
                    
                    </BlurView>
                </LinearGradient>
            </View>
            
        )
    }
    const ItemListFilter = (props) => {
        const chooseFilter=()=>{
            props.setCurrentFilter(props.index)
            setTimeout(() => {
                props.setIsFilterOn(false)
                
            }, 500);
            

        }
        return(
            <View style={[{flex:1,width:windowWidth/1.5,height:70,backgroundColor:customColors.white,marginVertical:10},styles.topCardView]}>
               <View style={{flex:1,flexDirection:'row'}}>
                   <View style={{flex:0.7,justifyContent:'center',marginLeft:40}}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>{props.item}</Text>
                   </View>
                   <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
                       <View style={{backgroundColor:customColors.bg,width:35,height:35,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>chooseFilter()}>
                                <Icon  name = {"checkmark-sharp"} size={30} color={props.index==props.currentFilter? customColors.primary_2 : customColors.bg} ></Icon>
                            </TouchableOpacity>
                       </View>
                   </View>
               </View>
            </View>
            
        )
    }
  return (
    <>
    <View style={styles.container}>
        <View style={styles.flatTop}>
            <ScrollView 
            horizontal={true} 
            pagingEnabled 
            showsHorizontalScrollIndicator={false} 
            snapToInterval={windowWidth/1.5}  
            disableIntervalMomentum
            >
                <View style={{width:windowWidth/6}} />
                {
                    topCard.map((item,index)=>{
                        return (
                             <ItemsTopScrollView key={index} index={index} item={item}/>
                        )
                    })
                }
                <View style={{width:windowWidth/6}} />
            </ScrollView>
            
        </View>
        <View style={{flex:0.8}}>
            <View style={styles.offerTitleView}>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={styles.offerTitle}>Top Offer</Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end'}}>
                    <TouchableOpacity onPress={()=>toogleFilter()}>
                        <View style={[styles.filter,{backgroundColor:customColors.primary}]}>
                            <View style={{flex:0.8,justifyContent:'center',alignItems:'center'}}>
                                <Text style={[styles.offerTitle,{fontSize:17,color:'white'}]}>{listFilter[currentFilter]}</Text>
                            </View>
                            <View style={{flex:0.2}}>
                                <Icon name = {"ios-chevron-down-outline"} size={20} color={customColors.white} ></Icon>
                            </View>
                            
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.scrollStyle}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  {
                    cardList.map((item,index)=>{
                        return (
                            <ItemInScrollView key={index} index={index} item={item}/>
                        )
                    })
                  }
                  <View style={{height:350}}>
                      <View style={{flex:0.15,justifyContent:'center'}}>
                          <Text style={styles.offerTitle}>Expire Soon</Text>
                      </View>
                      <View style={styles.expireSoon}>
                          <View style={{flex:1,backgroundColor:'white',marginHorizontal:10,marginVertical:10,flexDirection:'row'}}>
                              <View style={{flex:1/3}}>
                                <TouchableOpacity >
                                    <LinearGradient style={{marginHorizontal:5,marginVertical:20,borderRadius:20,height:150,width:(windowWidth-60)/3}} colors={['#FF9999', '#FFDE9D']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                                        
                                    </LinearGradient>
                                </TouchableOpacity>
                              </View>
                              <View style={{flex:1/3}}>
                                <TouchableOpacity >
                                    <LinearGradient style={{marginHorizontal:5,marginVertical:20,borderRadius:20,height:150,width:(windowWidth-60)/3}} colors={['#00B4DB', '#0083B0']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                                        
                                    </LinearGradient>
                                </TouchableOpacity>
                              </View><View style={{flex:1/3}}>
                                <TouchableOpacity >
                                    <LinearGradient style={{marginHorizontal:5,marginVertical:20,borderRadius:20,height:150,width:(windowWidth-60)/3}} colors={['#d9a7c7', '#fffcdc']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                                        
                                    </LinearGradient>
                                </TouchableOpacity>
                              </View>

                          </View>
                      </View>
                      <View style={{flex:0.2}} />

                  </View>
                  </ScrollView>
            </View>
        </View>

    </View>
    <Popup isOn={isFilterOn} setIsOn={setIsFilterOn}>
        <View style={styles.containerPopup}>
        {
            listFilter.map((item,index)=>{
                return (
                    <ItemListFilter key={index} index={index} item={item} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} setIsFilterOn={setIsFilterOn} />
                )
            })
        }
        </View>
    </Popup>
    </>
  )
}

export default OfferMain

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:customColors.white
       
    },
    flatTop:{
        flex:0.2,
        
    },
    offerTitleView:{
        flex:0.1,
        flexDirection:'row',
        marginHorizontal:10,
        
    },
    offerTitle:{
        fontWeight:'bold',
        fontSize:25

    },
    scrollStyle:{
        flex:0.9,
        
        marginHorizontal:10
    },
    filter:{
        flex:1,
        flexDirection:'row',
        width:160,
        marginVertical:10,
        backgroundColor:'white',
        borderWidth:1.5,
        borderColor:customColors.primary,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    
    visaView:{
        width:70,
        height:70,
        backgroundColor:'#FFEAF2',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: customColors.primary,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.34,
        shadowRadius: 3.27,

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
    },
    expireSoon:{
        flex:0.65,
        
    },
    topCardView:{
        flex:1,
        borderRadius:10,
    },
    containerPopup:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20
    }
})