import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { theme } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import Draggable from 'react-native-draggable'

export default function WorkoutScheduleScreen({route}) {
    const themeColors = theme("purple")
    const navigation = useNavigation();
    const [reverse, setReverse] = useState(false)
    const [firstTime, setFirstTime] = useState(route.params.firstTime);
    const [chosenDay, setChosenDay] = useState(0);
    let {name, height, weight} = route.params;
    const [errorMsg, setErrorMsg] = useState(null)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const time = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"]
    const {sched} = route.params

    // State to store the schedule
    const [schedule, setSchedule] = useState(() => {
        if (sched)return sched;
        //console.log("Sched received in schedule: ", sched)
        const initialSchedule = [];
        for (let i = 0; i < time.length; i++) {
            const timeSlot = [];
            for (let j = 0; j < days.length; j++) {
                // Check the hardcoded schedule of exercises
                let activity = null;
                if (time[i] === "6:00 AM") {
                    activity = "Fullbody Train";
                } else if (time[i] === "7:00 AM") {
                    activity = "Lowerbody Train";
                } else if (time[i] === "8:00 AM") {
                    activity = "Upperbody Train";
                }
                timeSlot.push(activity);
            }
            initialSchedule.push(timeSlot);
        }
        return initialSchedule;
    });

    //console.log("WHAT AM I RECEIVING IS: ", route.params)
    useEffect(() => {
        // Update local state when the 'schedule' prop changes
        if (route.params && route.params.schedule) {
            setSchedule(route.params.schedule);
        }
    }, [route.params]);

    // Function to check if a specific time slot is available
    const isTimeSlotAvailable = (timeIndex, dayIndex) => {//day index can be chosen day
        if (!schedule[timeIndex][dayIndex]){//console.log("Available")
        }
        else {
           // console.log("BRUH NO NOT AVAILABLE")
           // console.log("Activity here: ", schedule[timeIndex][dayIndex])
            setReverse(true)
        }
        return !schedule[timeIndex][dayIndex];
    };

    // Function to check if a specific time slot is available
    const removeActivity = (timeIndex, dayIndex) => {//day index can be chosen day
        let updatedSched = [...schedule];
        updatedSched[timeIndex][dayIndex] = null;
        setSchedule(updatedSched);
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
            <TouchableOpacity activeOpacity={0.3} onPress={() => {setChosenDay(index)} }
                style={{borderRadius: 15, width: 100, height: 80, marginLeft: 20, marginTop: 30,
                backgroundColor: chosenDay===index? themeColors.bgColor(0.4) : "white", alignItems: 'center'}}>
                    <Text style={{fontSize: 16, fontWeight: 600, marginTop: 20}}>{day}</Text>
                    <Text style={{color: chosenDay===index? "black": themeColors.text, fontWeight: 500, marginBottom: 20}}>{startDate + index}</Text>
            </TouchableOpacity>
        )
    }

    const saveSchedule = () => {
        navigation.navigate("WorkoutTracker", {firstTime: false, schedule: schedule})
    }

  return (
    <View>
        <ScrollView>
            {firstTime ? <Header title={"Recommend Plan"} action={saveSchedule} /> : 
            <Header title={"Your Schedule"} action={saveSchedule}/>}
            <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
                { days.map((day, index) =>
                    {return (<DayCard day={day} startDate={20} index={index} key={index} />)})
                }
            </ScrollView>
            {errorMsg ?
                <Text style={{color: 'red', fontSize: 16, fontWeight: 700, marginLeft: 30, marginTop: 9}}>{errorMsg}</Text>
                : 
                <Text style={{color: themeColors.text, fontSize: 16, fontWeight: 700, marginLeft: 20, marginRight: 10, marginTop: 9}}>
                    To remove an activity, drag the exercise card out of the left/right margin
                </Text>
            }
    
            {schedule.map((timeSlot, timeIndex) => (
            <View key={timeIndex}>
                <Text style={{ marginLeft: 20, marginTop: 50, fontWeight: 600, fontSize: 17 }}>{time[timeIndex]}</Text>
                {timeSlot[chosenDay] && (
                    <Draggable 
                        
                        shouldReverse={reverse} onReverse={() => {x: 0; y: 0}}
                        key={timeIndex} style={{ marginTop: 10 }} 
                        onDragRelease={({ nativeEvent }) => {
                            const { pageY, pageX } = nativeEvent;
                            //console.log ("Current range: " + pageY/50);
                            const range = pageY/50; // based on height of timeslot
                            if (range <= 6.2)newTimeIndex = 0;
                            else if (range > 6.2 && range <= 7.5)newTimeIndex = 1;
                            else if (range > 7.5 && range <= 8.95)newTimeIndex = 2;
                            else if (range > 8.95 && range <= 10.33 )newTimeIndex = 3;
                            else if (range > 10.33 && range <= 11.4)newTimeIndex = 4;
                            else if (range > 11.4 && range <= 13.74)newTimeIndex = 5;
                            else if (range > 13.74)newTimeIndex = 6;
                            //console.log("Time now: ", time[newTimeIndex])
                            //console.log("PageX: ", pageX)

                            if (pageX == 0 || pageX >= 392){
                                removeActivity(timeIndex, chosenDay)
                               // console.log("HERE")
                            }

                            if (isTimeSlotAvailable(newTimeIndex, chosenDay)) {
                                handleDropActivity(newTimeIndex, chosenDay, timeSlot[chosenDay], timeIndex);
                                setErrorMsg(null)
                            } else {
                                setReverse(true)
                                setErrorMsg("Cannot set 2 routines at the same time!")
                            }  
                        }}
                    >
                <View style={{marginTop: 45}}>
                    <TouchableOpacity onPress={() => navigation.navigate("ActivityDescription", {text: timeSlot[chosenDay], lookOnly: false})}
                     style={{ borderRadius: 15, marginLeft: 100, marginRight: 100,
                    backgroundColor: themeColors.bgColor(0.7)}}>
                        <Text style={{marginTop: 10, fontWeight: 500, color: 'white', alignSelf: 'center', fontSize: 17, marginBottom: 10}}>
                            {timeSlot[chosenDay]}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Draggable>
        )}
    </View>
))}
            {firstTime ?
                    <TouchableOpacity onPress={() => {
                        setFirstTime(false);
                        navigation.navigate("WorkoutTracker", {firstTime: false, schedule: schedule, name: name, height: height, weight: weight});
                    }} style={{ borderRadius: 9999, backgroundColor: themeColors.bgColor(1), marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ marginTop: 5, marginBottom: 5, alignSelf: 'center', fontSize: 18, fontWeight: 700, color: 'white' }}>Confirm Schedule</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity onPress={() => 
                        {   let dayString = days[chosenDay] + ", March " + (20 + chosenDay) + ", 2024"
                            navigation.navigate("AddWorkoutSchedule", {dayString: dayString, chosenDay: chosenDay, schedule: schedule, name: name, weight: weight, height: height})}} 
                        style={{ borderRadius: 9999, backgroundColor: themeColors.bgColor(1), marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ marginTop: 5, marginBottom: 5, alignSelf: 'center', fontSize: 18, fontWeight: 700, color: 'white' }}>Add to Schedule</Text>
                    </TouchableOpacity>}
                    
      </ScrollView>
    </View>
  )
}