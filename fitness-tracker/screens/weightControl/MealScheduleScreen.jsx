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
import BackButton from '../../components/BackButton'
import FoodCard from '../../components/FoodCard'


export default function MealScheduleScreen() {
  const navigation = useNavigation()
  const themeBlue = theme('blue')
  const themeColors = theme("purple")

  return (
    <View style={{display: 'flex'}}>
      <ScrollView>
        <View style={{display: 'flex', flexDirection: 'row'}} >
          <TouchableOpacity onPress={()=>navigation.goBack()} 
                style={{ marginTop: 50, marginRight: 30, backgroundColor: 'white', padding: 2, marginLeft: 30,
                borderRadius: 9999, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
                <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.text}/>
            </TouchableOpacity>
          <Text style={{color: themeColors.text, fontSize: 25, marginLeft: 42, fontWeight: 600, marginTop: 45 }} >Meal Schedule</Text>
        </View>

        <Text style={{color: themeColors.text, fontSize: 22, fontWeight: 500, margin: 20, alignSelf: 'center' }}> Today Meals</Text>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}} >
          <Text style={{color: 'black', fontSize: 22, fontWeight: 700, marginTop: 20, marginLeft: 30}}>Breakfast</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('SetMeal')}
           style={{ backgroundColor: 'white', padding: 2, right: 40, top: 22,
              borderRadius: 20, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', height: 30}}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 700, marginLeft: 10, marginRight: 10}}>Add</Text>
          </TouchableOpacity>
        </View>
        {/**Meal Component */}
        <FoodCard action={"Remove"} food={"Salmon"} />
        <FoodCard action={"Remove"} food={"Milk"} />

        <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginTop: 30}} >
          <Text style={{color: 'black', fontSize: 22, fontWeight: 700, marginTop: 20, marginLeft: 30}}>Lunch </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SetMeal')}
          style={{ backgroundColor: 'white', padding: 2, right: 40, top: 22,
              borderRadius: 20, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', height: 30}}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 700, marginLeft: 10, marginRight: 10}}>Add</Text>
          </TouchableOpacity>
        </View>
        {/**Meal Component */}
        <FoodCard action={"Remove"} food={"Pancake"} />
        <FoodCard action={"Remove"} food={"Coffee"} />

        <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginTop: 30}} >
          <Text style={{color: 'black', fontSize: 22, fontWeight: 700, marginTop: 20, marginLeft: 30}}>Snack </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('SetMeal')}
           style={{ backgroundColor: 'white', padding: 2, right: 40, top: 22,
              borderRadius: 20, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', height: 30}}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 700, marginLeft: 10, marginRight: 10}}>Add</Text>
          </TouchableOpacity>
        </View>
        {/**Meal Component */}
        <FoodCard action={"Remove"} food={"Salad"} />
        <FoodCard action={"Remove"} food={"Pie"} />
        <FoodCard action={"Remove"} food={"Orange"} />

        <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginTop: 30}} >
          <Text style={{color: 'black', fontSize: 22, fontWeight: 700, marginTop: 20, marginLeft: 30}}>Dinner </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('SetMeal')}
          style={{ backgroundColor: 'white', padding: 2, right: 40, top: 22,
              borderRadius: 20, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', height: 30}}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 700, marginLeft: 10, marginRight: 10}}>Add</Text>
          </TouchableOpacity>
        </View>
        {/**Meal Component */}
        <FoodCard action={"Remove"} food={"Chicken Steak"} />
        <FoodCard action={"Remove"} food={"Oatmeal"} />

        <BackButton text={"Set"} />
      </ScrollView>
    </View>
  )
}