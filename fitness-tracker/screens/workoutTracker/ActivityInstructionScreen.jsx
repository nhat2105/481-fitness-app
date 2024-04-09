import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import video from "../../assets/components/video_instruction.png"
import { theme } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import StepCard from '../../components/StepCard';
import CountDown from 'react-native-countdown-fixed';
import WebView from 'react-native-webview';


export default function ActivityInstructionScreen({route}) {
  const {exercises, routine} = route.params;
  const [text, setText] = useState(route.params.text)
  const [currentSet, setCurrentSet] = useState(route.params.currentSet)
  const [currentAct, setCurrentAct] = useState(route.params.currentAct)
  const {timer, viewOnly} = route.params;
  const [timerOn, setTimerOn] = useState(false)
  const themeColors = theme("purple")
  const navigation = useNavigation();

  //CANCEL BUTTON halfway, this way it won't add to history schedule
  const startTimer = () =>{

    //attempting to skip duplicate warm up
    if (currentAct == 0 && currentSet == 0){
      setCurrentAct(currentAct+1)
    }
    setTimerOn(true)
    
  }

  const startActivity = () => {
    setTimerOn(false)
    //jump to the next activity instruction
    //if (currentAct == 0 && currentSet == 1){

    //}
    if (currentAct < exercises[currentSet].length - 1){
      setCurrentAct(currentAct+1)
      //console.log("Current act: ", currentAct)
    }
    else {
      if(currentSet < exercises.length - 1){
        setCurrentAct(0)
        setCurrentSet(currentSet+1) 
      }
      else {
        let timeIndex = 3;
        if (routine === "Upperbody Train")timeIndex = 4
        navigation.navigate("DoneWorkout", {routine: routine, timeIndex: timeIndex})
      }
    }
    let curS = exercises[currentSet];
    let curA = curS[currentAct];
    let act = curA.title;
    
    setText(act)
    //console.log("Act: ", act);
    //console.log(routine);
    
    
  }

  return (
    <View>
      <ScrollView>
        <Header title={"Instruction"} />


       
        {text == "Warm Up" && (
        
        <>
         {/**Video */}
         {/**<Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} /> */}
         <WebView
          style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
          javaScriptEnabled={true}
          allowsFullscreenVideo={true}
          source={{uri: "https://www.youtube.com/embed/CSrBaHX3HxQ"}}
        />

            {/**Title */}
    <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>{text}</Text>
    <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Easy | 100 Calories Burn</Text>

    {/**Description */}
    <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
    <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>A warm-up exercise is essential before starting any workout routine. It helps to increase blood flow, flexibility, and reduce the risk of injury...</Text>

    {/*Instruction Header */}
    <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between',
      marginTop: 40, marginLeft: 20, marginRight: 20}}>
      <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instruction</Text>
      <Text>3 steps</Text>
    </View>

    {/*Instruction Step */}
    <StepCard stepNum={"01"} title={"Start with Light Cardio"} 
    description={"Begin your warm-up with light cardiovascular exercises such as jogging in place, jumping rope, or brisk walking for about 5-10 minutes."} />
    
    <StepCard stepNum={"02"} title={"Dynamic Stretching"} 
    description={"Perform dynamic stretches that mimic movements you'll be doing during your workout. This can include leg swings, arm circles, and torso twists."} />

    <StepCard stepNum={"03"} title={"Activation Exercises"} 
    description={"Engage in activation exercises to wake up and activate specific muscle groups. This could involve bodyweight squats, lunges, or push-ups."} />
  
        </>
        
      )}
       

      {text == "Jumping Jacks" && (
        
        <>
         {/**Video */}
         {/**<Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} /> */}
         <WebView
          style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
          javaScriptEnabled={true}
          allowsFullscreenVideo={true}
          source={{uri: "https://www.youtube.com/embed/iSSAk4XCsRA"}}
        />

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
        </>
        
      )}

