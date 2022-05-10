import {Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ITEM_SIZE = windowWidth/2+50+100;
const SPACING = (windowWidth-ITEM_SIZE)/2;

export default [
    {
        id:'spcacing',
        
    },
    {
        id:'1',
        title:'hihi',
        description:'abc',
        image: require('../../assets/temp.png'),

    },
    {
        id:'2',
        title:'hihi',
        description:'abc',
        image: require('../../assets/sec.png'),

    },
    {
        id:'3',
        title:'hihi',
        description:'abc',
        image: require('../../assets/thir.png'),
    },
    {
        id:'spcacingback'
    }
]