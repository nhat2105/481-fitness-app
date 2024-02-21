import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { Calendar, ChevronRight } from 'react-native-feather'
import { theme } from '../../theme'
import { useNavigation } from '@react-navigation/native'

export default function ComparePhotoScreen() {
    const themeColors = theme('purple')
    const navigation = useNavigation()
  return (
    <View>
        <Header title={"Compare Photos"} />
        <View style={{backgroundColor: 'white', borderRadius: 15, marginTop: 20, marginLeft: 30, marginRight: 30}}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Calendar strokeWidth={2} stroke={themeColors.bgColor(1)} style={{marginTop: 10, marginLeft: 20}}/>
                <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 10, marginTop: 10, marginBottom: 10}}>Select Month 1</Text>
                <Text style={{ position: 'absolute', right: 35, color: 'gray',
                    fontSize: 18, fontWeight: 500, marginTop: 10, marginBottom: 10}}>May</Text>
                <ChevronRight strokeWidth={2} stroke={"gray"} style={{marginTop: 12, right: 10, position: 'absolute'}}/>
            </View>
        </View>

        <View style={{backgroundColor: 'white', borderRadius: 15, marginTop: 20, marginLeft: 30, marginRight: 30}}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Calendar strokeWidth={2} stroke={themeColors.bgColor(1)} style={{marginTop: 10, marginLeft: 20}}/>
                <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 10, marginTop: 10, marginBottom: 10}}>Select Month 2</Text>
                <Text style={{ position: 'absolute', right: 35, color: 'gray',
                    fontSize: 18, fontWeight: 500, marginTop: 10, marginBottom: 10}}>June</Text>
                <ChevronRight strokeWidth={2} stroke={"gray"} style={{marginTop: 12, right: 10, position: 'absolute'}}/>
            </View>
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate("PhotoResult")}
        style={{backgroundColor: themeColors.bgColor(1), justifyContent: 'center', marginTop: 40,
          alignItems: 'center', borderRadius: 20, marginLeft: 20, marginRight: 20, marginBottom: 50}}>
        <Text style={{color: 'white', fontSize: 18, marginTop: 10, fontWeight: 700, height: 40, alignSelf: "center"}}>Compare Photos</Text>
      </TouchableOpacity>
    </View>
  )
}