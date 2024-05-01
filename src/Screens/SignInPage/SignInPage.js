import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import CustomInput from '../../Components/CustomInput';

const bgImage = require('../../../assets/images/bgimage.jpg');
const logo = require("../../../assets/images/logo.png");
const SignInPage = () => {
  return (
    <ImageBackground source={bgImage} style={styles.bgimage}>
        <Text style={styles.welcomeText}>Welcome to foodnode</Text>
        
        <View style={styles.login}>
                <Image source={logo} style={{marginBottom: 34}}/>
                <CustomInput />
            </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    bgimage:{
        flex: 1,
        resizeMode:'cover',
        alignItems: 'center',
        padding: 20,
    },
    welcomeText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 17,
    },
    login: {
        alignItems: 'center',
        padding: 20,
        flex: 1,
        justifyContent: 'center'
    },
})

export default SignInPage