{text == "Skippings" && (
        
        <>
         {/**Video */}
         {/**<Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} /> */}
         <WebView
          style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
          javaScriptEnabled={true}
          allowsFullscreenVideo={true}
          source={{uri: "https://www.youtube.com/embed/u3zgHI8QnqE"}}
        />

         {/**Title */}
    <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>{text}</Text>
    <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Moderate | 250 Calories Burn</Text>

    {/**Description */}
    <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
    <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>Skipping, also known as jump rope, is a fantastic cardiovascular exercise that can be done almost anywhere. It's a great way to improve coordination, agility, and endurance...</Text>

    {/*Instruction Header */}
    <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between',
      marginTop: 40, marginLeft: 20, marginRight: 20}}>
      <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instruction</Text>
      <Text>4 steps</Text>
    </View>

    {/*Instruction Step */}
    <StepCard stepNum={"01"} title={"Choose the Right Rope"} 
    description={"Select a skipping rope that is the right length for you. Stand in the middle of the rope and make sure the handles reach your armpits."} />
    
    <StepCard stepNum={"02"} title={"Start with Basic Jumps"} 
    description={"Begin with basic two-footed jumps. Keep your knees slightly bent, and jump just high enough to clear the rope."} />

    <StepCard stepNum={"03"} title={"Incorporate Variations"} 
    description={"As you get comfortable, try incorporating different variations such as alternate foot jumps, high knees, or double unders."} />

    <StepCard stepNum={"04"} title={"Maintain Proper Form"} 
    description={"Focus on maintaining good posture, keeping your core engaged, and landing softly on the balls of your feet to reduce impact on your joints."} />
  </>
        
      )}
          {text == "Squats" && (
        
        <>
         {/**Video */}
        {/**<Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} /> */}
        <WebView
          style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
          javaScriptEnabled={true}
          allowsFullscreenVideo={true}
          source={{uri: "https://www.youtube.com/embed/xqvCmoLULNY"}}
        />


            {/**Title */}
      <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>Squats</Text>
      <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Intermediate | 150 Calories Burn</Text>

      {/**Description */}
      <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
      <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>Squats are a fundamental lower body exercise that targets the quadriceps, hamstrings, glutes, and core muscles. They help improve lower body strength, stability, and functional movement...</Text>

      {/*Instruction Header */}
      <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between',
        marginTop: 40, marginLeft: 20, marginRight: 20}}>
        <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instruction</Text>
        <Text>4 steps</Text>
      </View>

      {/*Instruction Step */}
      <StepCard stepNum={"01"} title={"Stand with Feet Shoulder-width Apart"} 
      description={"Position your feet shoulder-width apart, with your toes slightly turned out. Keep your back straight and chest up."} />

      <StepCard stepNum={"02"} title={"Lower Your Body"} 
      description={"Initiate the movement by bending your knees and pushing your hips back as if you're sitting back into a chair. Keep your weight on your heels."} />

      <StepCard stepNum={"03"} title={"Keep Chest Up and Back Straight"} 
      description={"Lower your body until your thighs are parallel to the ground or as low as you can comfortably go. Keep your chest up and back straight throughout the movement."} />

      <StepCard stepNum={"04"} title={"Rise Up to Starting Position"} 
      description={"Push through your heels to return to the starting position, straightening your legs and extending your hips. Squeeze your glutes at the top of the movement."} />

        </>
        
      )}
            {text == "Arm Raises" && (
        
        <>
         {/**Video */}
         {/**<Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} /> */}
         <WebView
          style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
          javaScriptEnabled={true}
          allowsFullscreenVideo={true}
          source={{uri: "https://www.youtube.com/embed/sOcYlBI85hc"}}
        />

          {/**Title */}
          <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>Arm Raises</Text>
          <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Beginner | 100 Calories Burn</Text>

          {/**Description */}
          <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
          <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>Arm Raises target the muscles of the shoulders, particularly the deltoids, and also engage the muscles of the upper back and arms. They help improve shoulder mobility and stability...</Text>

          {/*Instruction Header */}
          <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between',
            marginTop: 40, marginLeft: 20, marginRight: 20}}>
            <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instruction</Text>
            <Text>3 steps</Text>
          </View>

          {/*Instruction Step */}
          <StepCard stepNum={"01"} title={"Stand Tall with Feet Hip-width Apart"} 
          description={"Stand with your feet hip-width apart, and keep your spine straight with your shoulders relaxed."} />

          <StepCard stepNum={"02"} title={"Raise Arms to Shoulder Height"} 
          description={"Slowly lift your arms out to the sides until they reach shoulder height. Keep your elbows slightly bent throughout the movement."} />

          <StepCard stepNum={"03"} title={"Lower Arms to Starting Position"} 
          description={"Lower your arms back down to your sides with control, returning to the starting position. Maintain tension in your shoulders and avoid letting your arms drop too quickly."} />
                  </>
        
      )}

       {text == "Rest & Drinks" && (
        
        <>
         {/**Video */}
         <Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} />
         

         {/**Title */}
    <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>Rest and Drink</Text>
    <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Recovery | No Calories Burn</Text>

    {/**Description */}
    <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
    <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>Rest and Drink period is an essential part of any workout routine. It allows your body to recover and rehydrate after exertion, helping to prevent fatigue and dehydration...</Text>

    {/*Instruction Header */}
    <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between',
      marginTop: 40, marginLeft: 20, marginRight: 20}}>
      <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instructions</Text>
      <Text>2 steps</Text>
    </View>

    {/*Instruction Step */}
    <StepCard stepNum={"01"} title={"Rest"} 
    description={"Take a moment to rest and catch your breath. Allow your heart rate to gradually decrease and your muscles to relax."} />

    <StepCard stepNum={"02"} title={"Hydrate"} 
    description={"Drink water or a sports drink to rehydrate your body. It's important to replenish fluids lost during exercise to maintain proper hydration levels."} />

        </>
        
      )}
            {text == "Incline Push-Ups" && (
        
        <>
         {/**Video */}
         {/**<Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} />*/}
         <WebView
          style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
          javaScriptEnabled={true}
          allowsFullscreenVideo={true}
          source={{uri: "https://www.youtube.com/embed/cfns5VDVVvk"}}
        />

        {/**Title */}
<Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>Incline Push-Ups</Text>
<Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Intermediate | 120 Calories Burn</Text>

{/**Description */}
<Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
<Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>Incline Push-Ups are a variation of the traditional push-up that target the chest, shoulders, and triceps. They are performed with the hands elevated on a surface, making them slightly easier than regular push-ups...</Text>

{/*Instruction Header */}
<View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between',
  marginTop: 40, marginLeft: 20, marginRight: 20}}>
  <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instructions</Text>
  <Text>4 steps</Text>
