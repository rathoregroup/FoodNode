import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import CustomSearchBar from '../../Components/CustomSearchBar'
import Special from '../../Components/Special'
import Restaurant from '../../Components/Restaurant'


const FeedScreen = () => {
  const chandras = {
    name: "Chandras Food",
    restaurantImg: require('../../../assets/images/background.png'),
    type: 'Indian and Italian',
    status: 'Open',
    time: '9am-9pm',
    newDish: true,
    dishImg: require('../../../assets/images/pudding.png'),
  }
  const pastaPlaza = {
    name: "Pasta Plaza",
    restaurantImg: require('../../../assets/images/pasta-bg.png'),
    type: 'Italian',
    status: 'Open',
    time: '7am-10pm',
  }
  const fastFoodPlaza = {
    name: "FastFood Plaza",
    restaurantImg: require('../../../assets/images/fastfood.jpg'),
    type: 'Chinese and South Indian',
    status: 'Open',
    time: '7am-10pm',
    newDish: true,
    dishImg: require('../../../assets/images/new1.jpg'),
  }
  return (

    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center', }} showsVerticalScrollIndicator={false}>
        
        <CustomSearchBar />
        <Special scheme='12 restaurants posted in your area'/>
        <Restaurant {...chandras}/>
        <Restaurant {...pastaPlaza}/>
        <Restaurant {...fastFoodPlaza}/>
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: 'white',
      // overflow: 'hidden',
    },
  })

export default FeedScreen