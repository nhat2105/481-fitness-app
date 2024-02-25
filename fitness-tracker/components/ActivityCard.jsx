import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import pic from "../assets/components/Workout-Pic.png"
import { ChevronRight } from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'

export default function ActivityCard({title, text}) {
    const navigation = useNavigation()
  return (
    <View style={{marginRight: 20, marginLeft: 20}} >
      <TouchableOpacity onPress={()=> navigation.navigate("ActivityInstruction")}
        style={{flexDirection: 'row', justifyContent: 'space-between', borderRadius: 10,
         marginTop: 20, backgroundColor:'lightgrey'}}>
        <Image source={pic}/>
        <View marginTop={5} >
            <Text style={{fontSize: 16, fontWeight: 700, alignSelf: 'center' }}>{title}</Text>
            <Text alignSelf="center" fontWeight={600}>{text}</Text>
        </View>
        <ChevronRight stroke={"grey"} strokeWidth={3} marginTop={9}/>
      </TouchableOpacity>
    </View>
  )
}