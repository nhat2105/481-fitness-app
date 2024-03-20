import { View, Text, Image } from 'react-native'
import React from 'react'
import poster from "../../assets/components/WorkoutDone.png"
import BackButton from '../../components/BackButton'

export default function DoneWorkoutScreen({route}) {
  //Timer + After done is clicked, also add it to the finished history screen
  //console.log("Timer passed: " , timer, " ms")
  
  return (
    
    <View style={{ marginTop: 100}}>
      <Image source={poster} style= {{alignSelf: 'center'}} />
      <Text style={{marginTop: 20, fontWeight: 900, fontSize: 20, marginLeft: 20, marginRight: 20, alignSelf: 'center'}}>
        Congratulations, You Have Finished The Exercise!
      </Text>
      <BackButton text={"Done"}  />
    </View>
  )
}