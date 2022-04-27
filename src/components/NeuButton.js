import * as React from 'react';
import PropTypes from 'prop-types';
import {useCallback, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import { TouchableOpacity } from 'react-native-gesture-handler';


const NeuButton =(props)=> {
  const {size = 12,custom = true} = props;
  //const [taskName, setTaskName] = useState(''); 
  const taskName = 'Task Task';
  const [isDown, setDown] = useState(false);
  const toggleState = (state) =>{
    if(state == true ){
        setDown(false)
    }else{
        setDown(true)
    }
  }
  const toggleState2 = () =>{
    if(props.isToggle == true){
        if(isDown == true ){
            setDown(false)
        }else{
            setDown(true)
        }
    }
  }
  
  const onSeclected =()=>{
        toggleState(isDown)
        props.onPress(taskName)
        props.onDelete()
    }
  return (
      <TouchableWithoutFeedback onPress={onSeclected} onPressIn={toggleState2} onPressOut={toggleState2}>
          {// neu la button
              props.isToggle ? (
                isDown ? (
                    <Neomorph
                        inner
                        swapShadows
                        style={{
                            shadowRadius: 6,
                            borderRadius: props.style.borderRadius,
                            backgroundColor: '#E9B7B9',
                            width: props.sizeW,
                            height: props.sizeH,
                            justifyContent:props.custom ? 'center' : '',
                            alignItems:props.custom ? 'center' : ''
                        }}
                        >
                            {props.children}
                    </Neomorph>
    
                  ) : (
                    <Neomorph
                        
                        swapShadows
                        style={{
                            shadowRadius: 6,
                            borderRadius: props.style.borderRadius,
                            backgroundColor: '#E9B7B9',
                            width: props.sizeW,
                            height: props.sizeH,
                            justifyContent:props.custom ? 'center' : '',
                            alignItems:props.custom ? 'center' : ''
                        }}
                        >
                            {props.children}
                    </Neomorph>
                  )
              ):(
                isDown ? (
                    <Neomorph
                        inner
                        swapShadows
                        style={{
                            shadowRadius: 6,
                            borderRadius: props.style.borderRadius,
                            backgroundColor: '#E9B7B9',
                            width: props.sizeW,
                            height: props.sizeH,
                            justifyContent:props.custom ? 'center' : '',
                            alignItems:props.custom ? 'center' : ''
                        }}
                        >
                            {props.children}
                    </Neomorph>
    
                  ) : (
                    <Neomorph
                        
                        swapShadows
                        style={{
                            shadowRadius: 6,
                            borderRadius: props.style.borderRadius,
                            backgroundColor: '#E9B7B9',
                            width: props.sizeW,
                            height: props.sizeH,
                            justifyContent:props.custom ? 'center' : '',
                            alignItems:props.custom ? 'center' : ''
                        }}
                        >
                            {props.children}
                    </Neomorph>
                  )
              )
            
          }
        
    </TouchableWithoutFeedback>
  );
};

NeuButton.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  sizeH: PropTypes.number,
  sizeW: PropTypes.number,
  custom: PropTypes.bool,
  onPress:PropTypes.func,
  isToggle:PropTypes.bool,
  onDelete:PropTypes.func,
};
NeuButton.defaultProps = {
    custom:true,
    onPress:()=>{},
    onDelete:()=>{},
    isToggle:false
  }

const styles = StyleSheet.create({
  buttonOuter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 12,
    shadowOffset: {width: 12, height: 12},
    shadowColor: '#c69c9d',
    shadowOpacity: 1.0,
    shadowRadius: 18,
    marginTop: 12,
    marginBottom: 12,
  },
  buttonInner: {
    backgroundColor: '#55b9f3',
    borderRadius: 12,
    shadowOffset: {width: -12, height: -12},
    shadowColor: '#62d5ff',
    shadowOpacity: 1.0,
    shadowRadius: 18,
  },
  buttonFace: {
    borderRadius: 12,
    padding: 12,
  },
});

export default NeuButton;