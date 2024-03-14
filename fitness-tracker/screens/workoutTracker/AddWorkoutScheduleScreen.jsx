import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, FlatList } from 'react-native';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { Calendar, ChevronRight, Heart, Menu } from 'react-native-feather';
import { theme } from '../../theme';
import { useNavigation } from '@react-navigation/native';

export default function AddWorkoutScheduleScreen() {
  const themeColors = theme("purple");
  const navigation = useNavigation();
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [workoutModalVisible, setWorkoutModalVisible] = useState(false);
  const [difficultyModalVisible, setDifficultyModalVisible] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("");

  const workouts = ["Abs Workout", "Legs Workout", "Upper Body Workout", "Cardio Workout"];
  const difficulties = ["Beginner", "Intermediate", "Advanced"];

  const handleWorkoutSelect = (workout) => {
    setSelectedWorkout(workout);
    setWorkoutModalVisible(false);
  };

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setDifficultyModalVisible(false);
  };

  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
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

  return (
    <View marginLeft={20}>
      <Header title={"Add Schedule"} />
      <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, marginRight: 20, borderRadius: 15, backgroundColor: 'white' }}>
        <Calendar stroke={"lightgrey"} strokeWidth={3} style={{ marginLeft: 20, marginTop: 5, marginBottom: 5 }} />
        <Text style={{ alignSelf: 'center', marginTop: 5, marginBottom: 5, marginLeft: 10, fontSize: 17, fontWeight: 700 }}>
          Monday, Feb 26
        </Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20, fontWeight: 800, fontSize: 20 }}>Time</Text>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
        <TextInput type='text' placeholder='10' placeholderTextColor={"grey"}
          style={{ height: 40, width: 80, borderColor: themeColors.bgColor(1), alignSelf: 'center', margin: 12, borderWidth: 3, padding: 10, borderRadius: 10 }} />
        <Text style={{ fontSize: 20, fontWeight: 900, color: themeColors.text, textAlign: "center", marginTop: 20 }}>:</Text>
        <TextInput type='text' placeholder='30' placeholderTextColor={"grey"}
          style={{ height: 40, width: 80, borderColor: themeColors.bgColor(1), alignSelf: 'center', margin: 12, borderWidth: 3, padding: 10, borderRadius: 10 }} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => handlePeriodSelect("AM")} style={{ backgroundColor: selectedPeriod === "AM" ? themeColors.bgColor(0.8) : themeColors.bgColor(0.6), borderRadius: 9999, marginTop: 15, marginBottom: 15 }}>
          <Text style={{ fontSize: 20, marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5, color: "white" }}>AM</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePeriodSelect("PM")} style={{ backgroundColor: selectedPeriod === "PM" ? themeColors.bgColor(0.8) : themeColors.bgColor(0.6), borderRadius: 9999, marginTop: 15, marginBottom: 15, marginLeft: 15 }}>
          <Text style={{ fontSize: 20, marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5, color: "white" }}>PM</Text>
        </TouchableOpacity>
      </View>

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

      <BackButton text={"Done"} onPress={() => {
        // Your code to add workout to the calendar
        if (selectedWorkout && selectedDifficulty && selectedPeriod) {
          navigation.navigate("WorkoutSchedule");
        } else {
          // Handle error, all fields should be selected
        }
      }} />

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
    </View>
  )
}
