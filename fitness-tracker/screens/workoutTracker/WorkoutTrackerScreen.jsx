import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import graph from "../../assets/components/workout_graph.png"
import { theme } from '../../theme'
import WorkoutCard from '../../components/WorkoutCard'


export default function WorkoutTrackerScreen() {
    themeBlue = theme('blue')

  return (
    <View style={{backgroundColor: 'white'}}>
      <Header title={"Workout Tracker"} color={"blue"}/>
      <Image source={graph} style={{alignSelf: 'center', marginTop: 30}} />
      <View style ={{backgroundColor: themeBlue.bgColor(1), borderTopLeftRadius: 15,  borderTopEndRadius: 15, marginTop: 30}}>
        <TouchableOpacity style={{backgroundColor: 'white', marginTop: 20, borderRadius: 15,
        marginRight: 20, marginLeft: 20}} >
            <Text style={{fontSize: 18, fontWeight: 700, color: themeBlue.text, alignSelf: 'center', marginTop: 5, marginBottom: 5,
                }}>View Workout Schedule</Text>
        </TouchableOpacity>

        <Text style={{fontSize: 20, fontWeight: 700, marginLeft: 20,
            color: 'white', marginTop: 20, marginBottom: 5}}>Upcoming Workout</Text>
        <WorkoutCard title={"full"} text={"Fullbody Workout"} />
        <WorkoutCard title= {"upper"} text={"Upper Workout"}/>
       </View>
     
    </View>
  )
}