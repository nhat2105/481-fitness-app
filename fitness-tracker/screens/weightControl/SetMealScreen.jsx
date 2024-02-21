import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { theme } from '../../theme'
import * as Icon from 'react-native-feather'

import { useNavigation } from '@react-navigation/native'
import coffee from "../../assets/components/coffee.png"
import salad from "../../assets/components/salad.png"
import oatmeal from "../../assets/components/oatmeal.png"
import orange from "../../assets/components/orange.png"
import pancake from "../../assets/components/pancake.png"
import steak from "../../assets/components/steak.png"
import milk from "../../assets/components/milk.png"
import salmon from "../../assets/components/salmon.png"
import pie from "../../assets/components/apple-pie.png"
import FoodCard from '../../components/FoodCard'

export default function SetMealScreen() {
   const navigation = useNavigation()
  const themeBlue = theme('blue')
  const themeColors = theme("purple")
  return (
    <View>
        <View style={{display: 'flex', flexDirection: 'row'}} >
          <TouchableOpacity onPress={()=>navigation.goBack()} 
                style={{ marginTop: 50, marginRight: 30, backgroundColor: 'white', padding: 2, marginLeft: 30,
                borderRadius: 9999, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
                <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.text}/>
            </TouchableOpacity>
          <Text style={{color: themeColors.text, fontSize: 25, marginLeft: 42, fontWeight: 600, marginTop: 45 }} >Meal Setter</Text>
        </View>
        <FoodCard food={"Pancake"} action={"Add"} />
        <FoodCard food={"Milk"} action={"Add"} />
        <FoodCard food={"Coffee"} action={"Add"} />
        <FoodCard food={"Chicken Steak"} action={"Add"} />
        <FoodCard food={"Orange"} action={"Add"} />
        <FoodCard food={"Salad"} action={"Add"} />
        <FoodCard food={"Oatmeal"} action={"Add"} />
        <FoodCard food={"Pie"} action={"Add"} />
        <FoodCard food={"Salmon"} action={"Add"} />
        
    </View>
  )
}