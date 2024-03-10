import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import StepCard from '../../components/StepCard'
import BackButton from '../../components/BackButton'
import example from "../../assets/components/photo_selfie.png"

export default function AddPhotoInstructionScreen() {
  return (
    <View>
      <ScrollView>
            <Header title={"Photo Instruction"} />
            <StepCard stepNum={"01"} description={"Ideally, stand in front of the mirror. Move yourself around and choose a spot with bright light quality."} title={"Setting background"}  />
            <StepCard stepNum={"02"} title={"Taking the photo"} description={"Hold the device further from your main body such that your face is visible in the picture"}/>
            <StepCard stepNum={"03"} title={"Capture your progress"} description={"Flex your muscle, or make a pose, then cheese!"}/>
            <Text style={{fontSize: 20, alignSelf: 'center', fontWeight: 600, marginBottom: 10}}>Example</Text>
            <Image source={example} style={{alignSelf: 'center'}}/>
            <BackButton text={"Done"} />
      </ScrollView>
    </View>
  )
}