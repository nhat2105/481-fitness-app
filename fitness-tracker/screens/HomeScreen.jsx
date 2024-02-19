import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { theme } from '../theme';

export default function HomeScreen() {
  const themeColors = theme('purple');
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate("Register_1");
  }


  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black', fontSize: 45, fontWeight: 700}}>FitTech 
        <Text style={{color: themeColors.text, fontSize: 45, fontWeight: 700}}>Solution</Text>
        </Text>
      <TouchableOpacity 
        style={{backgroundColor: themeColors.bgColor(1), borderRadius: 30,
          marginTop: 50, height: 45, width: 250}} 
          onPress={goToRegister}>
        <Text style={{color: "white", fontSize: 30, textAlign: "center" }}>Get Started</Text>
      </TouchableOpacity>

    </View> 
  )
}