</View>

{/*Instruction Step */}
<StepCard stepNum={"01"} title={"Find a Stable Surface"} 
description={"Find a stable surface, such as a bench, chair, or elevated platform, to place your hands on. Ensure that it can support your body weight without tipping over."} />

<StepCard stepNum={"02"} title={"Assume Push-Up Position"} 
description={"Position yourself in a plank position with your hands placed slightly wider than shoulder-width apart on the elevated surface. Keep your body in a straight line from head to heels."} />

<StepCard stepNum={"03"} title={"Lower Your Chest"} 
description={"Bend your elbows and lower your chest towards the elevated surface while maintaining a straight back. Keep your elbows close to your body as you descend."} />

<StepCard stepNum={"04"} title={"Push Back Up"} 
description={"Push through your palms to extend your arms and return to the starting position. Keep your core engaged throughout the movement and avoid arching your back."} />

        </>
        
      )}
            {text == "Push-Ups" && (
        
        <>
         {/**Video */}
         {/**<Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} /> */}
         <WebView
          style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
          javaScriptEnabled={true}
          allowsFullscreenVideo={true}
          source={{uri: "https://www.youtube.com/embed/IODxDxX7oi4"}}
        />

        {/**Title */}
<Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>Push-Ups</Text>
<Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Intermediate | 150 Calories Burn</Text>

{/**Description */}
<Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
<Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>Push-Ups are a classic bodyweight exercise that target the chest, shoulders, triceps, and core muscles. They help build upper body strength, muscular endurance, and stability...</Text>

{/*Instruction Header */}
<View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between',
  marginTop: 40, marginLeft: 20, marginRight: 20}}>
  <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instructions</Text>
  <Text>4 steps</Text>
</View>

{/*Instruction Step */}
<StepCard stepNum={"01"} title={"Assume Plank Position"} 
description={"Start in a plank position with your hands placed slightly wider than shoulder-width apart and your body in a straight line from head to heels. Keep your core engaged and your glutes squeezed."} />

<StepCard stepNum={"02"} title={"Lower Your Body"} 
description={"Bend your elbows and lower your body towards the ground while keeping your back flat and your elbows close to your sides. Lower yourself until your chest nearly touches the ground."} />

<StepCard stepNum={"03"} title={"Push Back Up"} 
description={"Push through your palms to extend your arms and return to the starting position. Keep your core engaged and your body in a straight line throughout the movement."} />

