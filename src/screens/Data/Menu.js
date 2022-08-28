import listItem from './ItemsInMenu'
import Tea from './ItemsTea'
import Blender from './ItemsBlender'
import Coffee from './ItemsCoffee'
import Soda from './ItemsSoda'
export default [

    {
        id:'1',
        title:'Coffee',
        description:'abc',
        image: require('../../assets/1.png'),
        list :Coffee
                

    },
    {
        id:'2',
        title:'Soda',
        description:'abc',
        image: require('../../assets/2.png'),
        list :Soda

    },
    {
        id:'3',
        title:'Blender',
        description:'abc',
        image: require('../../assets/3.png'),
        list :Blender 
    },
    {
        id:'4',
        title:'Tea',
        description:'abc',
        image: require('../../assets/4.png'),
        list :Tea

    },
    {
        id:'5',
        title:'Fresh',
        description:'abc',
        image: require('../../assets/5.png'),
        list :listItem

    },
]