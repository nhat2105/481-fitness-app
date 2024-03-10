import { View, Text, ScrollView, TouchableOpacity, Image, TextInput} from 'react-native'
import React from 'react'
import { theme } from '../../theme'
import banner from "../../assets/components/sleepsetter-banner.png"
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/Header'

export default function SetSleepTrackerScreen() {
    const navigation = useNavigation();
    const themeBlue = theme('blue');
    let sleepTime = "9:30 pm";
    let alarmTime = "5:00 am"

  return (
    <View style={{ borderRadius: 20, width:'100%', 
      backgroundColor: 'white', alignSelf:'center'}} >
       <Header title={"Sleep Setter"} color={'blue'}/>
        <View>
          <Image source={banner} style={{alignSelf: 'center', marginTop: 15, zIndex: 0}} />
          <Text style ={{position: 'absolute', zIndex: 1, fontSize: 18, fontWeight: 600, color: 'black', 
            marginLeft: 50, marginTop: 40}}>
            Ideal Hours for Sleep
          </Text>
          <Text style ={{position: 'absolute', zIndex: 1, fontSize: 18, fontWeight: 800, color: themeBlue.text, 
            marginLeft: 100, marginTop: 70}}>
            8h 30m
          </Text>
        </View>
      <View>
        <Text style ={{fontSize: 20, fontWeight: 600, color: 'black', textAlign: "center", marginTop: 20}}>
          Bedtime
        </Text>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} >
            <TextInput type='text' placeholder='10' placeholderTextColor={"grey"}
                //onChangeText()
                style={{height: 40, width: 80, borderColor: themeBlue.bgColor(1), alignSelf:'center',
              margin: 12, borderWidth: 3, padding: 10, borderRadius: 10}}/>
              <Text style ={{fontSize: 20, fontWeight: 900, color: themeBlue.text, textAlign: "center", marginTop: 20}}>:</Text>
              <TextInput type='text' placeholder='30' placeholderTextColor={"grey"}
                style={{height: 40, width: 80, borderColor: themeBlue.bgColor(1), alignSelf:'center',
              margin: 12, borderWidth: 3, padding: 10, borderRadius: 10}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems : 'center'}}>
            <TouchableOpacity style={{backgroundColor: themeBlue.bgColor(0.8), borderRadius: 9999, marginTop: 15, marginBottom: 15}}>
                <Text style={{fontSize: 20, marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5, color: "white"}}>AM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ 
                  backgroundColor: themeBlue.bgColor(0.8), borderRadius: 9999, 
                  marginTop: 15, marginBottom: 15, marginLeft: 15}}>
                <Text style={{fontSize: 20, marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5, color: "white"}}>PM</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View>
        <Text style ={{fontSize: 20, fontWeight: 600, color: 'black', textAlign: "center"}}>
          Alarm
        </Text>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} >
            <TextInput type='text' placeholder='8' placeholderTextColor={"grey"}
                style={{height: 40, width: 80, borderColor: themeBlue.bgColor(1), alignSelf:'center',
              margin: 12, borderWidth: 3, padding: 10, borderRadius: 10}}/>
              <Text style ={{fontSize: 20, fontWeight: 900, color: themeBlue.text, textAlign: "center", marginTop: 20}}>:</Text>
              <TextInput type='text' placeholder='00' placeholderTextColor={"grey"}
                style={{height: 40, width: 80, borderColor: themeBlue.bgColor(1), alignSelf:'center',
              margin: 12, borderWidth: 3, padding: 10, borderRadius: 10}}/>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems : 'center'}}>
            <TouchableOpacity style={{backgroundColor: themeBlue.bgColor(0.8), borderRadius: 9999, marginTop: 15, marginBottom: 15}}>
                <Text style={{fontSize: 20, marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5, color: "white"}}>AM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ 
                  backgroundColor: themeBlue.bgColor(0.8), borderRadius: 9999, 
                  marginTop: 15, marginBottom: 15, marginLeft: 15}}>
                <Text style={{fontSize: 20, marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5, color: "white"}}>PM</Text>
              </TouchableOpacity>
          </View>
        </View>

      <TouchableOpacity onPress={()=>navigation.goBack()}
        style={{backgroundColor: themeBlue.bgColor(1), justifyContent: 'center', marginTop: 20,
          alignItems: 'center', borderRadius: 20, marginLeft: 20, marginRight: 20}}>
        <Text style={{color: 'white', fontSize: 18, marginTop: 10, fontWeight: 700, height: 40, alignSelf: "center"}}>Set</Text>
      </TouchableOpacity>

      <Text style={{fontSize: 20, alignSelf: 'center', fontWeight: 700, marginTop: 10}}>Or</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}
        style={{backgroundColor: themeBlue.bgColor(1), justifyContent: 'center', marginTop: 20,
          alignItems: 'center', borderRadius: 20, marginLeft: 20, marginRight: 20}}>
        <Text style={{color: 'white', fontSize: 18, marginTop: 10, fontWeight: 700, height: 40, alignSelf: "center"}}>Sync with Alarm</Text>
      </TouchableOpacity>
    </View>
  )
}