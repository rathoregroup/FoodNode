import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../Components/CustomButton';
import SmallButton from '../../Components/SmallButton';
import { useNavigation } from '@react-navigation/native';
import RestaurantLogin from '../RestaurantLogin/RestaurantLogin';


const logo = require("../../../assets/images/logo.png");
const bgimage = require("../../../assets/images/bgimage.jpg");

const LandingPage = () => {
    const navigation = useNavigation();
    const Login = () =>{
        // console.warn("LoginPressed");
        navigation.navigate('FeedScreen')
    }

    const RestaurantLogin = () =>{
        // console.warn("RestaurantLoginPressed");
        navigation.navigate('RestaurantLogin')
    }

    const SignUp = () =>{
        console.warn("SignUp");
    }
    return (
        <ImageBackground source={bgimage} style={styles.bgimage}>

            <Text style={styles.welcomeText}>Welcome to foodnode</Text>
            
            <View style={styles.login}>
                <Image source={logo} style={{marginBottom: 34}}/>
                <CustomButton text='LOGIN' onPress={Login}/>
                <CustomButton text='RESTAURANT LOGIN' onPress={RestaurantLogin}/>
            </View>
            
            <View style={styles.signUp}>
                <Text style={styles.createAccountText}>create account</Text>
                <SmallButton text='SIGN UP' onPress={SignUp} bg="#E5293E"/>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bgimage: {
        flex: 1,
        alignItems: 'center',
        resizeMode: 'cover',
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
    createAccountText: {
        fontSize: 27,
        color: 'white',
        fontWeight: '700',
        marginBottom: 18
    },
    signUp: {
        alignSelf: 'flex-start',
    }
})

export default LandingPage