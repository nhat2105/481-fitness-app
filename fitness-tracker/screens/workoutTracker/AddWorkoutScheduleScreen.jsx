import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { Calendar, ChevronRight, Heart, Menu } from 'react-native-feather'
import { theme } from '../../theme'
import BackButton from '../../components/BackButton'

export default function AddWorkoutScheduleScreen() {
  const themeColors = theme("purple")
  return (
    <View marginLeft={20}>
      <Header title={"Add Schedule"} />
      <TouchableOpacity style={{flexDirection: 'row', marginTop: 20, marginRight: 20, borderRadius: 15, backgroundColor: 'white'}}>
          <Calendar stroke={"lightgrey"} strokeWidth={3} style={{marginLeft: 20, marginTop:5, marginBottom: 5}} />
          <Text style={{alignSelf: 'center', marginTop: 5, marginBottom: 5, marginLeft: 10, fontSize: 17, fontWeight: 700}}>
            Monday, Feb 26
          </Text>
      </TouchableOpacity>
      
      <Text style={{marginTop: 20, fontWeight: 800, fontSize: 20}}>Time</Text>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} >
        <TextInput type='text' 
          style={{height: 40, width: 80, borderColor: themeColors.bgColor(1), alignSelf:'center',
          margin: 12, borderWidth: 3, padding: 10, borderRadius: 10}}/>
          <Text style ={{fontSize: 20, fontWeight: 900, color: themeColors.text, textAlign: "center", marginTop: 20}}>:</Text>
          <TextInput type='text' 
            style={{height: 40, width: 80, borderColor: themeColors.bgColor(1), alignSelf:'center',
            margin: 12, borderWidth: 3, padding: 10, borderRadius: 10}}/>
      </View>

      <Text style={{marginTop: 20, fontWeight: 800, fontSize: 20}}>Details Workout</Text>
      {/**Workout Button */}
      <TouchableOpacity 
        style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, 
        marginRight: 20, borderRadius: 15, backgroundColor: 'white'}}>
        <Heart stroke={"lightgrey"} strokeWidth={3} style={{marginLeft: 20, marginTop:5, marginBottom: 5}} />
        <Text style={{alignSelf: 'center', marginTop: 5, marginBottom: 5, marginLeft: 10, fontSize: 17, fontWeight: 700}}>
          Choose Workout
        </Text>
        <Text style={{color: 'grey', marginTop: 8, marginBottom: 5, marginLeft: 10, fontSize: 14, fontWeight: 400}}>
          Abs Workout
        </Text>
        <ChevronRight stroke={"lightgrey"} strokeWidth={3}  style={{marginRight: 20, marginTop:5, marginBottom: 5}}/>
      </TouchableOpacity>

       {/*Level Button */}
      <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginRight: 20, borderRadius: 15, backgroundColor: 'white'}}>
        <Menu stroke={"lightgrey"} strokeWidth={3} style={{marginLeft: 20, marginTop:5, marginBottom: 5}} />
        <Text style={{alignSelf: 'center', marginTop: 5, marginBottom: 5, marginLeft: 10, fontSize: 17, fontWeight: 700}}>
          Difficulty
        </Text>

        <Text style={{color: 'grey', marginTop: 8, marginBottom: 5, marginLeft: 30, fontSize: 14, fontWeight: 400}}>
          Beginner
        </Text>

        <ChevronRight stroke={"lightgrey"} strokeWidth={3}  style={{marginRight: 20, marginTop:5, marginBottom: 5}}/>
      </TouchableOpacity>

      <BackButton text={"Done"} />
    </View>
  )
}