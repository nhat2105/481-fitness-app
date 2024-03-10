import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'

export default function SleepScheduleScreen() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const DayCard = ({day, startDate, index}) => {
    return(
       <TouchableOpacity activeOpacity={0.3}
        style={{borderRadius: 15, width: 100, height: 80, marginLeft: 20, marginTop: 30,
        shadowColor: themeColors.bgColor(0.6), 
        backgroundColor: 'white', alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 600, marginTop: 20}}>{day}</Text>
            <Text style={{color: themeColors.text, fontWeight: 500, marginBottom: 20}}>{startDate + index}</Text>
       </TouchableOpacity>
    )
  }
  
  return (
    <Header title={"Sleep Schedule"} color={"blue"}/>

   
  )
}