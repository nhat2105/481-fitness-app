import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { theme } from '../../theme'
import { useNavigation } from '@react-navigation/native'

export default function WorkoutScheduleScreen() {
    const themeColors = theme("purple")
    const navigation = useNavigation()

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const time = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"]
    const activities = ["Abs Workout", "Lowerbody Workout", "Upperbody Workout"]

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
    <View>
        <ScrollView>
            <Header title={"Your Schedule"} />
            <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
                { days.map((day, index) =>
                    {return (<DayCard day={day} startDate={20} index={index} key={index} />)})
                }
            </ScrollView>
            { time.map((t, index) =>{
                return (
                    <View>
                        <Text style={{marginLeft: 20, marginTop: 20, fontWeight: 600, fontSize: 17}} >{t}</Text>
                        {  activities.map((a, i) =>{
                            if (i == index){
                                return (
                                    <TouchableOpacity key={i} style={{borderRadius: 15, marginLeft: 100, marginRight: 100,
                                    backgroundColor: themeColors.bgColor(0.7)}}>
                                        <Text style={{marginTop: 10, fontWeight: 500, color: 'white', 
                                            alignSelf: 'center', fontSize: 17, marginBottom: 10}} >{a}</Text>
                                    </TouchableOpacity>
                                )
                            }    
                        })

                        }
                    </View>)
                })
            }

            <TouchableOpacity onPress={() => navigation.navigate("AddWorkoutSchedule")}
                style={{borderRadius: 9999, backgroundColor: themeColors.bgColor(1), marginTop: 20,
                marginLeft: 20, marginRight: 20}}>
                <Text style={{marginTop: 5, marginBottom: 5, alignSelf: 'center', fontSize: 18, fontWeight: 700, color: 'white'}}>
                    Add to Schedule</Text>
            </TouchableOpacity>
      </ScrollView>
    </View>
  )
}