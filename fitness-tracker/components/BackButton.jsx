import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { theme } from '../theme'
import React from 'react'

export default function BackButton({text, color, action}) {
   
    let themeColors = theme('purple')
    if (color === "blue")themeColors = theme("blue");
    const navigation = useNavigation()
    
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.goBack()}
        style={{backgroundColor: themeColors.bgColor(1), justifyContent: 'center', marginTop: 40,
          alignItems: 'center', borderRadius: 20, marginLeft: 20, marginRight: 20, marginBottom: 50}}>
        <Text style={{color: 'white', fontSize: 18, marginTop: 10, fontWeight: 700, height: 40, alignSelf: "center"}}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}