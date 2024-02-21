import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import walking_bar from "../../assets/components/walking-bar.png"
import real_time from "../../assets/components/Real-Time-Updates-Progress.png"
import { theme } from '../../theme'
import BackButton from '../../components/BackButton'

export default function StepsWalkedScreen() {
    const themeColors = theme('purple')
  return (
    <View>
        <Header title={"Steps Count"} />
        <Text style={{color: 'black', fontSize: 20, fontWeight: 700, marginLeft: 30, marginTop: 20, marginBottom: 20}}>Daily Report</Text>

        <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 40, alignSelf: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={walking_bar} marginLeft={15} marginTop={20} marginBottom={20} />
                        <View>
                            <Text style={{marginLeft: 15, color: 'black', fontSize: 18, fontWeight: 600, marginTop: 4}}>Steps walked</Text>
                            <Text style={{marginLeft: 15, color: themeColors.text, fontSize: 20, fontWeight: 700, marginTop: 5}}>3,322 steps</Text>
                            <Text style={{marginLeft: 15, color: theme('gray').text, fontSize: 18, fontWeight: 700, marginTop: 5, marginRight: 10}}>Real-time updates</Text>
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

        <BackButton text={"Done"} />
        
    </View>
  )
}