import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={[styles.button]}>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        width: 328,
        height: 42,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: '700'
    }
})
export default CustomButton