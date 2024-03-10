import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import video from "../../assets/components/video_instruction.png"
import { theme } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import StepCard from '../../components/StepCard';

export default function ActivityInstructionScreen({route}) {
  const {text} = route.params;
  const themeColors = theme("purple")
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView>
        <Header title={"Instruction"} />
        {/**Video */}
        <Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} />

        {/**Title */}
        <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>{text}</Text>
        <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Easy | 390 Calories Burn</Text>

        {/**Description */}
        <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
        <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>A jumping jack, 
        also known as a star jump and called a side-straddle hop in the US military, 
        is a physical jumping exercise performed by jumping to a position with the legs spread wide...</Text>

        {/*Instruction Header */}
        <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between',
          marginTop: 40, marginLeft: 20, marginRight: 20}}>
          <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instruction</Text>
          <Text>4 steps</Text>
        </View>

        {/*Instruction Step */}
        <StepCard stepNum={"01"} title={"Spread Your Arm"}
        description={"To make the gestures feel more relaxed, stretch your arms as you start this movement. No bending of hands."} />
        <StepCard stepNum={"02"} title={"Rest at The Toe"} 
        description={"The basis of this movement is jumping. Now, what needs to be considered is that you have to use the tips of your feet"}
        />
        <StepCard stepNum={"03"} title={"Adjust Foot Movement"} 
        description={"Jumping Jack is not just an ordinary jump. But, you also have to pay close attention to leg movements."}/>

        <StepCard stepNum={"04"} title={"Clapping Both Hands"} 
        description={"This cannot be taken lightly. You see, without realizing it, the clapping of your hands helps you to keep your rhythm while doing the Jumping Jack"}
        />

        {/* Start Button 
        Ideally, timer would start to count down and when it is done, the final done screen pops up
        For now, the transition is immediate
        */}
        <TouchableOpacity onPress={() => navigation.navigate("DoneWorkout")}
         style={{marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 30, 
          backgroundColor: themeColors.bgColor(1), borderRadius: 15}}>
          <Text style={{fontSize: 20, fontWeight: 700, alignSelf: 'center', marginTop: 5, marginBottom: 5, color: 'white'}}>Start Timer</Text>
        </TouchableOpacity>     

      </ScrollView>
    </View>
  )
}