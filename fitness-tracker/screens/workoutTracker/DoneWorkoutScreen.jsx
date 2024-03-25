import { View, Text, Image } from 'react-native'
import React from 'react'
import poster from "../../assets/components/WorkoutDone.png"
import BackButton from '../../components/BackButton'
import { useNavigation } from '@react-navigation/native';

export default function DoneWorkoutScreen({route}) {
  const {routine, curSched, timeIndex} = route.params;
  const navigation = useNavigation();
  //Timer + After done is clicked, also add it to the finished history screen
  //console.log("Timer passed: " , timer, " ms")

  const goToDashboard = () =>{
    let sched = curSched;
    sched[timeIndex][0] = routine; //hard code to current day
    navigation.navigate("Dashboard", {history: sched})
  }
  
  return (
    
    <View style={{ marginTop: 100}}>
      <Image source={poster} style= {{alignSelf: 'center'}} />
      <Text style={{marginTop: 20, fontWeight: 900, fontSize: 20, marginLeft: 20, marginRight: 20, alignSelf: 'center'}}>
        Congratulations, You Have Finished {routine} !
      </Text>
      <BackButton text={"Done"} action={goToDashboard} /> 
      {/*navigate to the main dashboard with updated schedule history
        only need to be done on main dashboard history itself
        schedule still needs to be passed from workout tracker all the way to this page {just current exercise}
      */}
    </View>
  )
}