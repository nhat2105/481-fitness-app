import { View, Text, Image, TouchableOpacity, Sa } from 'react-native'
import React from 'react'
import pic from "../assets/components/Workout-Pic.png"
import { ChevronRight } from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import Swipeable from "react-native-gesture-handler/Swipeable"
import { theme } from '../theme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function ActivityCard({title, text, onDelete}) {
    const themeColors = theme("blue")
    const navigation = useNavigation();
    const removeCurrentCard = () => {
      onDelete();
    }

    const showDelete = () => {
      return(
        <TouchableOpacity onPress={removeCurrentCard}
          style={{backgroundColor: themeColors.bgColor(1) , marginTop: 20, borderRadius: 7}}>
          <Text style={{fontSize: 20, fontWeight: 700, alignSelf: 'center', marginTop: 7,
           marginBottom: 7, marginLeft: 10, marginRight: 10}}>
            Delete</Text>
        </TouchableOpacity>
      )
    }
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Swipeable renderLeftActions={showDelete}>
        <View style={{marginRight: 20, marginLeft: 20}} >
          <TouchableOpacity onPress={()=> navigation.navigate("ActivityInstruction", {text: title})}
            style={{flexDirection: 'row', justifyContent: 'space-between', borderRadius: 10,
            marginTop: 20, backgroundColor:'lightgrey'}}>
            <Image source={pic}/>
            <View marginTop={5} >
                <Text style={{fontSize: 16, fontWeight: 700, alignSelf: 'center' }}>{title}</Text>
                <Text alignSelf="center" fontWeight={600}>{text}</Text>
            </View>
            <ChevronRight stroke={"grey"} strokeWidth={3} marginTop={9}/>
          </TouchableOpacity>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  )
}