import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { theme } from '../../theme'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import nutrition_graph from "../../assets/components/meal-graph.png"
import FoodCard from '../../components/FoodCard'
import Header from '../../components/Header'

export default function MealPlannerScreen() {
  const navigation = useNavigation();
  const themeColors = theme("purple")

  return (
    <View style={{display: 'flex'}} >
        <Header title={"Meal Planner"} />

        <Text style={{color: 'black', fontSize: 22, fontWeight: 700, marginTop: 20, marginLeft: 30}}> Meal Nutritions</Text>
        <Image source={nutrition_graph} style={{alignSelf: 'center'}} />
        <View style={{display: 'flex', flexDirection: 'row'}} >
          <Text style={{color: 'black', fontSize: 22, fontWeight: 700, marginTop: 20, marginLeft: 30}}> Today Meals</Text>
          <TouchableOpacity  style={{ backgroundColor: themeColors.bgColor(1), padding: 2, left: 70, top: 15,
              borderRadius: 20, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 700, marginTop: 5, marginLeft: 10}}>Breakfast</Text>
              <Icon.ChevronDown stroke={'white'} strokeWidth={2} marginRight={10} marginLeft={15} marginTop={8}/>
            </View>
          </TouchableOpacity>
        </View>
        {/**Meal Component */}
        <View style={{display: 'flex', marginTop: 20}}>
          {/**dish */}
          <FoodCard action={"Remove"} food={"Salmon"} />
          <FoodCard action={"Remove"} food={"Milk"} />
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('MealSchedule')}
         style={{backgroundColor: themeColors.bgColor(1), justifyContent: 'center', marginTop: 20,
          alignItems: 'center', borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop: 40}}>
        <Text style={{color: 'white', fontSize: 18, marginTop: 10, fontWeight: 700, height: 40, alignSelf: "center"}}>
          Edit Meal Schedule</Text>
        </TouchableOpacity>
        
      <View>
    </View>
  </View>
  )
}