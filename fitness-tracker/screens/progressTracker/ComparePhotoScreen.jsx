import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { Calendar } from 'react-native-feather'
import { theme } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import { Picker }  from '@react-native-picker/picker'
import Footer from '../../components/Footer'

export default function ComparePhotoScreen({route}) {
    const themeColors = theme('purple')
    const navigation = useNavigation()

    const gallery = route.params

    const [selectedMonth1, setSelectedMonth1] = useState("March");
    const [selectedMonth2, setSelectedMonth2] = useState("April");

    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];

  return (
    <View>
        <Header title={"Compare Photos"} />
        <View style={{ borderRadius: 15, marginTop: 20, marginLeft: 70}}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Calendar strokeWidth={2} stroke={themeColors.bgColor(1)} style={{marginTop: 10, marginLeft: 20}}/>
                <Text style={{fontSize: 20, fontWeight: 800, alignSelf: 'center',
                   marginLeft: 30, marginTop: 10, marginBottom: 10}}>Select Month 1</Text>
            </View>
        </View>

        <View style={{backgroundColor: 'white', borderRadius: 15, marginTop: 20, marginLeft: 30, marginRight: 30}}>
          <Picker onValueChange={ (month) => { setSelectedMonth1(month) }} selectedValue={selectedMonth1}>
          {<Picker.Item label="Select Month 1" value={null} />}
              {months.map((month, index) => (
                <Picker.Item key={index} 
                label={month} 
                style={{fontSize: 18, fontWeight: '800', color: 'black', marginLeft: 10, marginBottom: 10 }}
                value={month} />
              ))}
          </Picker>
        </View>

        <View style={{ borderRadius: 15, marginTop: 20, marginLeft: 70}}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Calendar strokeWidth={2} stroke={themeColors.bgColor(1)} style={{marginTop: 10, marginLeft: 20}}/>
                <Text style={{fontSize: 20, fontWeight: 800, alignSelf: 'center',
                   marginLeft: 30, marginTop: 10, marginBottom: 10}}>Select Month 2</Text>
            </View>
        </View>

        <View style={{backgroundColor: 'white', borderRadius: 15, marginTop: 20, marginLeft: 30, marginRight: 30}}>
          <Picker onValueChange={ (month) => { setSelectedMonth2(month) }} selectedValue={selectedMonth2}>
          {<Picker.Item label="Select Month 2" value={null} />}
              {months.map((month, index) => (
                <Picker.Item key={index} 
                label={month} 
                style={{fontSize: 18, fontWeight: '800', color: 'black', marginLeft: 10, marginBottom: 10 }}
                value={month} />
              ))}
          </Picker>
        </View>


        <TouchableOpacity onPress={()=>navigation.navigate("PhotoResult", {selectedMonth1, selectedMonth2, gallery})}
        style={{backgroundColor: themeColors.bgColor(1), justifyContent: 'center', marginTop: 40,
          alignItems: 'center', borderRadius: 20, marginLeft: 20, marginRight: 20, marginBottom: 50}}>
        <Text style={{color: 'white', fontSize: 18, marginTop: 10, fontWeight: 700, height: 40, alignSelf: "center"}}>Compare Photos</Text>
      </TouchableOpacity>
      
      <View style={{marginTop: 270}}>
        <Footer params={gallery}/>
      </View>
    </View>
  )
}