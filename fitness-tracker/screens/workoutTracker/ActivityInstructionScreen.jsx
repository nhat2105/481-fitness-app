import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import video from "../../assets/components/video_instruction.png"
import { theme } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import StepCard from '../../components/StepCard';
import CountDown from 'react-native-countdown-fixed';


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
    setTimerOn(true)
  }

  const startActivity = () => {
    setTimerOn(false)
    //jump to the next activity instruction
    if (currentAct < exercises[currentSet].length - 1){
      setCurrentAct(currentAct+1)
      console.log("Current act: ", currentAct)
    }
    else {
      if(currentSet < exercises.length - 1){
        setCurrentAct(1)
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
    console.log("Act: ", act);
    console/log(routine);
    
    
  }

  return (
    <View>
      <ScrollView>
        <Header title={"Instruction"} />


       
        {text == "Warm Up" &&  (
        
        <>
         {/**Video */}
         <Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} />

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
        </>
        
      )}

{text == "Skippings" && (
        
        <>
         {/**Video */}
         <Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} />

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
         <Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} />

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
         <Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} />

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
         <Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} />

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
         <Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} />

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
         <Image source={video} style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}} />

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
