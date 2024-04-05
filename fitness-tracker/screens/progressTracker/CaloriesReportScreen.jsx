import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState} from 'react'
import Header from '../../components/Header'
import graph from "../../assets/components/report-graph.png"
import BackButton from '../../components/BackButton'
import { theme } from '../../theme'
import { DataTable } from "react-native-paper"

export default function CaloriesReportScreen() {
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
    <ScrollView>
      <Header title={"Calories Report"} />
      <ScrollView horizontal={true} style={{flexDirection: 'row', marginBottom: 20}}>
        { days.map((day, index) =>
          {return (<DayCard day={day} startDate={startDate} index={index} key={index} />)})
        }
        </ScrollView>
      <View style={{marginLeft: 30, marginRight: 30, marginTop: 30}}>
        <Text style={{color: themeColors.text, fontSize: 20, fontWeight: 600, alignSelf: 'center', marginBottom: 10,
      }}>Total calories burnt: </Text>
      <Text style={{ fontSize: 20, fontWeight: 600, alignSelf: 'center', marginBottom: 40,
      }}>760 calories</Text>
      
        {/**Do table instead */}
        <DataTable style={{backgroundColor: 'white', display: 'flex'}}>
          <DataTable.Header>
            <DataTable.Title style={{width: 80}} textStyle={{color: themeColors.text, fontSize: 15, fontWeight: 700}}>Activity</DataTable.Title>
            <DataTable.Title textStyle={{color: themeColors.text, fontSize: 15, fontWeight: 700}}>Level</DataTable.Title>
            <DataTable.Title textStyle={{color: themeColors.text, fontSize: 15, fontWeight: 700}} numeric>Calories Burnt</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell textStyle={{fontSize: 14, fontWeight: 600}}>Abs Workout</DataTable.Cell>
            <DataTable.Cell>Intermediate</DataTable.Cell>
            <DataTable.Cell numeric>320</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Upperbody</DataTable.Cell>
            <DataTable.Cell>Advanced</DataTable.Cell>
            <DataTable.Cell numeric>440</DataTable.Cell>
          </DataTable.Row>

      </DataTable>
      </View>
      <Text style={{color: 'black', fontSize: 20, fontWeight: 700, marginLeft: 30, marginTop: 20, marginBottom: 20}}>Yearly Report</Text>
      <Image source={graph} style={{alignSelf: 'center'}} />
      <BackButton text={"Done"} />
    </ScrollView>
    </View>
  )
}