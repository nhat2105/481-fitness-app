import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import BackButton from '../../components/BackButton'
import { theme } from '../../theme'
import { ChevronDown, Upload } from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'

export default function AddPhotoScreen() {
  const themeColors = theme('purple')
  const navigation = useNavigation();

  return (
    <View>
      <Header title={"Add Photo"} />
      <View style={{marginTop: 20, backgroundColor: 'white', marginBottom: 20,
        marginLeft: 20, marginRight: 20, borderRadius: 15}}>
        <Text style={{fontSize: 18, fontWeight: 600, marginLeft: 10, marginTop: 5, color: themeColors.text,
           marginBottom: 5, fontStyle: 'italic'}}>
          For better results of comparison, we recommend checking out the instructions if you haven't already </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("PhotoInstruction")}
         style={{marginLeft: 50, marginRight: 50, backgroundColor: themeColors.bgColor(1), marginTop: 10,
         borderRadius: 15, marginBottom: 50 }}>
        <Text style={{fontSize: 20, fontWeight: 700, color: 'white', marginTop: 5, 
          marginBottom: 5, marginLeft: 5, marginRight: 5, alignSelf: "center"}}>View Instruction</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 20, marginLeft: 20, marginBottom: 20,
         marginRight: 20, marginTop: 10}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontSize: 20, fontWeight: 800, color: 'black', marginTop: 5, marginLeft: 10, marginBottom: 10}}>Upload Photo</Text>
          <Upload stroke={themeColors.bgColor(1)} strokeWidth={3} style={{position: 'absolute', right: 30, top: 5}}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'white', borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop: 10}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontSize: 20, fontWeight: 800, color: 'black', marginTop: 5, marginLeft: 10, marginBottom: 10}}>Month</Text>
          <ChevronDown stroke={themeColors.bgColor(1)} strokeWidth={3} style={{position: 'absolute', right: 30, top: 5}}/>
        </View>
      </TouchableOpacity>
      <BackButton text={"Done"} />
    </View>
  )
}