import React from 'react'
import { View, Text,StyleSheet,Dimensions,Alert } from 'react-native'
import { ScrollView, TouchableOpacity,Switch } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import NeuButton from '../components/NeuButton';
import TaskComponent from './Task/TaskComponent';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const SingleScreen = () => {

    const [taskList,setTaskList] = React.useState([]);
    const handleAddTask =(task)=>{
        setTaskList([...taskList,task])
        console.log('Task added',task);
    }
    const renderLeftActions = () => {
        
        return (
            <TouchableOpacity onPress={console.log('hi')}>
                <Icon style={styles.leftAction} name="ios-trash-outline" size={30} color="#545454" ></Icon>
            </TouchableOpacity>
          
        );
      };
    const handleDeleteTask=(index)=>{
        
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
                        let taskListTemp=[...taskList]
                        taskListTemp.splice(index,1)
                        setTaskList(taskListTemp)
                    }
                }

            ]
        )

    }
    const NeuMorph = ({children,style,sizeW,sizeH}) =>{
        return (
            <View style={styles.topShadow}>
                <View style={styles.bottomShadow}>
                    <View style={[{flexDirection:'row'},styles.inner,{width:sizeW||40,height:sizeH||40,borderRadius:15, borderWidth:0.5,borderColor:'white',borderBottomWidth:0,borderRightWidth:0},style]}>
                        {children}
                    </View>
                </View>
            </View>
        )
    }
    return (
            <View style={styles.container}>
                <View style={[styles.topView,{flexDirection:'row',marginTop:60,paddingBottom:10}]}>
                    <View style={{flex:2}}>
                        <Text style={{marginLeft:30,fontWeight:'bold',fontSize:35,color:'#545454'}}>
                            Task Note
                        </Text>

                    </View>
                    
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <NeuButton isToggle={true} onPress={handleAddTask}sizeW={60} sizeH={60} style={{borderRadius:15}} >  
                                <Icon name="md-add" size={30} color="#545454" ></Icon>
                        </NeuButton>
                    </View>
                </View>
                <ScrollView style={{flex:1}}>
                    {
                        taskList.map((item,index)=>{return <TaskComponent  onDelete={handleDeleteTask}  key={index} number={index+1} />})
                    }
                    
                </ScrollView>
                {
                     // bottom icon
                }
                <View style={[styles.bottomView,{flexDirection:'row',paddingBottom:10}]}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingBottom:10}}>
                        <NeuButton sizeW={60} sizeH={60} style={{borderRadius:15}}>
                            <Icon name="alarm-outline" size={30} color="#545454" ></Icon>
                        </NeuButton>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingBottom:10}}>
                        <NeuButton sizeW={60} sizeH={60} style={{borderRadius:15}}>
                        <Icon name="partly-sunny-outline" size={30} color="#545454" ></Icon>
                        </NeuButton>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingBottom:10}}>
                        <NeuButton sizeW={60} sizeH={60} style={{borderRadius:15}}>
                        <Icon name="ios-earth" size={30} color="#545454" ></Icon>
                        </NeuButton>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingBottom:10}}>
                        <NeuButton sizeW={60} sizeH={60} style={{borderRadius:15}}>
                        <Icon name="stopwatch-outline" size={30} color="#545454" ></Icon>
                        </NeuButton>
                    </View>
                </View>
            </View>  
    )
}

export default SingleScreen
const styles = StyleSheet.create({
    //View
    container:{
        flex:1 ,
        backgroundColor:'#E9B7B9',
    },
    topView:{
        flex:0.1,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'

    },
    buttonView:{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    bottomView:{
        flex:0.15,
        //marginTop:20,
        //justifyContent:'center',
        //alignItems:'center'

    },
   

    //Neumorphism
    inner:{
        backgroundColor:'#E0E5EC',
        alignItems:'center',
        justifyContent:'center',
    },
    topShadow:{
        flexDirection:'row',
        shadowOffset:{
            width:-5,
            height:-5,
        },
        shadowOpacity:1,
        shadowRadius:6,
        shadowColor:'#c69c9d',
    },
    bottomShadow:{
        shadowOffset:{
            width:6,
            height:6,

        },
        shadowOpacity:1,
        shadowRadius:6,
        shadowColor:'#ffd2d5'
    },
    
      
})