import { View, Text, StyleSheet, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'

const arrow = require('../../../assets/images/_ button.png');
const CustomMainButton = ({title, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        
      <Text style={styles.text}>{title}</Text>
      <Image source={arrow} style={styles.arrow}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#353535', 
        // marginLeft: 10,
        borderRadius: 50,
        flexDirection: 'row',
        padding: 3,
        alignItems: 'center',
        width: 'auto',
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        margin: 1,
    },
    arrow: {
        width: 10,
        height: 15,
        marginHorizontal: 5
    },
    text: {
        fontSize: 14,
        lineHeight: 17.09,
        marginHorizontal: 2,
        color: 'white',
    }
})

export default CustomMainButton