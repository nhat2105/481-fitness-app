import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import pic from "../assets/components/Workout-Pic.png"
import pic2 from "../assets/components/Workout-Pic2.png"
import { theme } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WorkoutCard({title, text}) {
    const navigation = useNavigation()
    const themeColors = theme('blue')
    let imageSource;

    switch (title) {
    case 'full':
        imageSource = pic;
        break;

    case 'upper':
        imageSource = pic2;
        break;

    default:
        imageSource = pic;
        break;
    }

  return (
    <View style={{backgroundColor: 'white', padding: 2, left: 30, top: 5, marginRight: 50, marginBottom: 20,
    borderRadius: 20, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
      <View style={{display: 'flex', flexDirection: 'row'}} >
          <Image source={imageSource} style={{alignSelf:'center'}} />
          <View marginLeft={10} marginTop={11}>
              <Text style={{fontSize: 18, fontWeight: 700, alignSelf: 'center', left: 30}} >{text}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("ActivityDescription")}
          style={{backgroundColor:  themeColors.bgColor(1), position: 'absolute', right: 40, top: 10, marginLeft: 10,
            borderRadius: 20, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
            <Text style={{color: 'black', marginRight: 5, marginBottom: 5, marginLeft: 5, marginRight: 5,
            marginTop: 5, fontSize: 17, fontWeight: 700}}>Start</Text>
        </TouchableOpacity>
      </View>
  </View>
  )
}