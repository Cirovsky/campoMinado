import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import params from "../params"
import Mine from "./Mine"
import Flag from "./Flag"

export default props => {
    const { mined, opened, nearMines, exploded, flagged,onCheckWon, onCheckLost} = props

    const styleField = [styles.field]
    // outros estilos aqui
    if (onCheckWon|| onCheckLost){
        if (opened) styleField.push(styles.openedFreeze)
        if (!opened && !exploded) styleField.push(styles.regularFreeze)
    }else{
        if (opened) styleField.push(styles.opened)
        if (!opened && !exploded) styleField.push(styles.regular)
    }
    if (exploded) styleField.push(styles.exploded)
    if (flagged) styleField.push(styles.flagged)
    
    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = 'rgb(65,105,225)'
        if (nearMines == 2) color = '#2b520F'
        if (nearMines > 2 && nearMines < 6) color = '#F9060A'
        if (nearMines >= 6) color = '#F221A9'
    }

    return (
        <TouchableWithoutFeedback 
        onPress={props.onOpen}
        onLongPress={props.onSelect}
        >
            <View style={styleField}>
            {!mined && opened && nearMines > 0 ?
                <Text style={[styles.label, { color: color }]}>
                    {nearMines}
                </Text> : false}
            {mined && opened ? <Mine /> : false}
            {flagged && !opened ? <Flag/> : false}
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333'
    },
    regularFreeze : {
        backgroundColor: '#555',
        borderLeftColor: '#888',
        borderTopColor: '#888',
        borderRightColor: '#000',
        borderBottomColor: '#000'
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    openedFreeze: {
        backgroundColor: '#444',
        borderColor: '#333',
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
    }
})