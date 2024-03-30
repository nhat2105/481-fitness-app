import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'

import real_time from "../../assets/components/Real-Time-Updates-Progress.png"
import { theme } from '../../theme'
import BackButton from '../../components/BackButton'

export default function StepsWalkedScreen() {
    const themeColors = theme('purple')
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const [startDate, setStartDate] = useState(11);
    const [startMonth, setStartMonth] = useState(3);
    const [chosenDay, setChosenDay] = useState(0);

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
           <TouchableOpacity onPress={() => {setChosenDay(curDate);}}
                activeOpacity={0.3}
                style={{borderRadius: 15, width: 100, height: 80, marginLeft: 20, marginTop: 30,
                backgroundColor: curDate===chosenDay? themeColors.bgColor(0.2) : 'white', alignItems: 'center'}}>
                
                {/* Day */}
                <Text style={{fontSize: 16, fontWeight: 600, marginTop: 20}}>{day}</Text>
                
                {/* Date */}
                <Text style={{color: themeColors.text, fontWeight: 500, marginBottom: 20}}>{curDate}</Text>
            </TouchableOpacity>
        )
    }

  return (
    <View>
        <Header title={"Steps Count"} />
        
        <ScrollView horizontal={true} style={{flexDirection: 'row', marginBottom: 20}}>
                { days.map((day, index) =>
                    {return (<DayCard day={day} startDate={startDate} index={index} key={index} />)})
                }
        </ScrollView>
        <Text style={{color: 'black', fontSize: 20, alignSelf: 'center',
         fontWeight: 700, marginTop: 20}}>Daily Report</Text>
            <View style={{flexDirection: 'row', marginTop: 30}}>
                <View style={{marginLeft: 100}}>
                    <Text style={{alignSelf:'center', color: themeColors.text, fontSize: 20, fontWeight: 700, marginTop: 5}}>3,322 steps</Text>
                    <Text style={{marginLeft: 15, color: theme('gray').text, fontSize: 18, fontWeight: 700, marginTop: 5, marginRight: 10}}>Real-time updates</Text>
                    <View style={{display:'flex', flexDirection: 'row'}}>
                        <Image source={real_time} marginTop={30}/>
                        <View marginTop={10} marginLeft={15}>
                            <Text>6:00am-8:00am</Text>
                            <Text style={{color: themeColors.text, fontWeight: 700}}>100 steps</Text>
                            <Text marginTop={5}>8:00am-10:00am</Text>
                            <Text style={{color: themeColors.text, fontWeight: 700}}>222 steps</Text>
                            <Text marginTop={5}>10:00am-12:00pm</Text>
                            <Text style={{color: themeColors.text, fontWeight: 700}}>1000 steps</Text>
                            <Text marginTop={5}>12:00pm-13:00pm</Text>
                            <Text style={{color: themeColors.text, fontWeight: 700}}>1000 steps</Text>
                            <Text marginTop={5}>13:00pm-14:00pm</Text>
                            <Text style={{color: themeColors.text, fontWeight: 700}}>1000 steps</Text>
                        </View>
                    </View>
                </View>
            </View>
        <BackButton text={"Done"} />
        
    </View>
  )
}