import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { theme } from '../theme'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'

export default function Header({title, color, action}) {
    const navigation = useNavigation()
    let themeColors = theme('purple')
    const themeBlue = theme('blue')
    if (color === 'blue')themeColors = themeBlue

  return (
    <View style={{display: 'flex', flexDirection: 'row'}} >
      <TouchableOpacity onPress={action? action: ()=>navigation.goBack()} 
            style={{ marginTop: 50, marginRight: 30, backgroundColor: 'white', padding: 2, marginLeft: 30,
            borderRadius: 9999, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.text}/>
        </TouchableOpacity>
      <Text style={{color: themeColors.text, fontSize: 25, fontWeight: 600, marginLeft: 30, marginTop: 45}} >{title}</Text>
  </View>
  )
}