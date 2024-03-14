import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import graph from "../../assets/components/workout_graph.png"
import { theme } from '../../theme'
import WorkoutCard from '../../components/WorkoutCard'
import BackButton from '../../components/BackButton'
import { useNavigation } from '@react-navigation/native'


export default function WorkoutTrackerScreen({route}) {
    const firstTime = route.params;

    themeBlue = theme('blue')
    const navigation = useNavigation()
  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <Header title={"Workout Tracker"} color={"blue"}/>
        <Image source={graph} style={{alignSelf: 'center', marginTop: 30}} />
        
        {firstTime === true && 
        <View style ={{backgroundColor: themeBlue.bgColor(1), borderTopLeftRadius: 15,  borderTopEndRadius: 15, marginTop: 30}}>
          
        <TouchableOpacity onPress={() => navigation.navigate("WorkoutSchedule", firstTime)}
        style={{backgroundColor: 'white', marginTop: 30, borderRadius: 15,
        marginRight: 20, marginLeft: 20}} >
            <Text style={{fontSize: 18, fontWeight: 700, color: themeBlue.text, alignSelf: 'center', marginTop: 5, marginBottom: 5,
                }}>Add Your Workout Schedule</Text>
        </TouchableOpacity>
        
        <Text style={{fontSize: 20, fontWeight: 700, marginLeft: 20,
            color: 'white', marginTop: 20, marginBottom: 5}}>Recommended Activities</Text>
        <WorkoutCard title= {"abs"} text={"Abs Workout"}  action={"Add"} />
        <WorkoutCard title= {"lower"} text={"Lowerbody Train"}  action={"Add"} />
        <WorkoutCard title= {"upper"} action={"Add"} text={"Weight Training"}/>
        <TouchableOpacity onPress={() => navigation.goBack()}
        style={{backgroundColor: 'white', marginLeft: 30, borderRadius: 8,
        marginRight: 30, marginTop: 20, marginBottom: 80}}>
          <Text style={{color: themeBlue.text, fontSize: 22, fontWeight: 800, marginLeft: 5, marginRight: 5, marginBottom: 2,
            marginTop: 2, alignSelf: 'center'}}>Done</Text>
        </TouchableOpacity>
      </View> 
        }

        {firstTime === false && 

        <View style ={{backgroundColor: themeBlue.bgColor(1), borderTopLeftRadius: 15,  borderTopEndRadius: 15, marginTop: 30}}>
          
          <TouchableOpacity onPress={() => navigation.navigate("WorkoutSchedule")}
          style={{backgroundColor: 'white', marginTop: 30, borderRadius: 15,
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
        
        }


      </ScrollView>
    </View>
  )
}