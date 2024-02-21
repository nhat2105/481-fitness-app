import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import BackButton from '../../components/BackButton'
import result from "../../assets/components/result_sample.png"

export default function PhotoResultScreen() {
  return (
    <View>
        <Header title={"Photo Result"} />
        <View style={{backgroundColor: 'white', borderRadius: '15'}}>
            <Image source={result} />
        </View>
        <BackButton text={"Done"} />
    </View>
  )
}