import { View, Text, StyleSheet, TextComponent, Image, Pressable } from 'react-native'
import React from 'react'

const play = require('../../../assets/images/Play.png');
const nfcBox = require('../../../assets/images/Group 3.png')
const nfc = require('../../../assets/images/Group 4.png')
const Special = ({scheme}) => {
    const special = () => {
        console.log("special pressed")
    }
  return (
    <View>
        <View style={styles.innerContainer}>
            <View style={styles.specialBox}>
                <Text style={styles.specialText}>today's special</Text>
                <Text style={styles.para}>{scheme}</Text>
            </View>
            <Pressable onPress={special}>
                <Image source={play} style={styles.play}/>
            </Pressable>
        </View>
        
        <View style={styles.nfc}>
            <Image source={nfcBox}/>
            <Image source={nfc}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: '#F3D292A1',
        width: '95%',
        // borderWidth: 2,
        borderRadius: 12,
        // borderColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '30%',
    },  
    specialText: {
        fontSize: 18,
        fontWeight: '700',
    },
    para: {
        fontSize: 14,
        fontWeight: '400',
    },
    specialBox: {

    },
    play: {
        height: 32,
        width: 32,
    },
    nfc: {
        margin: 30,
        // marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    
})

export default Special