import { View, Text, StyleSheet, TextInput,Image } from 'react-native'
import React from 'react'

const search = require('../../../assets/images/Searchbar.png')
const CustomSearchBar = () => {
  return (
    <View style={styles.container}>
        <TextInput
            placeholder='search'
            style={styles.input}     
        />
        <Image source={search} style={styles.search}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 7,
        height: 30,
        width: '90%',
        // display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },  
    input: {
        marginLeft: 10,
        fontSize: 17,
    },
    search: {
        height: 20,
        width: 20,
        margin: 10
    }
})

export default CustomSearchBar