<StepCard stepNum={"04"} title={"Repeat"} 
description={"Continue performing push-ups for the desired number of repetitions or time, maintaining proper form and breathing rhythm."} />

        </>
        
      )}
            {text == "Sit-Ups" && (
        
        <>
         {/**Video */}
         {/**<Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} /> */}
         <WebView
          style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
          javaScriptEnabled={true}
          allowsFullscreenVideo={true}
          source={{uri: "https://www.youtube.com/embed/jDwoBqPH0jk"}}
        />

       {/**Title */}
<Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>Sit-Ups</Text>
<Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Intermediate | 120 Calories Burn</Text>

{/**Description */}
<Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
<Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>Sit-Ups are a classic abdominal exercise that target the rectus abdominis and other core muscles. They help strengthen the abdominal muscles and improve core stability...</Text>

{/*Instruction Header */}
<View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between',
  marginTop: 40, marginLeft: 20, marginRight: 20}}>
  <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instructions</Text>
  <Text>4 steps</Text>
</View>

{/*Instruction Step */}
<StepCard stepNum={"01"} title={"Lie Down with Knees Bent"} 
description={"Lie down on your back on a comfortable surface with your knees bent and feet flat on the ground. Place your hands behind your head or crossed over your chest."} />

<StepCard stepNum={"02"} title={"Engage Core Muscles"} 
description={"Engage your core muscles and use your abdominal strength to lift your upper body off the ground. Avoid pulling on your neck or using momentum."} />

<StepCard stepNum={"03"} title={"Sit Up"} 
description={"Lift your torso towards your knees, bringing your chest towards your thighs. Keep your lower back in contact with the ground throughout the movement."} />

