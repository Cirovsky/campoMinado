import React from "react"
import { View, StyleSheet} from "react-native"
import Field from "./Field"

export default props => {
    
    const checkWon = props.isWon
    const checkLost = props.isLost
    const checkTheme = props.theme
    console.log(checkTheme)
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) =>{
            return <Field {...field} key={c} 
            onOpen = {()=>props.onOpenField(r,c)}
            onSelect = { () => props.onSelectField(r,c)}
            onCheckWon = {checkWon}
            onCheckLost = {checkLost}
            />
            
        })
        return <View key={r} style={{flexDirection:'row'}}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        //flexDirection: 'row',
        backgroundColor: '#EEE',
    }
})