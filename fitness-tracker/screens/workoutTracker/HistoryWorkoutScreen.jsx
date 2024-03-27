import { View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import Header from '../../components/Header'
import { theme } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import BackButton from '../../components/BackButton'
import { ChevronLeft, ChevronRight } from 'react-native-feather'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoryWorkoutcreen({route}) {
    
    const {timeIndex, day, routine} = route.params
    
    useEffect(() => {
        if (day && timeIndex !== undefined && routine) {
            completeActivity(day, timeIndex, routine);
        }
    }, [day, timeIndex, routine]);

    const [startDate, setStartDate] = useState(11)
    const [startMonth, setStartMonth] = useState(3);
    const [chosenDay, setChosenDay] = useState(0);

    useEffect(() => {
        AsyncStorage.getItem('schedule').then((storedSchedule) => {
            if (storedSchedule) {
                setSchedule(JSON.parse(storedSchedule));
            }
        });
    }, []);

    useEffect(() => {
        if (day && timeIndex !== undefined && routine) {
            completeActivity(day, timeIndex, routine);
        }
    }, [day, timeIndex, routine]);

    useEffect(() => {
        AsyncStorage.setItem('schedule', JSON.stringify(schedule));
    }, [schedule]);


    const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"]

    const themeColors = theme("blue")
    const navigation = useNavigation()



    const handlePrevWeek = () => {
        if (startDate - 7 < 1) {
            // If subtracting 7 days would go to a previous month
            if (startMonth === 1) {
                // If the current month is January, go back to December of the previous year
                setStartDate(31 + (startDate - 7)); // Adjust startDate to the previous month's last date
                setStartMonth(12); // Change the month to December
            } else {
                // If it's not January, just go back to the previous month
                setStartDate(31 + (startDate - 7)); // Adjust startDate to the previous month's last date
                setStartMonth(prevMonth => prevMonth - 1); // Go to the previous month
            }
        } else {
            // If subtracting 7 days doesn't go to a previous month
            setStartDate(prevStartDate => prevStartDate - 7);
        }
    };
    
    const handleNextWeek = () => {
        if (startDate + 7 > 31) {
            // If adding 7 days would go to the next month
            if (startMonth === 12) {
                // If the current month is December, go forward to January of the next year
                setStartDate((startDate + 7) - 31); // Adjust startDate to the next month's first date
                setStartMonth(1); // Change the month to January
            } else {
                // If it's not December, just go forward to the next month
                setStartDate((startDate + 7) - 31); // Adjust startDate to the next month's first date
                setStartMonth(prevMonth => prevMonth + 1); // Go to the next month
            }
        } else {
            // If adding 7 days doesn't go to the next month
            setStartDate(prevStartDate => prevStartDate + 7);
        }
    };

    // Initialize the history schedule
    const initialSchedule = [
        { id:0, day: "Monday", activities: ["", "", "", "", "", "", ""] },
        { id:1, day: "Tuesday", activities: ["", "", "", "", "", "", ""] },
        { id:2, day: "Wednesday", activities: ["", "", "", "", "", "", ""] },
        { id:3, day: "Thursday", activities: ["", "", "", "", "", "", ""] },
        { id:4, day: "Friday", activities: ["", "", "", "", "", "", ""] },
        { id:5, day: "Saturday", activities: ["", "", "", "", "", "", ""] },
        { id:6, day: "Sunday", activities: ["", "", "", "", "", "", ""] }
    ];

    const [schedule, setSchedule] = useState(initialSchedule);

    // Function to update the schedule with the completed activity
    function completeActivity (day, timeIndex, routine) {
        const updatedSchedule = [...schedule];
        const dayIndex = updatedSchedule.findIndex(item => item.id === day);
        if (dayIndex !== -1) {
            updatedSchedule[dayIndex].activities[timeIndex] = routine;
            setSchedule(updatedSchedule);
            console.log("Schedule set: ", schedule)
        }
    };

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const time = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"]

    const DayCard = ({day, startDate, index}) => {
        let maxDate = 30;
        let curDate = startDate + index;

        if (startMonth == 1 || startMonth == 3 || startMonth == 5 || startMonth == 7 || startMonth == 8 || 
            startMonth == 10 || startMonth == 12)maxDate = 31;
        else if (startMonth == 2)maxDate = 28

        if (curDate > maxDate){
            curDate -= maxDate;
        }
        return(
           <TouchableOpacity onPress={() => {setChosenDay(curDate)}}
            activeOpacity={0.3}
            style={{borderRadius: 15, width: 100, height: 80, marginLeft: 20, marginTop: 30,
            backgroundColor: curDate===chosenDay? themeColors.bgColor(0.2) : 'white', alignItems: 'center'}}>
                {/* Day */}
                <Text style={{fontSize: 16, fontWeight: 600, marginTop: 20}}>{day}</Text>
                
                {/* Date */}
                { 
                    <Text style={{color: themeColors.text, fontWeight: 500, marginBottom: 20}}>{curDate}</Text>
                }

           </TouchableOpacity>
        )
    }

    //TODO: hard code to make the calendar not overshoot the current day

  return (
    <View>
        <ScrollView>
            <Header title={"Workout History"} color={"blue"} />
            <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
                <TouchableOpacity onPress={handlePrevWeek}
                    style={{backgroundColor: themeColors.bgColor(0.7), marginTop: 22, borderRadius: 9999}}>
                    <ChevronLeft strokeWidth={3} stroke={'white'} />
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: "white",  marginTop: 20,
                    borderRadius: 8, marginLeft: 10, marginRight: 10}}>
                    <Text style={{fontSize: 20, fontWeight: 700, marginRight: 20, marginLeft: 20, color: themeColors.text}}>
                        Week of {startDate}th, {months[startMonth - 1]} 2023</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNextWeek}
                 style={{backgroundColor: themeColors.bgColor(0.7), marginTop: 22, borderRadius: 9999}}>
                    <ChevronRight strokeWidth={3} stroke={'white'} />
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
                { days.map((day, index) =>
                    {return (<DayCard day={day} startDate={startDate} index={index} key={index} />)})
                }
            </ScrollView>
            { time.map((t, index) =>{
                return (
                    <View key={index}>    
                        <Text style={{ marginLeft: 20, marginTop: 20, fontWeight: 600, fontSize: 17 }}>{t}</Text>
                        {chosenDay !== null && (chosenDay -11) === day && index == timeIndex && (
                            <View style={{ borderRadius: 9, marginLeft: 100, marginRight: 100, backgroundColor: themeColors.bgColor(1) }}>
                                <Text style={{ marginTop: 10, fontWeight: 500, color: 'white', alignSelf: 'center', fontSize: 17, marginBottom: 10 }}>
                                    {routine}</Text>
                            </View>
                        )}
                    </View>)
                })
            }
        <BackButton text={"Done"} color={"blue"} />
      </ScrollView>
    </View>
  )
}