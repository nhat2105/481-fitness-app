import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import FoodCard from '../../components/FoodCard'
import Header from '../../components/Header'

export default function SetMealScreen() {
  const navigation = useNavigation()
  return (
    <View>
        <Header title={"Meal Setter"} />
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