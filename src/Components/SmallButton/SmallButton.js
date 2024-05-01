import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const SmallButton = ({onPress, text, bg}) => {
    
    return (
        <Pressable onPress={onPress} style={[styles.button,{backgroundColor: bg}]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
      )
}


const styles = StyleSheet.create({
    button: {
        width: 122,
        height: 35,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginHorizontal: 10
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
    }
})
export default SmallButton