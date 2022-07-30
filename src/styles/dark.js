import { StyleSheet} from "react-native"
import params from "../params"


const normalColor =  ['#CCC','#777', '#444', '#444', '#000']
const freezeColor = ['#888', '#555', '#444','#333','#000']


const dark = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },

    regular: {
        backgroundColor: normalColor[1],
        borderLeftColor: normalColor[0],
        borderTopColor: normalColor[0],
        borderRightColor: normalColor[3],
        borderBottomColor: normalColor[3]
    },
    regularFreeze : {
        backgroundColor: freezeColor[1],
        borderLeftColor: freezeColor[0],
        borderTopColor: freezeColor[0],
        borderRightColor: freezeColor[4],
        borderBottomColor: freezeColor[4]
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    openedFreeze: {
        backgroundColor: freezeColor[2],
        borderColor: freezeColor[3],
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red'
    },
    flagSpecs:{
        width:params.blockSize/2,
        height: params.blockSize/2
    },
    
})

export default dark