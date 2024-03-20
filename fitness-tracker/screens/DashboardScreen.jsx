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

export default function DashboardScreen({route}) {
    let [firstTime, setFirstTime] = useState(route.params === false ? false: true)
    let { sched }  = route.params; 
    //console.log("First time: ", firstTime);
    let [schedule, setSchedule] = useState(sched);
    let [history, setHistory] = useState(route.params.history)

    useEffect(() => {
        // Update local state when the 'schedule' prop changes
        if (route.params && route.params.sched) {
            setSchedule(route.params.sched);
        }
    }, [route.params]);


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

    let {name, weight, height} = route.params;
    var BMI = Number(Number(weight)/(Number(height) * Number(height)) * 10000).toFixed(1);;
    let bmiStatus = ("You have a normal weight status");
    if (BMI >= 25) bmiStatus = ("You have an overweight status");
    else if (BMI < 18.5) bmiStatus = ("You have an underweight status");

    const themeColors = theme('purple');
    const navigation = useNavigation();
    const [notif, SetNotif] = useState(false);


    const turnOnNotification= () =>{
        SetNotif(true);
    }
    
    const turnOffNotification = () => {
        SetNotif(false);
    }

    const viewMenu = () =>{
        //temporarily make it workout history
        navigation.navigate("WorkoutHistory", {history: history})
    }

    const goToSleepTracker = () =>{
        navigation.navigate('SleepTracker');
    }
  return (
    <View style={{ justifyContent: 'center', flex: 1}}>
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
                <TouchableOpacity onPress={viewMenu}
                    style={{ marginTop: 40, position: 'absolute', right: 30,
                    backgroundColor: 'white', padding: 2, 
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
                    <Icon.Menu strokeWidth={3} stroke={themeColors.bgColor(1)}/>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor: themeColors.bgColor(1), justifyContent: 'center', display: 'flex', marginTop: 20,
                alignItems: 'center', borderRadius: 15, marginLeft: 20, marginRight: 20, flexDirection: 'row'}}>
                <View>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 700, alignSelf: 'center'}}>BMI (Body Mass Index):  {BMI}</Text>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 300, alignSelf: 'center'}}>{bmiStatus}</Text>
                    <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}} >
                        <TouchableOpacity onPress={() => navigation.navigate("SetWeight", {weight: weight, name: name, height: height})}
                        style={{backgroundColor: 'white', borderRadius: 5, marginTop: 10}} >
                            <Text style={{alignSelf:'center', color: themeColors.text, marginLeft: 10, marginRight: 10,
                            fontSize: 16, fontWeight: 700}} >Update Weight</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("MealPlanner")}
                        style={{backgroundColor: 'white', borderRadius: 5, marginTop: 10, marginLeft: 20}} >
                            <Text style={{alignSelf: 'center', color: themeColors.text, marginLeft: 10, marginRight: 10,
                            fontSize: 16, fontWeight: 700}}>View Meals Plans</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={()=> {
                   // console.log("CHECKING WHAT I'M PASSING FROM DASHBOARD: ", schedule)
                navigation.navigate("WorkoutTracker", {firstTime: firstTime, schedule: schedule})
                setFirstTime(false);}}
                style={{backgroundColor: themeColors.bgColor(1), justifyContent: 'center', display: 'flex', marginTop: 20,
                    alignItems: 'center', borderRadius: 30, width: 170, height: 55,
                    marginLeft: 20, marginRight: 5, flexDirection: 'row'}}>
                    <View style={{justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{color: 'white', fontSize: 18, marginTop: 3, marginLeft: 2,
                          marginRight: 5, fontWeight: 700}}>Workout Schedule</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PhotoComparer", gallery)}
                    style={{backgroundColor: themeColors.bgColor(1), justifyContent: 'center', display: 'flex', marginTop: 20,
                    alignItems: 'center', borderRadius: 30, marginRight: 20, width: 170, height: 55,
                    flexDirection: 'row'}}>
                    <View style={{justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{color: 'white', fontSize: 18, marginTop: 3, fontWeight: 700}}>Photo Comparer</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View className= 'ActivityStatus' style={{marginTop: 20}}>
                <Text style={{color: 'black', fontSize: 25, fontWeight: 700, marginLeft: 30}}>Activity Status</Text>
                <View>
                    <Image source={heart_status} style={{width: '100%'}} />
                </View>
            </View>


            <View className="Activity-Card" style={{display: 'flex', flexDirection: 'row'}}>
                {/**Shall have a chart later */}
                <TouchableOpacity onPress={() => navigation.navigate("StepsReport")}
                className="Steps-Walked" style={{backgroundColor: 'white', borderRadius: 40, marginLeft: 30}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={walking_bar} marginLeft={15} marginTop={20} marginBottom={20} />
                        <View>
                            <Text style={{marginLeft: 15, color: 'black', fontSize: 18, fontWeight: 600, marginTop: 4}}>Steps walked</Text>
                            <Text style={{marginLeft: 15, color: themeColors.text, fontSize: 20, fontWeight: 700, marginTop: 5}}>3,322 steps</Text>
                            <Text style={{marginLeft: 15, color: theme('gray').text, fontSize: 15, fontWeight: 700, marginTop: 5, marginRight: 10}}>Real-time updates</Text>
                            <View style={{display:'flex', flexDirection: 'row'}}>
                                <Image source={real_time} marginTop={30}/>
                                <View marginTop={10} marginLeft={15}>
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
                    <TouchableOpacity onPress={() => navigation.navigate("CaloriesReport")}
                        className="Calories-Burnt" style={{backgroundColor: 'white', borderRadius: 20}} >
                        <Text style={{alignSelf: 'center', color: 'black', fontSize: 18, fontWeight: 600, marginTop: 4}}>
                            Calories
                        </Text>
                        <Text style={{alignSelf: 'center', color: themeColors.text, fontSize: 20, fontWeight: 700, marginTop: 5}}>
                            760 kCal
                        </Text>
                        <Image source={calories_pie} style={{alignSelf: 'center', marginTop: 5}}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="Slept-Hours"  onPress={goToSleepTracker}
                    style={{backgroundColor: 'white', borderRadius: 20, marginTop: 20}} >
                        <Text style={{alignSelf: 'center', color: 'black', fontSize: 18, fontWeight: 600, marginTop: 4}}>
                            Sleep
                        </Text>
                        <Text style={{alignSelf: 'center', color: themeColors.text, fontSize: 20, fontWeight: 700, marginTop: 7}}>
                            7h 20m
                        </Text>
                        <Image source={sleep_graph} />
                    </TouchableOpacity>
                </View>     
            </View>
            <View className='WorkOut-Progress' marginBottom={60}>
                <Text style={{color: 'black', fontSize: 25, fontWeight: 700, marginLeft: 30, marginTop: 20}}>Workout Progress</Text>
                <Image source={workout_graph} style={{alignSelf:'center'}} />
            </View>
            
        </ScrollView>
        {
        <View style={{position: 'absolute', bottom: 0, flexDirection: 'row', 
            backgroundColor: "white", width: "100%", height: 40, justifyContent: 'space-between'}}>
            <Icon.Home strokeWidth={3} width={35} height={35} style={{marginLeft: 20, color: themeColors.bgColor(1)}}/>
            <Icon.User strokeWidth={3} width={35} height={35} style={{color: themeColors.bgColor(1)}}/>
            <Icon.Settings strokeWidth={3} width={35} height={35} style={{color: themeColors.bgColor(1), marginRight: 20}}/>
        </View> 
        }
       
    </View>
  )
}
