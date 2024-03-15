import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { theme } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import Draggable from 'react-native-draggable'

export default function WorkoutScheduleScreen({route}) {
    const themeColors = theme("purple")
    const navigation = useNavigation()

    const [reverse, setReverse] = useState(false)

    const [firstTime, setFirstTime] = useState(route.params);
    
    let chosenDay = 0;
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const time = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"]

    // State to store the schedule
    const [schedule, setSchedule] = useState(() => {
        const initialSchedule = [];
        for (let i = 0; i < time.length; i++) {
            const timeSlot = [];
            for (let j = 0; j < days.length; j++) {
                // Check the hardcoded schedule of exercises
                let activity = null;
                if (time[i] === "6:00 AM") {
                    activity = "Abs Workout";
                } else if (time[i] === "7:00 AM") {
                    activity = "Lowerbody Workout";
                } else if (time[i] === "8:00 AM") {
                    activity = "Upperbody Workout";
                }
                timeSlot.push(activity);
            }
            initialSchedule.push(timeSlot);
        }
        return initialSchedule;
    });

    // Function to check if a specific time slot is available
    const isTimeSlotAvailable = (timeIndex, dayIndex) => {//day index can be chosen day
        if (!schedule[timeIndex][dayIndex])console.log("Available")
        else {
            console.log("BRUH NO NOT AVAILABLE")
            console.log("Activity here: ", schedule[timeIndex][dayIndex])
        }
        return !schedule[timeIndex][dayIndex];
    };

    // Function to handle dropping activity into a time slot
    const handleDropActivity = (timeIndex, dayIndex, activity, oldTimeIndex) => {
        if (isTimeSlotAvailable(timeIndex, dayIndex)) {
            const updatedSchedule = [...schedule];
            updatedSchedule[timeIndex][dayIndex] = activity;
            updatedSchedule[oldTimeIndex][dayIndex] = null;
            setSchedule(updatedSchedule); 
            
        }
    };    

    const DayCard = ({day, startDate, index}) => {
        return(
                <TouchableOpacity activeOpacity={0.3} onPress={() => {chosenDay = index} }
                    style={{borderRadius: 15, width: 100, height: 80, marginLeft: 20, marginTop: 30,
                    shadowColor: themeColors.bgColor(0.6), 
                    backgroundColor: "white", alignItems: 'center'}}>
                        <Text style={{fontSize: 16, fontWeight: 600, marginTop: 20}}>{day}</Text>
                        <Text style={{color: themeColors.text, fontWeight: 500, marginBottom: 20}}>{startDate + index}</Text>
                </TouchableOpacity>
        )
    }

  return (
    <View>
        <ScrollView>
            {firstTime ? <Header title={"Recommend Plan"} /> : <Header title={"Your Schedule"} />}
            <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
                { days.map((day, index) =>
                    {return (<DayCard day={day} startDate={20} index={index} key={index} />)})
                }
            </ScrollView>
            {schedule.map((timeSlot, timeIndex) => (
            <View key={timeIndex}>
                <Text style={{ marginLeft: 20, marginTop: 50, fontWeight: 600, fontSize: 17 }}>{time[timeIndex]}</Text>
                {timeSlot[chosenDay] && (
                    <Draggable shouldReverse={reverse} onReverse={() => {x: 0; y: 0}}
                    x={0} y={0} key={timeIndex} style={{ marginTop: 10 }} 
                        onDragRelease={({ nativeEvent }) => {
                            const { pageY } = nativeEvent;
                            console.log ("Current range: " + pageY/50);
                            const range = pageY/50; // based on height of timeslot
                            let newTimeIndex;
                            if (range <= 6.2)newTimeIndex = 0;
                            else if (range > 6.2 && range <= 7.5)newTimeIndex = 1;
                            else if (range > 7.5 && range <= 8.95)newTimeIndex = 2;
                            else if (range > 8.95 && range <= 10.33 )newTimeIndex = 3;
                            else if (range > 10.33 && range <= 11.4)newTimeIndex = 4;
                            else if (range > 11.4 && range <= 13.74)newTimeIndex = 5;
                            else if (range > 13.74 && range <= 14.8)newTimeIndex = 6;
                            //console.log("Time now: ", time[newTimeIndex])

                            if (isTimeSlotAvailable(newTimeIndex, chosenDay)) {
                                handleDropActivity(newTimeIndex, chosenDay, timeSlot[chosenDay], timeIndex);
                            } else {
                                setReverse(true)
                                console.log("Reached")
                            }  
                        }}
                    >
                <TouchableOpacity style={{ borderRadius: 15, marginLeft: 100, marginRight: 100, marginTop: 50,
                 backgroundColor: themeColors.bgColor(0.7)}}>
                    <Text style={{marginTop: 10, fontWeight: 500, color: 'white', alignSelf: 'center', fontSize: 17, marginBottom: 10}}>
                        {timeSlot[chosenDay]}
                    </Text>
                </TouchableOpacity>
            </Draggable>
        )}
    </View>
))}
            {firstTime ?
                    <TouchableOpacity onPress={() => {
                        setFirstTime(false);
                        navigation.navigate("WorkoutTracker", false);
                    }} style={{ borderRadius: 9999, backgroundColor: themeColors.bgColor(1), marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ marginTop: 5, marginBottom: 5, alignSelf: 'center', fontSize: 18, fontWeight: 700, color: 'white' }}>Confirm Schedule</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity onPress={() => navigation.navigate("AddWorkoutSchedule")} style={{ borderRadius: 9999, backgroundColor: themeColors.bgColor(1), marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ marginTop: 5, marginBottom: 5, alignSelf: 'center', fontSize: 18, fontWeight: 700, color: 'white' }}>Add to Schedule</Text>
                    </TouchableOpacity>}
      </ScrollView>
    </View>
  )
}