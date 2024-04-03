import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function navigateHome ({params}) {
  const navigation = useNavigation()
  console.log("Receiving: ", params)

  //navigation.navigate("Dashboard", {params})
}