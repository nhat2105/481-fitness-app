import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import graph from "../../assets/components/workout_graph.png"
import { theme } from '../../theme'
import WorkoutCard from '../../components/WorkoutCard'


export default function WorkoutTrackerScreen() {
    themeBlue = theme('blue')

  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <Header title={"Workout Tracker"} color={"blue"}/>
        <Image source={graph} style={{alignSelf: 'center', marginTop: 30}} />
        <View style ={{backgroundColor: themeBlue.bgColor(1), borderTopLeftRadius: 15,  borderTopEndRadius: 15, marginTop: 30}}>
          <TouchableOpacity style={{backgroundColor: 'white', marginTop: 30, borderRadius: 15,
          marginRight: 20, marginLeft: 20}} >
              <Text style={{fontSize: 18, fontWeight: 700, color: themeBlue.text, alignSelf: 'center', marginTop: 5, marginBottom: 5,
                  }}>View Workout Schedule</Text>
          </TouchableOpacity>

          <Text style={{fontSize: 20, fontWeight: 700, marginLeft: 20,
              color: 'white', marginTop: 20, marginBottom: 5}}>Upcoming Workout</Text>
          <WorkoutCard text={"Fullbody Workout"} action={"Start"}  />
          <WorkoutCard title= {"upper"} action={"Start"} text={"Upperbody Train"}/>
            
          <Text style={{fontSize: 20, fontWeight: 700, marginLeft: 20,
              color: 'white', marginTop: 20, marginBottom: 5}}>Recommended Activities</Text>
          <WorkoutCard title= {"abs"} text={"Abs Workout"}  action={"Add"} />
          <WorkoutCard title= {"lower"} text={"Lowerbody Train"}  action={"Add"} />
          <WorkoutCard title= {"upper"} action={"Add"} text={"Weight Training"}/>
        </View>
      </ScrollView>
    </View>
  )
}