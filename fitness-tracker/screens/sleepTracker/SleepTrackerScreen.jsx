import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { theme } from '../../theme'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import chart from "../../assets/components/sleeptracker_graph.png"
import sleepInputDisplay from "../../assets/components/Banner.png"
import bedIcon from "../../assets/components/Icon-Bed.png"
import alarmIcon from "../../assets/components/Icon-Alaarm.png"
import Header from '../../components/Header'

export default function SleepTrackerScreen() {
  const themeColors = theme('purple');
  const themeBlue = theme('blue');
  const navigation = useNavigation();

  const goToSetSleepTracker = () =>{
    navigation.navigate("SetSleepTracker");
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView>
        <Header color={'blue'} title={"Sleep Tracker"} />
        <Image source={chart} style={{marginTop: 20, alignSelf: 'center'}} />
        <View>
          <Image source={sleepInputDisplay} style={{marginTop: 20, alignSelf: 'center', zIndex: 0, width: '100%'}}/>
          <Text style={{position: 'absolute', color: "white", fontSize: 20, fontWeight: 500,
          zIndex: 1, marginLeft: 60, marginTop: 40}}>Last Night Sleep</Text>
          <Text style={{position: 'absolute', color: 'black', fontSize: 22, fontWeight: 500,
          zIndex: 1, marginLeft: 60, marginTop: 70}}>7h 20m</Text>
        </View>

        <TouchableOpacity onPress={goToSetSleepTracker}
            style={{backgroundColor: themeBlue.bgColor(1), justifyContent: 'center', display: 'flex', marginTop: 20,
            alignItems: 'center', borderRadius: 20, marginLeft: 20, marginRight: 20, flexDirection: 'row'}}>
          <View style={{justifyContent: 'center', alignItems:'center'}}>
            <Text style={{color: 'white', fontSize: 18, marginTop: 10, fontWeight: 700, height: 40}}>Check Your Sleep Schedule</Text>
          </View>
        </TouchableOpacity>

        <Text style={{color: themeBlue.text, fontSize: 22, fontWeight: 700, marginLeft: 30, marginTop: 20}}>Today Schedule</Text>

        {/**Bedtime */}
        <View style={{ marginTop: 20, marginLeft: 30, marginRight: 30}} >
          <View style={{display: 'flex', flexDirection: 'row', backgroundColor: 'white', borderRadius: 15}} >
            <Image source={bedIcon} style={{marginLeft: 20, marginTop: 13}} />
            <View marginLeft={20} >
              <Text style={{marginTop: 5, fontSize: 17, fontWeight: 600 }} >Bedtime: 9:30 pm</Text>
              <Text style={{marginTop: 5, fontSize: 17, fontWeight: 600, marginBottom: 5, color: themeBlue.text }}>In: 6h 20m</Text>
            </View>
            <TouchableOpacity onPress={goToSetSleepTracker}
              style={{backgroundColor: themeBlue.bgColor(1), marginBottom: 10,
              marginTop: 10, borderRadius: 15, marginLeft: 30, marginRight: 30}}>
              <Text style={{marginTop: 5, fontSize: 17, fontWeight: 600, marginLeft: 10, marginRight: 10 }}>Reset</Text>
            </TouchableOpacity>
          </View>

           {/**Alarm*/}
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 10, backgroundColor: 'white', borderRadius: 15}} >
            <Image source={alarmIcon} style={{marginLeft: 20, marginTop: 13}} />
            <View marginLeft={20} >
              <Text style={{marginTop: 5, fontSize: 17, fontWeight: 600 }} >Alarm: 5:30 am</Text>
              <Text style={{marginTop: 5, fontSize: 17, fontWeight: 600, marginBottom: 5, color: themeBlue.text }}>In: 14h 20m</Text>
            </View>
            <TouchableOpacity onPress={goToSetSleepTracker}
              style={{backgroundColor: themeBlue.bgColor(1), marginBottom: 10,
              marginTop: 10, borderRadius: 15, marginLeft: 46, marginRight: 30}}>
              <Text style={{marginTop: 5, fontSize: 17, fontWeight: 600, marginLeft: 10, marginRight: 10 }}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>

        


      </ScrollView>
    </View>
  )
}