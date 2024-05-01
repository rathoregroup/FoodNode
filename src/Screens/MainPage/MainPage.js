import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import CustomMainButton from '../../Components/CustomMainButton/CustomMainButton'
import CustomDishes from '../../Components/CustomDishes'
import { useNavigation } from '@react-navigation/native';

const back = require('../../../assets/images/Back Button.png')
const restaurantImg = require('../../../assets/images/background.png')
const img = require('../../../assets/images/puddingFeed.png')

const MainPage = ({name, img}) => {
    const navigation = useNavigation();
    const handlePress = () => {
        console.warn("Pressed");
    }
    const backPress = () => {
        // console.warn("Pressed");
        navigation.navigate('FeedScreen')
    }

    const pastry = {
        name: "Chocolate Pastry",
        price: 30,
        description: "chocolate strawberry flavor",
        img: require('../../../assets/images/puddingFeed.png')
    }
    const tikki = {
        name: "Alloo Tikki",
        price: 30,
        // description: "chocolate strawberry flavor",
        img: require('../../../assets/images/alloo tikki.png')
    }
    const cupcake = {
        name: "Mini Veg Burger",
        price: 12,
        description: "Veggie pattie with mushrooms, olives, corns and green papper ",
        img: require('../../../assets/images/small burger.png')
    }
    const burger = {
        name: "Cupcake",
        price: 50,
        description: "Sweet",
        img: require('../../../assets/images/cupcake.png')
    }
  return (
    <View style={styles.container}>
        <Pressable style={styles.back} onPress={backPress}>
            <Image source={back} style={styles.imgBack}/>
        </Pressable>

        <ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false} contentContainerStyle>
            <View style={styles.heading}>
                <Image source={restaurantImg} style={styles.restImg}/>
                <View style={styles.title}>
                    <Text style={styles.name}>Chandra Foods</Text>
                    <CustomMainButton title="Pick Up" onPress={handlePress}/>
                    <CustomMainButton title="Availability" onPress={handlePress}/>
                    <CustomMainButton title="Today’s Special" onPress={handlePress}/>
                </View>
            </View>

            <View style={styles.menu}>
                <Text style={{fontSize: 26, lineHeight: 31.75, fontWeight: '500', color: '#11111178'}}>MENU</Text>
            </View>
            
            <View style={styles.option}>
                <Text style={{fontSize: 12, fontWeight: 400, lineHeight: 14.32, color: '#11111178'}}>NEW DISH</Text>
                <Text style={{fontSize: 12, fontWeight: 400, lineHeight: 14.32, color: '#11111178'}}>OFFER</Text>
                <Text style={{fontSize: 12, fontWeight: 'bold', lineHeight: 14.32, color: 'black', }}>POSTS</Text>
            </View>

            <View style={styles.dish}>
                <CustomDishes {...pastry}/>
                <CustomDishes {...tikki}/>
                <CustomDishes {...cupcake}/>
                <CustomDishes {...burger}/>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 5,
    },
    back: {
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        width: '100%'
    },
    imgBack: {
        width: 13,
        height: 29,
    },
    innerContainer: {
        backgroundColor: 'white',
        flex: 1,
        padding: 0,
    },
    heading: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    restImg: {
        width: 94,
        height: 94,
        borderRadius: 50,
        resizeMode: 'cover',
    }, 
    title: {
        paddingLeft: 10,
        backgroundColor: 'white',
        flexWrap: 'wrap'
    },
    name: {
        fontSize: 33,
        lineHeight: 39.9,
        fontWeight: '200',
    },
    menu: {
        alignItems: 'center',
        backgroundColor: 'white'
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: '20%',
        marginTop: 20
    },
    dish: {
        alignItems: 'center'
    }
})
export default MainPage