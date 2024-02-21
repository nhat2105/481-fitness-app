import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { theme } from '../theme'

import coffee from "../assets/components/coffee.png"
import salad from "../assets/components/salad.png"
import oatmeal from "../assets/components/oatmeal.png"
import orange from "../assets/components/orange.png"
import pancake from "../assets/components/pancake.png"
import steak from "../assets/components/steak.png"
import milk from "../assets/components/milk_small.png"
import salmon from "../assets/components/salmon.png"
import pie from "../assets/components/apple-pie.png"


export default function FoodCard({food, action}) {
    const themeColors = theme('purple')
    let imageSource;

    switch (food) {
    case 'Pancake':
        imageSource = pancake;
        break;
    case 'Salmon':
        imageSource = salmon;
        break;

    case 'Coffee':
        imageSource = coffee;
        break;
    case 'Salad':
        imageSource = salad;
        break;

    case 'Oatmeal':
        imageSource = oatmeal;
        break;
    case 'Orange':
        imageSource = orange;
        break;

    case 'Milk':
        imageSource = milk;
        break;
    case 'Pie':
        imageSource = pie;
        break;

    default:
        imageSource = steak;
        break;
    }

  return (
    <View style={{backgroundColor: 'white', padding: 2, left: 30, top: 5, marginRight: 50, marginTop: 20,
    borderRadius: 20, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', position: 'relative'}}>
      <View style={{display: 'flex', flexDirection: 'row'}} >
          <Image source={imageSource} style={{alignSelf:'center', marginLeft: 30}} />
          <View marginLeft={20} marginTop={11}>
              <Text style={{fontSize: 16, fontWeight: 700, alignSelf: 'center', left: 40}} >{food}</Text>
              <Text style={{fontWeight: 500, color:"gray", alignSelf: 'center', left: 40}} >100 Cal</Text>
          </View>
      </View>
      <TouchableOpacity style={{backgroundColor: themeColors.bgColor(1), position: 'absolute', right: 20, top: 10,
           borderRadius: 20, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
          <Text style={{color: 'black', marginLeft: 5, marginRight: 5, marginBottom: 5,
          marginTop: 9, fontSize: 14, fontWeight: 700}}>{action}</Text>
      </TouchableOpacity>
  </View>
  )
}