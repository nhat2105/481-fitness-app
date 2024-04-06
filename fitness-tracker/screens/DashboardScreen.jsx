import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Icon from 'react-native-feather'
import { theme } from '../theme';
import { useNavigation } from '@react-navigation/native';
import heart_status from "../assets/components/Heart-Rate-Status.png"
import calories_pie from "../assets/components/Calories-Pie.png"
import walking_bar from "../assets/components/walking-bar.png"
import sleep_graph from "../assets/components/Sleep-Graph.png"
import workout_graph from "../assets/components/workout_graph.png"
import real_time from "../assets/components/Real-Time-Updates-Progress.png"
import sample1 from "../assets/components/photo_sample1.png"
import sample3 from "../assets/components/photo_sample3.png"
import sample2 from "../assets/components/photo_sample2.png"

//if viewMode on, disable all buttons

export default function DashboardScreen({route}) {
    let infoTheme = theme("blue");
    let [firstTime, setFirstTime] = useState(route.params === false ? false: true)
    let { sched }  = route.params; 
    //console.log("First time: ", firstTime);
    let [schedule, setSchedule] = useState(sched);
    const [viewInfo, setViewInfo] = useState(false);
    const [infoStep, setInfoStep] = useState(0);

    //easier way: only pass the one with [timeIndex][day] = routineName, pass it to history, let history update itself
    const {historyTimeIndex, dayHistory, routine} = route.params;

    useEffect(() => {
        // Update local state when the 'schedule' prop changes
        if (route.params && route.params.sched) {
            setSchedule(route.params.sched);
        }
    }, [route.params]);

    const viewInstruction = () => {
        setViewInfo(true)
        setInfoStep(1)
    }

    let gallery = [
        { 
            image: sample1,
            month: "May",
            def: "true"
        },
        { 
            image: sample2,
            month: "June",
            def: "true"
        },
        { 
            image: sample3,
            month: "July",
            def: "true"
        },
    ]

    let { name, weight, height, metricSystem } = route.params;

    // Convert height and weight to metric units if the imperial system is chosen
    if (metricSystem === 'imperial') {
        // Split height into feet and inches
        const [feet, inches] = height.split('.'); // Assuming height is provided in the format "5.4" for 5 feet 4 inches
    
        // Convert feet and inches to inches
        const totalInches = (Number(feet) * 12) + Number(inches);
    
        // Convert height from inches to centimeters (1 inch = 2.54 cm)
        height = totalInches * 2.54;
    
        // Convert weight from pounds to kilograms (1 pound = 0.453592 kg)
        weight = Number(weight) * 0.453592;
    }
    
    // Calculate BMI
    var BMI = Number(weight) / (Number(height) * Number(height)) * 10000;
    BMI = Number(BMI.toFixed(1)); // Round to one decimal place
    
    // Determine BMI status
    let bmiStatus = "You have a normal weight status";
    if (BMI >= 25) bmiStatus = "You have an overweight status";
    else if (BMI < 18.5) bmiStatus = "You have an underweight status";

    const themeColors = theme('purple');
    const navigation = useNavigation();
    const [notif, SetNotif] = useState(false);


    const turnOnNotification= () =>{
        alert("You turned on notifications. From now on, you will receive time-sensitive reminders of scheduled exercises")
        SetNotif(true);
    }
    
    const turnOffNotification = () => {
        alert("You have turned off notifications. You won't receive any reminders of scheduled exercises")
        SetNotif(false);
    }

    const viewHistory = () =>{
        //temporarily make it workout history
        navigation.navigate("WorkoutHistory", {timeIndex: historyTimeIndex, day: dayHistory, routine: routine})
    }

    const goToSleepTracker = () =>{
        navigation.navigate('SleepTracker');
    }

    const SkipAndNextButton = () =>{
        return(
            <View style={{display: 'flex', flexDirection: 'row', marginLeft: 30, alignSelf: 'center'}}>
                <TouchableOpacity onPress={() =>{
                    setInfoStep(0);
                    setViewInfo(false);
                }}
                 style={{backgroundColor: infoTheme.bgColor(0.5), 
                    borderRadius: 6, marginTop: 20}}>
                    <Text style={{marginBottom: 5, marginTop: 5, marginLeft: 5, marginRight: 5, fontWeight:600}}>Skip</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{
                    setInfoStep(infoStep - 1)
                }}
                style={{backgroundColor: infoTheme.bgColor(0.5), marginLeft: 15,
                    borderRadius: 6, marginTop: 20}}>
                    <Text style={{marginBottom: 5, marginTop: 5, marginLeft: 5, marginRight: 5, fontWeight: 500}}>Prev</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    setInfoStep(infoStep + 1)
                    if (infoStep == 6){
                        setInfoStep(0);
                        setViewInfo(false)
                    }
                }}
                style={{backgroundColor: infoTheme.bgColor(0.5), marginLeft: 15,
                    borderRadius: 6, marginTop: 20}}>
                    <Text style={{marginBottom: 5, marginTop: 5, marginLeft: 5, marginRight: 5, fontWeight: 500}}>Next</Text>
                </TouchableOpacity>

                <Text style={{marginBottom: 5, marginTop: 25, marginLeft: 15, marginRight: 5}}>{infoStep}/6</Text>
            </View>
        )
    }
  return (
    <View style={{ justifyContent: 'center', flex: 1, backgroundColor: viewInfo? infoTheme.bgColor(0.2) : "transparent"}}>
        <ScrollView>
            <View style={{display: 'flex', flexDirection: 'row', marginLeft: 30}}>
                <View>
                    <Text style={{color: themeColors.text, fontSize: 20, fontWeight: 400, marginTop: 20}}>Welcome Back,</Text>
                    <Text style={{color: 'black', fontSize: 25, fontWeight: 700}}>{name}</Text>
                </View>
                {!notif && (
                    <TouchableOpacity onPress={turnOnNotification}
                    style={{ marginTop: 40, position: "absolute", right: 70,
                    backgroundColor: 'white', padding: 2, 
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
                        <Icon.BellOff strokeWidth={3} stroke={themeColors.bgColor(1)}/>
                    </TouchableOpacity>
                )}

                {notif && (
                <TouchableOpacity onPress={turnOffNotification}
                    style={{ marginTop: 40, position: "absolute", right: 70, 
                    backgroundColor: 'white', padding: 2, 
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
                    <Icon.Bell strokeWidth={3} stroke={themeColors.bgColor(1)}/>
                </TouchableOpacity>
                )}
                {/**
                <TouchableOpacity onPress={viewHistory}
                    style={{ marginTop: 40, position: 'absolute', right: 30,
                    backgroundColor: 'white', padding: 2, 
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
                    <Icon.Menu strokeWidth={3} stroke={themeColors.bgColor(1)}/>
                </TouchableOpacity>
                */}

                <TouchableOpacity onPress={viewInstruction}
                    style={{ marginTop: 40, position: 'absolute', right: 30,
                    backgroundColor: 'white', padding: 2, 
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
                    <Icon.Info strokeWidth={3} stroke={themeColors.bgColor(1)}/>
                </TouchableOpacity>

            </View>
            {infoStep == 1 && 
                <View>
                    <Text style={{color: 'red', fontSize: 15, alignSelf: 'center', marginLeft: 15, marginRight: 15,
                    fontWeight: 500}}>The box below provides your BMI status.</Text>
                </View>
            }

            <View style={{backgroundColor: themeColors.bgColor(1), justifyContent: 'center', display: 'flex', marginTop: 20,
                alignItems: 'center', borderRadius: 15, marginLeft: 20, marginRight: 20, flexDirection: 'row',
                
                borderWidth: (infoStep == 1)? 2 : 0, borderColor: 'red'}}>
                
                <View>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 700, alignSelf: 'center'}}>BMI (Body Mass Index):  {BMI}</Text>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 300, alignSelf: 'center'}}>{bmiStatus}</Text>
                    <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20, alignSelf: 'center'}} >
                        <TouchableOpacity disabled={viewInfo}
                        onPress={() => navigation.navigate("SetWeight", {weight: weight, name: name, height: height})}
                        style={{backgroundColor: 'white', borderRadius: 5, marginTop: 10}} >
                            <Text style={{alignSelf:'center', color: themeColors.text, marginLeft: 10, marginRight: 10,
                            fontSize: 16, fontWeight: 700}} >Update Weight</Text>
                        </TouchableOpacity>
                        { /** 
                        <TouchableOpacity onPress={() => navigation.navigate("MealPlanner")}
                        style={{backgroundColor: 'white', borderRadius: 5, marginTop: 10, marginLeft: 20}} >
                            <Text style={{alignSelf: 'center', color: themeColors.text, marginLeft: 10, marginRight: 10,
                            fontSize: 16, fontWeight: 700}}>View Meals Plans</Text>
                        </TouchableOpacity>
                        */
                        }
                        
                    </View>
                </View>
            </View>
            {infoStep == 1 && 
                <View>
                     <Icon.ArrowDown strokeWidth={3} stroke={'red'} style={{alignSelf: 'center'}}/>
                    <Text style={{color: 'red', fontSize: 15, alignSelf: 'center', marginLeft: 15, marginRight: 15,
                    fontWeight: 500}}>
                    It is recommended that you keep your information up to date using `Update Weight` feature
                    to get the best suited workout plans provided by our service</Text>

                    <SkipAndNextButton/>
                </View>
                }
            { (infoStep == 2 || infoStep == 3) && 
                <View>
                    <Text style={{color: 'red', fontSize: 15, alignSelf: 'center', marginLeft: 15, marginRight: 15,
                    fontWeight: 500}}>
                    The below are shortcuts to 2 features </Text>
                </View>
            }
            <View style={{borderWidth: (infoStep == 3|| infoStep == 2)? 2 : 0, borderColor: 'red',
                display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity disabled={viewInfo} onPress={()=> {
                navigation.navigate("WorkoutTracker", {firstTime: firstTime, schedule: schedule})
                setFirstTime(false);}}
                style={{backgroundColor: themeColors.bgColor(1), justifyContent: 'center', display: 'flex', marginTop: 20,
                    alignItems: 'center', borderRadius: 30, width: 170, height: 55, borderWidth: infoStep == 2? 2: 0,
                    borderColor: 'red',
                    marginLeft: 20, marginRight: 5, flexDirection: 'row'}}>
                    <View style={{justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{color: 'white', fontSize: 18, marginTop: 3, marginLeft: 2,
                          marginRight: 5, fontWeight: 700}}>Workout Schedule</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity disabled={viewInfo}
                     onPress={() => navigation.navigate("PhotoComparer", gallery)}
                    style={{borderWidth: infoStep == 3? 2: 0, borderColor: 'red',
                    
                    backgroundColor: themeColors.bgColor(1), justifyContent: 'center', display: 'flex', marginTop: 20,
                    alignItems: 'center', borderRadius: 30, marginRight: 20, width: 170, height: 55,
                    flexDirection: 'row'}}>
                    <View style={{justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{color: 'white', fontSize: 18, marginTop: 3, fontWeight: 700}}>Photo Comparer</Text>
                    </View>
                </TouchableOpacity>
            </View>
            { viewInfo && (infoStep == 3 || infoStep == 2) && 
               <View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        {infoStep == 2 && <Icon.ArrowDown strokeWidth={3} stroke={'red'} style={{marginLeft: 100}}/>}
                        {infoStep == 3 &&
                            <Icon.ArrowDown strokeWidth={3} stroke={'red'} style={{marginLeft: 270}}/>
                        }
                    </View>
                    
                    {infoStep == 2 && <Text style={{color: 'red', fontSize: 15, alignSelf: 'center', marginLeft: 15, marginRight: 15,
                    fontWeight: 500}}>`WorkOut Schedule` - where you can plan your schedule and start your workout</Text>}
                    {infoStep == 3 && <Text style={{color: 'red', fontSize: 15, alignSelf: 'center', marginLeft: 15, marginRight: 15,
                    fontWeight: 500}}>`Photo Comparer` - where you can upload your photo to track your progress</Text>}
                    <SkipAndNextButton/>
                </View>
            }

            <View className= 'ActivityStatus' style={{marginTop: 20}}>
                <Text style={{color: 'black', fontSize: 25, fontWeight: 700, marginLeft: 30}}>Activity Status</Text>
                <View>
                    <Image source={heart_status} style={{width: '100%'}} />
                </View>
            </View>
            {(infoStep == 4 || infoStep == 5 || infoStep == 6) && 
                <View style={{marginBottom: 15}}>
                    <Text style={{color: 'red', fontSize: 15, fontWeight: 600, marginLeft: 20}}>
                        The following buttons are shortcuts for 3 features</Text>

                    {(infoStep == 5 || infoStep == 4) && 
                        <View>
                            <SkipAndNextButton />
                            {infoStep == 5 &&
                                <Text style={{marginLeft: 10, marginRight: 10, fontSize: 15, fontWeight: 600, marginTop: 10,
                                color: 'red'}}>`Calories` - Tracking real-time how much calories you've burnt via our plan</Text>}
                            {infoStep == 4 &&
                                <Text style={{marginLeft: 10, marginRight: 10, fontSize: 15, fontWeight: 600, marginTop: 10,
                            color: 'red'}}>`Steps Walked` - Tracking real-time how many steps you've walked</Text>}

                            <Icon.ArrowUp strokeWidth={3} stroke={'red'} style={{marginLeft: infoStep == 5? 300: 
                                120, marginTop: 10}}/>
                        </View>
                    }
                </View>
            }

            <View className="Activity-Card" style={{display: 'flex', flexDirection: 'row'}}>
                {/**Shall have a chart later */}
                <TouchableOpacity disabled={viewInfo}
                 onPress={() => navigation.navigate("StepsReport")}
                className="Steps-Walked" style={{backgroundColor: 'white', borderRadius: 40, marginLeft: 30,
                borderWidth: infoStep == 4? 2: 0, borderColor: 'red'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={walking_bar} marginLeft={15} marginTop={20} marginBottom={20} />
                        <View>
                            <Text style={{marginLeft: 15, color: 'black', fontSize: 18, fontWeight: 600, marginTop: 4}}>Steps walked</Text>
                            <Text style={{marginLeft: 15, color: themeColors.text, fontSize: 20, fontWeight: 700, marginTop: 5}}>3,322 steps</Text>
                            <Text style={{marginLeft: 15, color: theme('gray').text, fontSize: 15, fontWeight: 700, marginTop: 5, marginRight: 10}}>Real-time updates</Text>
                            <View style={{display:'flex', flexDirection: 'row'}}>
                                <Image source={real_time} marginTop={30}/>
                                <View marginTop={10} marginLeft={5}>
                                    <Text>6:00am-8:00am</Text>
                                    <Text style={{color: themeColors.text, fontWeight: 700}}>100 steps</Text>
                                    <Text marginTop={5}>8:00am-10:00am</Text>
                                    <Text style={{color: themeColors.text, fontWeight: 700}}>222 steps</Text>
                                    <Text marginTop={5}>10:00am-12:00pm</Text>
                                    <Text style={{color: themeColors.text, fontWeight: 700}}>1000 steps</Text>
                                    <Text marginTop={5}>12:00pm-13:00pm</Text>
                                    <Text style={{color: themeColors.text, fontWeight: 700}}>1000 steps</Text>
                                    <Text marginTop={5}>13:00pm-14:00pm</Text>
                                    <Text style={{color: themeColors.text, fontWeight: 700}}>1000 steps</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
               
                <View style ={{position: 'absolute', right: 30}}>
                    <TouchableOpacity disabled={viewInfo}
                    onPress={() => navigation.navigate("CaloriesReport", {firstTime: firstTime})}
                         style={{borderWidth: infoStep == 5? 2 : 0, borderColor: 'red',
                         backgroundColor: 'white', borderRadius: 20}} >
                        <Text style={{alignSelf: 'center', color: 'black', fontSize: 18, fontWeight: 600, marginTop: 4}}>
                            Calories
                        </Text>
                        {firstTime &&
                            <Text style={{alignSelf: 'center', color: themeColors.text, fontSize: 20, fontWeight: 700, marginTop: 5}}>
                            760 kCal
                        </Text>
                        }
                        {!firstTime && 
                        <Text style={{alignSelf: 'center', color: themeColors.text, fontSize: 20, fontWeight: 700, marginTop: 5}}>
                        1080 kCal
                        </Text>}
                        
                        <Image source={calories_pie} style={{alignSelf: 'center', marginTop: 5}}/>
                    </TouchableOpacity>

                    <TouchableOpacity //onPress={goToSleepTracker}
                    onPress={viewHistory}
                    disabled={viewInfo}
                    style={{borderColor: 'red', borderWidth: infoStep == 6? 2: 0,
                        backgroundColor: 'white', borderRadius: 20, marginTop: 20}} >
                        <Text style={{alignSelf: 'center', color: themeColors.text, fontSize: 18, fontWeight: 600, marginTop: 4}}>
                            Workout
                        </Text>
                        <Text style={{alignSelf: 'center', color: themeColors.text, fontSize: 18, fontWeight: 600, marginTop: 4}}>
                            History
                        </Text>
                        {/**
                        <Text style={{alignSelf: 'center', color: 'black', fontSize: 18, fontWeight: 600, marginTop: 4}}>
                            Sleep
                        </Text>
                        
                        <Text style={{alignSelf: 'center', color: themeColors.text, fontSize: 20, fontWeight: 700, marginTop: 7}}>
                            7h 20m
                        </Text>
                         */}
                        <Image source={sleep_graph} />
                    </TouchableOpacity>   
                </View>    
            </View>

            {infoStep == 6 && 
                <View>
                    <Icon.ArrowDown strokeWidth={3} stroke={'red'} style={{marginLeft: 290, marginTop: 10}}/>
                    <Text style={{marginLeft: 10, marginRight: 10, fontSize: 15, fontWeight: 600,
                        color: 'red'}}>`Workout History` - Tracking your workout history - exercises you did in the past</Text>
                    <SkipAndNextButton />
                </View>
            }

            
            {
            <View className='WorkOut-Progress' marginBottom={60}>
                <Text style={{color: 'black', fontSize: 25, fontWeight: 700, marginLeft: 30, marginTop: 20}}>Workout Progress</Text>
                <Image source={workout_graph} style={{alignSelf:'center'}} />
            </View>
        }
            
        </ScrollView>
    </View>
  )
}
