import React, {useState} from "react";
import { View, Text, TouchableWithoutFeedback, Image, Appearance} from 'react-native'
import Mine from "./Mine"
import Flag from "../assets/flag.png"
import themes from "../styles"



export default props => {
    const deviceTheme = Appearance.getColorScheme()

    const theme = themes[deviceTheme]
 
    const { mined, opened, nearMines, exploded, flagged,onCheckWon, onCheckLost} = props
    const styles = theme
    const styleField = [styles.field]
    
    if (onCheckWon|| onCheckLost){
        if (opened) styleField.push(styles[`openedFreeze`])
        if (!opened && !exploded) styleField.push(styles[`regularFreeze`])
    }else{
        if (opened) styleField.push(styles[`opened`])
        if (!opened && !exploded) styleField.push(styles[`regular`])
    }
        if (exploded) styleField.push(styles.exploded)
   
    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = 'rgb(5, 45, 165)'
        if (nearMines == 2) color = 'rgb(10, 95, 32)'
        if (nearMines > 2 && nearMines < 6) color = 'rgb(135, 24, 1)'
        if (nearMines >= 6) color = 'rgb(165, 4, 48)'
    }

    return (
        <TouchableWithoutFeedback 
        onPress={props.onOpen}
        onLongPress={props.onSelect}
        >
            <View style={[styleField,{justifyContent: 'center', alignItems: 'center'}]}>
            {!mined && opened && nearMines > 0 ?
                <Text style={[styles.label, { color: color }]}>
                    {nearMines}
                </Text> : false}
            {mined && opened ? <Mine/> : false}
            {flagged && !opened ? <Image source={Flag} style={styles.flagSpecs}/> : false}
        </View>
        </TouchableWithoutFeedback>
    )
}



    