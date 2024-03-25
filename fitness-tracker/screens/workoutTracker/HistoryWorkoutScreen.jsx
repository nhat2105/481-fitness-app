import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Header from '../../components/Header'
import { theme } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import BackButton from '../../components/BackButton'
import { ChevronLeft, ChevronRight } from 'react-native-feather'

export default function HistoryWorkoutcreen() {
    const [startDate, setStartDate] = useState(11)
    const [startMonth, setStartMonth] = useState(3);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

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

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const time = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"]
    const activities = ["Abs Workout", "Lowerbody Workout", "Upperbody Workout"]

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
           <TouchableOpacity activeOpacity={0.3}
            style={{borderRadius: 15, width: 100, height: 80, marginLeft: 20, marginTop: 30,
            shadowColor: themeColors.bgColor(0.6), 
            backgroundColor: 'white', alignItems: 'center'}}>
                {/* Day */}
                <Text style={{fontSize: 16, fontWeight: 600, marginTop: 20}}>{day}</Text>
                
                {/* Date */}
                { 
                    <Text style={{color: themeColors.text, fontWeight: 500, marginBottom: 20}}>{curDate}</Text>
                }

           </TouchableOpacity>
        )
    }

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
                        <Text style={{marginLeft: 20, marginTop: 20, fontWeight: 600, fontSize: 17}} >{t}</Text>
                        {  activities.map((a, i) =>{
                            if (i == index){
                                return (
                                    <View key={i} style={{borderRadius: 9, marginLeft: 100, marginRight: 100,
                                    backgroundColor: themeColors.bgColor(1)}}>
                                        <Text style={{marginTop: 10, fontWeight: 500, color: 'white', 
                                            alignSelf: 'center', fontSize: 17, marginBottom: 10}} >{a}</Text>
                                    </View>
                                )
                            }    
                        })

                        }
                    </View>)
                })
            }
        <BackButton text={"Done"} color={"blue"} />
      </ScrollView>
    </View>
  )
}