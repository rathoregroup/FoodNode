import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const img = require('../../../assets/images/puddingFeed.png')
const CustomDishes = ({name,price,description,img}) => {
    const [liked, setLiked] = useState(false);
    const [value, setValue] = useState('Like');
    const handleLike = () =>{
        if (!liked){
            setLiked(true)
            setValue('Liked')
        } else {
            setLiked(false)
            setValue('Like')
        }
    }
  return (
    <View style={styles.container}>
        <View style={styles.heading}>
            <Text style={{fontSize: 18, lineHeight: 21.98, fontWeight: '500'}}>{name}</Text>
            {price && <Text style={{fontSize: 14, lineHeight: 17.09, fontWeight: '500'}}>₹ {price}</Text>}
        </View>
        <Text style={{fontSize: 12, lineHeight: 14.65, fontWeight: '500', color: '#767573'}}>{description}</Text>
      

        <View style={styles.img}>
            <Image source={img} style={styles.dishImg}/>
        </View>

        <Pressable onPress={handleLike}>
            <Text style={{fontSize: 12, lineHeight: 14.65, fontWeight: liked == false ? '500' : 'bold'}}>{value}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // paddingVertical: 10,
        width: '98%',
        // marginVertical: 10,
        elevation: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        margin: 10
    },
    heading: {
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    img: {
        width: '100%',
        alignItems: 'center',
    },
    dishImg: {
        resizeMode: 'cover',
        width: '100%',
    }
})
export default CustomDishes