<StepCard stepNum={"04"} title={"Lower Back Down"} 
description={"Lower your torso back down to the starting position with control, keeping your core engaged. Repeat for the desired number of repetitions."} />

        </>
        
      )}

        {text === "Lunges" && (
          <>
            {/* Video */}
            <WebView
              style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
              javaScriptEnabled={true}
              allowsFullscreenVideo={true}
              source={{uri: "https://www.youtube.com/embed/QOVaHwm-Q6U"}}
            />

            {/* Title */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>Lunges</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Intermediate | 150 Calories Burn</Text>

            {/* Description */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>Lunges are a lower body exercise that primarily targets the quadriceps, glutes, and hamstrings. They help improve lower body strength, stability, and balance.</Text>

            {/* Instruction Header */}
            <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between', marginTop: 40, marginLeft: 20, marginRight: 20}}>
              <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instructions</Text>
              <Text>4 steps</Text>
            </View>

            {/* Instruction Steps */}
            <StepCard stepNum={"01"} title={"Starting Position"} 
            description={"Stand tall with your feet shoulder-width apart. Keep your hands on your hips or by your sides for balance."} />
            
            <StepCard stepNum={"02"} title={"Lunge Movement"} 
            description={"Take a large step forward with one leg and lower your body until both knees are bent at about a 90-degree angle. Your back knee should hover just above the ground."} />

            <StepCard stepNum={"03"} title={"Return to Starting Position"} 
            description={"Push through the heel of your front foot to return to the starting position. Repeat on the other side to complete one rep."} />
            
            <StepCard stepNum={"04"} title={"Repeat"} 
            description={"Continue alternating legs and lunging forward to complete the desired number of repetitions."} />
          </>
        )}

          {text === "Deadlifts" && (
          <>
            {/* Video */}
            <WebView
              style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
              javaScriptEnabled={true}
              allowsFullscreenVideo={true}
              source={{uri: "https://www.youtube.com/embed/op9kVnSso6Q"}}
            />

            {/* Title */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>Deadlifts</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Advanced | 200 Calories Burn</Text>

            {/* Description */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>Deadlifts are a compound exercise that target multiple muscle groups including the lower back, glutes, hamstrings, and core. They help improve overall strength and posture when performed with proper form.</Text>

            {/* Instruction Header */}
            <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between', marginTop: 40, marginLeft: 20, marginRight: 20}}>
              <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instructions</Text>
              <Text>5 steps</Text>
            </View>

            {/* Instruction Steps */}
            <StepCard stepNum={"01"} title={"Setup"} 
            description={"Stand with your feet shoulder-width apart, toes pointing forward or slightly outward. Place a barbell in front of you on the ground, with the weights evenly distributed."} />
            
            <StepCard stepNum={"02"} title={"Grip the Barbell"} 
            description={"Bend at your hips and knees, keeping your back straight. Grip the barbell with both hands, slightly wider than shoulder-width apart, using an overhand grip (palms facing down) or a mixed grip (one palm facing up, one palm facing down)."} />

            <StepCard stepNum={"03"} title={"Lift the Barbell"} 
            description={"Engage your core and drive through your heels as you lift the barbell, keeping it close to your body. Straighten your hips and knees simultaneously, extending your body fully."} />
            
            <StepCard stepNum={"04"} title={"Lower the Barbell"} 
            description={"Lower the barbell back down by bending at your hips and knees, keeping your back straight. Control the descent of the barbell to the ground."} />

            <StepCard stepNum={"05"} title={"Repeat"} 
            description={"Repeat the movement for the desired number of repetitions, ensuring proper form and technique throughout."} />
          </>
        )}
        
        {text === "Step Ups" && (
          <>
            {/* Video */}
            <WebView
              style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
              javaScriptEnabled={true}
              allowsFullscreenVideo={true}
              source={{uri: "https://www.youtube.com/embed/jAjLQrHilOw"}}
            />

            {/* Title */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>Step Ups</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Intermediate | 150 Calories Burn</Text>

            {/* Description */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>Step Ups are a lower body exercise that target the quadriceps, hamstrings, and glutes. They help improve lower body strength, stability, and balance.</Text>

            {/* Instruction Header */}
            <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between', marginTop: 40, marginLeft: 20, marginRight: 20}}>
              <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instructions</Text>
              <Text>4 steps</Text>
            </View>

            {/* Instruction Steps */}
            <StepCard stepNum={"01"} title={"Setup"} 
            description={"Stand in front of a sturdy bench or step platform with your feet hip-width apart."} />
            
            <StepCard stepNum={"02"} title={"Step Up"} 
            description={"Step onto the bench with one foot, ensuring your entire foot is planted securely on the surface. Push through the heel of your foot to lift your body up onto the bench."} />

            <StepCard stepNum={"03"} title={"Extend Legs"} 
            description={"Fully extend your legs at the top of the movement, standing tall on the bench with both feet."} />
            
            <StepCard stepNum={"04"} title={"Step Down"} 
            description={"Step down from the bench with control, lowering your body back to the starting position. Alternate legs with each repetition."} />
          </>
        )}
              {text === "Glute Bridges" && (
          <>
            {/* Video */}
            <WebView
              style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
              javaScriptEnabled={true}
              allowsFullscreenVideo={true}
              source={{uri: "https://www.youtube.com/embed/Mp2F0SfcDHU"}}
            />

            {/* Title */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>Glute Bridges</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Intermediate | 120 Calories Burn</Text>

            {/* Description */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>Glute Bridges are a lower body exercise that primarily target the glutes and hamstrings. They help improve lower body strength, stability, and posture.</Text>

            {/* Instruction Header */}
            <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between', marginTop: 40, marginLeft: 20, marginRight: 20}}>
              <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instructions</Text>
              <Text>4 steps</Text>
            </View>

            {/* Instruction Steps */}
            <StepCard stepNum={"01"} title={"Setup"} 
            description={"Lie on your back on a mat with your knees bent and feet flat on the ground. Keep your arms by your sides with palms facing down."} />
            
            <StepCard stepNum={"02"} title={"Lift Hips"} 
            description={"Engage your core and press through your heels to lift your hips off the ground, forming a straight line from your shoulders to your knees at the top of the movement."} />

            <StepCard stepNum={"03"} title={"Squeeze Glutes"} 
            description={"Squeeze your glutes at the top of the movement, ensuring they are fully engaged. Avoid arching your lower back excessively."} />
            
            <StepCard stepNum={"04"} title={"Lower Hips"} 
            description={"Lower your hips back down to the starting position with control, maintaining tension in your glutes throughout the exercise. Repeat for the desired number of repetitions."} />
          </>
        )}


        {text === "Plie Squats" && (
          <>
            {/* Video */}
            <WebView
              style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
              javaScriptEnabled={true}
              allowsFullscreenVideo={true}
              source={{uri: "https://www.youtube.com/embed/vkF3e8aNXUc"}}
            />

            {/* Title */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>Plie Squats</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Intermediate | 140 Calories Burn</Text>

            {/* Description */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>Plie Squats are a lower body exercise that target the inner thighs, quads, and glutes. They help improve lower body strength, flexibility, and stability.</Text>

            {/* Instruction Header */}
            <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between', marginTop: 40, marginLeft: 20, marginRight: 20}}>
              <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instructions</Text>
              <Text>4 steps</Text>
            </View>

            {/* Instruction Steps */}
            <StepCard stepNum={"01"} title={"Starting Position"} 
            description={"Stand with your feet wider than shoulder-width apart, toes pointing outwards at a 45-degree angle. Keep your hands on your hips or clasped in front of your chest for balance."} />
            
            <StepCard stepNum={"02"} title={"Squat Down"} 
            description={"Bend your knees and lower your body down into a squat, ensuring your knees track over your toes and your back remains straight. Keep your chest lifted throughout the movement."} />

            <StepCard stepNum={"03"} title={"Engage Muscles"} 
            description={"Engage your inner thigh muscles as you push through your heels to return to the starting position. Squeeze your glutes at the top of the movement."} />
            
            <StepCard stepNum={"04"} title={"Repeat"} 
            description={"Repeat the movement for the desired number of repetitions, maintaining proper form and control throughout."} />
          </>
        )}


                {text === "Pull-Ups" && (
          <>
            {/* Video */}
            <WebView
              style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
              javaScriptEnabled={true}
              allowsFullscreenVideo={true}
              source={{uri: "https://www.youtube.com/embed/eGo4IYlbE5g"}}
            />

            {/* Title */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>Pull-Ups</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Advanced | 170 Calories Burn</Text>

            {/* Description */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>Pull-Ups are a compound upper body exercise that primarily target the back, shoulders, and arms. They help improve upper body strength, muscle definition, and grip strength.</Text>

            {/* Instruction Header */}
            <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between', marginTop: 40, marginLeft: 20, marginRight: 20}}>
              <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instructions</Text>
              <Text>4 steps</Text>
            </View>

            {/* Instruction Steps */}
            <StepCard stepNum={"01"} title={"Grip the Bar"} 
            description={"Hang from a pull-up bar with your hands slightly wider than shoulder-width apart, palms facing away from you. Keep your arms fully extended and engage your core."} />
            
            <StepCard stepNum={"02"} title={"Pull Up"} 
            description={"Pull yourself up towards the bar by engaging your back muscles and squeezing your shoulder blades together. Keep your elbows close to your body as you pull yourself up."} />

            <StepCard stepNum={"03"} title={"Lower Down"} 
            description={"Lower yourself back down to the starting position with control, fully extending your arms. Avoid swinging or using momentum during the movement."} />
            
            <StepCard stepNum={"04"} title={"Repeat"} 
            description={"Repeat the movement for the desired number of repetitions, focusing on maintaining proper form and controlled movements throughout."} />
          </>
        )}

        {text === "Incline Bench Press" && (
          <>
            {/* Video */}
            <WebView
              style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
              javaScriptEnabled={true}
              allowsFullscreenVideo={true}
              source={{uri: "https://www.youtube.com/embed/4fSb_FWe8kY"}}
            />

            {/* Title */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>Incline Bench Press</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Intermediate | 160 Calories Burn</Text>

            {/* Description */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>Incline Bench Press is a compound upper body exercise that primarily targets the upper chest, shoulders, and triceps. It helps build upper body strength, muscle mass, and definition.</Text>

            {/* Instruction Header */}
            <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between', marginTop: 40, marginLeft: 20, marginRight: 20}}>
              <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instructions</Text>
              <Text>4 steps</Text>
            </View>

            {/* Instruction Steps */}
            <StepCard stepNum={"01"} title={"Setup"} 
            description={"Lie on an incline bench set at a 45-degree angle with your feet flat on the floor. Grip the barbell with your hands slightly wider than shoulder-width apart, palms facing away from you."} />
            
            <StepCard stepNum={"02"} title={"Lower the Bar"} 
            description={"Lower the barbell towards your upper chest in a controlled manner, keeping your elbows at a 45-degree angle to your body. Keep your core engaged and feet planted firmly on the floor."} />

            <StepCard stepNum={"03"} title={"Press Up"} 
            description={"Press the barbell back up to the starting position, extending your arms fully while keeping your chest lifted. Keep your elbows in line with your wrists throughout the movement."} />
            
            <StepCard stepNum={"04"} title={"Repeat"} 
            description={"Repeat the movement for the desired number of repetitions, focusing on maintaining proper form and controlled movements throughout."} />
          </>
        )}

        {text === "Dumbbell Flys" && (
          <>
            {/* Video */}
            <WebView
              style={{ marginLeft: 20, marginRight: 20, alignSelf: 'center', marginTop: 20, width: 320, height: 220, marginBottom: 20}}
              javaScriptEnabled={true}
              allowsFullscreenVideo={true}
              source={{uri: "https://www.youtube.com/embed/1vQ_FJ2i_FU"}}
            />

            {/* Title */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, color: themeColors.text}}>Dumbbell Flys</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 17}}>Intermediate | 150 Calories Burn</Text>

            {/* Description */}
            <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 20, marginTop: 40, color: themeColors.text}}>Description</Text>
            <Text style={{color: 'grey', fontWeight: 600, marginLeft: 20, fontSize: 16, marginTop: 10, marginRight: 20}}>Dumbbell Flys are an isolation exercise that target the chest muscles, primarily the pectoralis major. They help develop chest muscle definition, strength, and stability.</Text>

            {/* Instruction Header */}
            <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between', marginTop: 40, marginLeft: 20, marginRight: 20}}>
              <Text style={{fontSize: 20, fontWeight: 800, color: themeColors.text}}>Instructions</Text>
              <Text>4 steps</Text>
            </View>

            {/* Instruction Steps */}
            <StepCard stepNum={"01"} title={"Setup"} 
            description={"Lie on a flat bench with a dumbbell in each hand, palms facing inward. Extend your arms straight above your chest, keeping a slight bend in your elbows."} />
            
            <StepCard stepNum={"02"} title={"Lower the Weights"} 
            description={"Lower the dumbbells out to the sides in a wide arc, maintaining a slight bend in your elbows. Keep your elbows in line with your shoulders throughout the movement."} />

            <StepCard stepNum={"03"} title={"Contract Chest Muscles"} 
            description={"Contract your chest muscles to bring the dumbbells back up to the starting position, squeezing your pecs together at the top of the movement."} />
            
            <StepCard stepNum={"04"} title={"Repeat"} 
            description={"Repeat the movement for the desired number of repetitions, focusing on maintaining proper form and controlled movements throughout."} />
          </>
        )}




        {/* Start Button 
        Ideally, timer would start to count down and when it is done, the final done screen pops up
        For now, the transition is immediate
        */}
        { viewOnly == false && !timerOn &&
          <TouchableOpacity //onPress={startActivity}
          onPress={startTimer}
          style={{marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 30, 
            backgroundColor: themeColors.bgColor(1), borderRadius: 15}}>
            <Text style={{fontSize: 20, fontWeight: 700, alignSelf: 'center', marginTop: 5, marginBottom: 5, color: 'white'}}>Start Timer</Text>
          </TouchableOpacity> 
        }
        { viewOnly && 
        <View>
            <Text style={{fontSize: 18, color: 'red', marginTop: 20, marginLeft: 30, marginRight: 30, marginBottom: 20,
            fontWeight: 600}}
            >View Only Instruction - Please either add the activity to your schedule, or start with "Warm Up" first</Text>
          </View>
          }

        { timerOn &&
          <CountDown
            until={10}
            size={25}
            onFinish={() => {
              alert("Well done! Let's move on to the next exercise");
              startActivity();
            }}
            
            digitStyle={{backgroundColor: '#FFF'}}
            digitTxtStyle={{color: themeColors.text}}
            timeToShow={['M', 'S']}
            timeLabels={{m: 'Min(s)', s: 'Sec(s)'}}
            style={{marginBottom: 20, marginTop: 20}}
          />  
        }      
        { timerOn && 
          /**Skip button for those who are fast */
          <TouchableOpacity onPress={startActivity}
          style={{backgroundColor: themeColors.bgColor(1), borderRadius: 8, marginLeft: 40, marginRight: 40, marginBottom: 40,
          }}>
            <Text style={{color: 'white', alignSelf: 'center', fontSize: 20, fontWeight: 600}}>Start Next Activity</Text>
          </TouchableOpacity>
        }
      </ScrollView>
    </View>
  )
}
