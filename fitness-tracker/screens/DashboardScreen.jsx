import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView} from 'react-native'
import React, { useState } from 'react'
import * as Icon from 'react-native-feather'
import { theme } from '../theme';
import heart_status from "../assets/components/Heart-Rate-Status.png"
import calories_pie from "../assets/components/Calories-Pie.png"
import walking_bar from "../assets/components/walking-bar.png"
import sleep_graph from "../assets/components/Sleep-Graph.png"
import workout_graph from "../assets/components/workout_graph.png"
import real_time from "../assets/components/Real-Time-Updates-Progress.png"

export default function DashboardScreen() {
    const themeColors = theme('purple');
    const themeBlue = theme('blue');
    const [notif, SetNotif] = useState(false);

    const turnOnNotification= () =>{
        SetNotif(true);
    }
    
    const turnOffNotification = () => {
        SetNotif(false);
    }

    const viewMenu = () =>{

    }

  return (
    <View style={{ justifyContent: 'center', flex: 1}}>
        <ScrollView>
            <View style={{display: 'flex', flexDirection: 'row', marginLeft: 30}}>
                <View>
                    <Text style={{color: themeColors.text, fontSize: 20, fontWeight: 400, marginTop: 20}}>Welcome Back,</Text>
                    <Text style={{color: 'black', fontSize: 25, fontWeight: 700}}>Taylor Swift</Text>
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
                alignItems: 'center', borderRadius: 30, marginLeft: 20, marginRight: 20, flexDirection: 'row'}}>
                <View>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 700}}>BMI (Body Mass Index): 20</Text>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 300}}>You have a normal weight</Text>
                </View>
            </View>

            <TouchableOpacity style={{backgroundColor: themeColors.bgColor(1), justifyContent: 'center', display: 'flex', marginTop: 20,
                alignItems: 'center', borderRadius: 30, marginLeft: 20, marginRight: 20, flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{color: 'white', fontSize: 18, marginTop: 10, fontWeight: 700, height: 40}}>Check Your Workout Schedule</Text>
                </View>
            </TouchableOpacity>

            <View className= 'ActivityStatus' style={{marginTop: 20}}>
                <Text style={{color: 'black', fontSize: 25, fontWeight: 700, marginLeft: 30}}>Activity Status</Text>
                <View>
                    <Image source={heart_status} style={{width: '100%'}} />
                </View>
            </View>


            <View className="Activity-Card" style={{display: 'flex', flexDirection: 'row'}}>
                {/**Shall have a chart later */}
                <TouchableOpacity className="Steps-Walked" style={{backgroundColor: 'white', borderRadius: 40, marginLeft: 30}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={walking_bar} marginLeft={15} marginTop={20} marginBottom={20} />
                        <View>
                            <Text style={{marginLeft: 5, color: 'black', fontSize: 18, fontWeight: 600, marginTop: 4}}>Steps walked</Text>
                            <Text style={{marginLeft: 5,color: themeColors.text, fontSize: 20, fontWeight: 700, marginTop: 5}}>3,322 steps</Text>
                            <Text style={{marginLeft: 5, color: theme('gray').text, fontSize: 18, fontWeight: 700, marginTop: 5, marginRight: 15}}>Real-time updates</Text>
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
                    <TouchableOpacity className="Calories-Burnt" style={{backgroundColor: 'white', borderRadius: 20}} >
                        <Text style={{marginLeft: 10, color: 'black', fontSize: 18, fontWeight: 600, marginTop: 4, right: 5}}>
                            Calories
                        </Text>
                        <Text style={{marginLeft: 5, marginRight: 10, color: themeColors.text, fontSize: 20, fontWeight: 700, marginTop: 5}}>
                            760 kCal
                        </Text>
                        <Image source={calories_pie} />
                    </TouchableOpacity>
                    <TouchableOpacity className="Slept-Hours" style={{backgroundColor: 'white', borderRadius: 20, marginTop: 20}} >
                        <Text style={{marginLeft: 10, color: 'black', fontSize: 18, fontWeight: 600, marginTop: 4, right: 5}}>
                            Sleep
                        </Text>
                        <Text style={{marginLeft: 5, marginRight: 10, color: themeColors.text, fontSize: 20, fontWeight: 700, marginTop: 5}}>
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
