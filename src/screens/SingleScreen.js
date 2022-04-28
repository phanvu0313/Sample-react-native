import React from 'react'
import { View, Text,StyleSheet,Dimensions,Alert } from 'react-native'
import { ScrollView, TouchableOpacity,Switch } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const SingleScreen = () => {

    const [taskList,setTaskList] = React.useState([]);
    const handleAddTask =(task)=>{
        setTaskList([...taskList,task])
        console.log('Task added',task);
    }
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
    return (
            <View style={styles.container}>
               
            </View>  
    )
}

export default SingleScreen
const styles = StyleSheet.create({
    //View
    container:{
        flex:1 ,
        backgroundColor:'#e6e7ee',
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