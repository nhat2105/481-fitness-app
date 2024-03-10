import { View, Text, Image } from 'react-native'
import React from 'react'
import step_outline from "../assets/components/step_outline.png"
import { theme } from '../theme'

export default function StepCard({stepNum, description, title}){
    const themeColors = theme("purple");

    return(
        <View style={{display: 'flex', flexDirection: "row", marginLeft: 30, marginTop: 20, marginRight: 80}}>
        <Text style={{color: themeColors.text, fontWeight: 900, marginRight: 10, fontSize: 18}}>{stepNum}</Text>
        <Image source={step_outline} />
        <View marginLeft={10}>
            <Text style={{fontSize: 17, fontWeight: 700}}>{title}</Text>
            <Text style={{fontSize: 16, fontWeight: 500, color: 'grey', marginRight: 10}}>{description}</Text>
        </View>
        </View>
    )
}