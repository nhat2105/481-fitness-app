import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import BackButton from '../../components/BackButton'
import { theme } from '../../theme'
import { ChevronDown, Upload } from 'react-native-feather'

export default function AddPhotoScreen() {
  const themeColors = theme('purple')

  return (
    <View>
      <Header title={"Add Photo"} />
      <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop: 10}}>
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