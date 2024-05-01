import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const button = require('../../../assets/images/_ button.png')

const popper = require('../../../assets/images/partypopper.png')

const Restaurant = ({restaurantImg, name, type, status, time, newDish=false, dishImg}) => {
    const navigation = useNavigation();
    const restaurantPress = () => {
        // console.log(`${name} Pressed`)
        navigation.navigate('MainPage')
    }
    const newDishPress = () => {
        console.log(`new Dish Pressed`)
    }
    const special = () => {
        console.log(`special Pressed`)
    }

    const handlePressIn = () => {
        opacity.value = withSpring(0.8);
      };
    
      const handlePressOut = () => {
        opacity.value = withSpring(1);
      };

    

  return (

    <View style={styles.container}>
        <Pressable  onPress={restaurantPress}>
            <View style={styles.innerContainer}>
                <Image source={restaurantImg} style={styles.bg}/>
            </View>
            <View style={styles.title}>
                <Text style={{fontSize:40, fontWeight: '700',}}>{name}</Text>
                <Text style={{fontSize:18, fontWeight: '500',}}>{type}</Text>
                <Text style={{fontSize:18, fontWeight: '500',}}>{`${status} ${time}`}</Text>
            </View>
        </Pressable>

        <View style={styles.furtherdetails}>
            <Text style={{fontSize:18, fontWeight: '700', color: 'gray'}}>today's special</Text>
            <Pressable onPress={special}>
                <Image source={button} style= {{marginRight: 40, resizeMode: 'cover'}}/>
            </Pressable>
        </View>
        
        { newDish &&
            <Pressable style={styles.newDish} onPress={newDishPress}>
                <Text style={{fontSize: 14, fontWeight: '700', lineHeight: 16.1, color: 'gray'}}>NEW DISH</Text>
                <View style={styles.newImg}>
                    <Image source={popper} style={styles.popper}></Image>
                    <Image source={dishImg} style={styles.newFeed}/>
                </View>
            </Pressable>
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '98%',
        elevation: 8,
        display: 'flex',
        // display: 'flex',
        backgroundColor: 'white',
        margin: 10,
        padding: 5,
        borderRadius: 7
    },
    bg: {
        resizeMode: 'cover',
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        height: 170,
    },
    title:{
        paddingLeft: 10,
    },
    furtherdetails:{
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    newDish: {
        paddingLeft: 10,
        margin: 10
    },
    newImg: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    newFeed: {
        borderRadius: 10,
        resizeMode: 'cover',
        width: 189,
        height: 125,
    }
})
export default Restaurant