import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, FlatList } from 'react-native';
import Header from '../../components/Header';
import { Calendar, ChevronRight, Heart, Menu } from 'react-native-feather';
import { theme } from '../../theme';
import { useNavigation } from '@react-navigation/native';
 
export default function AddWorkoutScheduleScreen({route}) {
  const {dayString, name, weight, height, chosenDay} = route.params;
  const themeColors = theme("purple");
  const navigation = useNavigation();
  const [schedule, setSchedule] = useState(route.params.schedule)
  const [selectedWorkout, setSelectedWorkout] = useState(route.params.chosenAct? route.params.chosenAct : "");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [workoutModalVisible, setWorkoutModalVisible] = useState(false);
  const [difficultyModalVisible, setDifficultyModalVisible] = useState(false);
  const [chosenTime, setChosenTime] = useState(-1);
  const [errorMsg, setErrorMsg] = useState("")
  

  const workouts = ["Abs Workout", "Legs Workout", "Upperbody Workout", "Cardio Workout", "Lowerbody Workout"];
  const difficulties = ["Beginner", "Intermediate", "Advanced"];
  const time = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"]

  const handleWorkoutSelect = (workout) => {
    setSelectedWorkout(workout);
    setWorkoutModalVisible(false);
  };

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setDifficultyModalVisible(false);
  };

  const renderWorkoutItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleWorkoutSelect(item)} style={{ padding: 10, marginVertical: 5, backgroundColor: 'white', borderRadius: 10 }}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const renderDifficultyItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleDifficultySelect(item)} style={{ padding: 10, marginVertical: 5, backgroundColor: 'white', borderRadius: 10 }}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  // Function to check if a specific time slot is available
  const isTimeSlotAvailable = (timeIndex, dayIndex) => {//day index can be chosen day
    return !schedule[timeIndex][dayIndex];
  };

  const updateSchedule = ({activity, timeIndex, difficulty}) =>{
    if (isTimeSlotAvailable(timeIndex, chosenDay)) {
      const updatedSchedule = [...schedule];
      updatedSchedule[timeIndex][chosenDay] = activity;
      setSchedule(updatedSchedule); 
    } else {
      setErrorMsg("Occupied, please choose another time slot")
    }
  }

  return (
    <View marginLeft={20}>
      <ScrollView>
        <Header title={"Add Schedule"} />
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, marginRight: 20, borderRadius: 15, backgroundColor: 'white' }}>
          <Calendar stroke={"lightgrey"} strokeWidth={3} style={{ marginLeft: 20, marginTop: 5, marginBottom: 5 }} />
          <Text style={{ alignSelf: 'center', marginTop: 5, marginBottom: 5, marginLeft: 10, fontSize: 17, fontWeight: 700 }}>
            {dayString}
          </Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 20, fontWeight: 800, fontSize: 20 }}>Your Availability</Text>
        {time.map((t, timeIndex) => <TouchableOpacity key={t} onPress={() => setChosenTime(timeIndex)}
        style={{backgroundColor: timeIndex===chosenTime? themeColors.bgColor(1):
        themeColors.bgColor(0.3), marginTop: 20, borderRadius: 7, marginRight: 20}}> 
          <Text style={{marginTop: 5, marginBottom: 5, fontSize: 15, fontWeight: 700, alignSelf: 'center'}} >{t}</Text>
        </TouchableOpacity>)

        }

        <Text style={{ marginTop: 20, fontWeight: 800, fontSize: 20 }}>Details Workout</Text>
        <TouchableOpacity
          onPress={() => setWorkoutModalVisible(true)}
          style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginRight: 20, borderRadius: 15, backgroundColor: 'white' }}>
          <Heart stroke={"lightgrey"} strokeWidth={3} style={{ marginLeft: 20, marginTop: 5, marginBottom: 5 }} />
          <Text style={{ alignSelf: 'center', marginTop: 5, marginBottom: 5, marginLeft: 10, fontSize: 17, fontWeight: 700 }}>
            Choose Workout
          </Text>
          <Text style={{ color: 'grey', marginTop: 8, marginBottom: 5, marginLeft: 10, fontSize: 14, fontWeight: 400 }}>
            {selectedWorkout ? selectedWorkout : "Select Workout"}
          </Text>
          <ChevronRight stroke={"lightgrey"} strokeWidth={3} style={{ marginRight: 20, marginTop: 5, marginBottom: 5 }} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setDifficultyModalVisible(true)}
          style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginRight: 20, borderRadius: 15, backgroundColor: 'white' }}>
          <Menu stroke={"lightgrey"} strokeWidth={3} style={{ marginLeft: 20, marginTop: 5, marginBottom: 5 }} />
          <Text style={{ alignSelf: 'center', marginTop: 5, marginBottom: 5, marginLeft: 10, fontSize: 17, fontWeight: 700 }}>
            Difficulty
          </Text>
          <Text style={{ color: 'grey', marginTop: 8, marginBottom: 5, marginLeft: 10, fontSize: 14, fontWeight: 400 }}>
            {selectedDifficulty ? selectedDifficulty : "Select Difficulty"}
          </Text>
          <ChevronRight stroke={"lightgrey"} strokeWidth={3} style={{ marginRight: 20, marginTop: 5, marginBottom: 5 }} />
        </TouchableOpacity>

        {/* Error msg */}
        {errorMsg !== "" &&
         <Text style={{color: 'red', marginTop: 20, fontSize: 18, alignSelf: 'center', fontWeight: 600,
         }}>{errorMsg}</Text>}

        {/**Schedule change button */}
        <TouchableOpacity onPress={()=>{
          if (chosenTime > 0 && selectedWorkout && selectedDifficulty)
          {
            updateSchedule({activity: selectedWorkout, timeIndex: chosenTime})
            navigation.navigate("WorkoutSchedule", {sched: schedule, height: height, weight: weight, name: name, firstTime: false})
          } else{
            if (!selectedWorkout)setErrorMsg("Please choose a workout routine")
            else if (chosenTime < 0)setErrorMsg("Please choose a time slot ")
            else if (!selectedDifficulty)setErrorMsg("Please choose a level of difficulty")
            else setErrorMsg("Occupied, please choose another time slot")
          }
        }}
          style={{backgroundColor: themeColors.bgColor(1), justifyContent: 'center', marginTop: 30,
            alignItems: 'center', borderRadius: 20, marginLeft: 20, marginRight: 20, marginBottom: 50}}>
          <Text style={{color: 'white', fontSize: 18, marginTop: 10, fontWeight: 700, height: 40, alignSelf: "center"}}>Done</Text>
        </TouchableOpacity>

        {/* Workout Selection Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={workoutModalVisible}
          onRequestClose={() => {
            setWorkoutModalVisible(false);
          }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ backgroundColor: 'white', borderRadius: 15, padding: 20, width: '80%' }}>
              <FlatList
                data={workouts}
                renderItem={renderWorkoutItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </Modal>

        {/* Difficulty Level Selection Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={difficultyModalVisible}
          onRequestClose={() => {
            setDifficultyModalVisible(false);
          }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ backgroundColor: 'white', borderRadius: 15, padding: 20, width: '80%' }}>
              <FlatList
                data={difficulties}
                renderItem={renderDifficultyItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  )
}
