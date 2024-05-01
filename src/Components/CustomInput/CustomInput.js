import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({placeholder, }) => {
  return (
    <View>
        <TextInput
            placeholder={placeholder}
            
        />
    </View>
  )
}

const styles = StyleSheet.create({
    
})

export default CustomInput