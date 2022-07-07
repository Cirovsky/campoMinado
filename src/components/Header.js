import React, { useState } from "react"
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import Flag from '../assets/flag.png'
import params from "../params"

export default props => {
    //console.log(props.altColor)
    const theme = params.appTheme === 'light'? 'dark' : 'light'
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress}
                    style={styles.flagButton}>
                    <View>
                        <Image source={Flag} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.flagsLeft}> = {props.flagsLeft}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                    onPress={()=> props.toogleColorScheme(theme)}>
                    <Text style={styles.buttonLabel}>Padrão de Cor</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={props.onNewGame}>
                    <Text style={styles.buttonLabel}>New Game</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgb(251, 251, 251)',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'rgb(251, 251, 251)',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#999',
        padding: 5,
        margin: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#DDD',
        fontWeight: 'bold'
    }, endGame: {
        backgroundcolor: "blue"
    }
})