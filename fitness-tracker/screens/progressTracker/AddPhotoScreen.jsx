import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import BackButton from '../../components/BackButton'

export default function AddPhotoScreen() {
  return (
    <View>
      <Header title={"Add Photo"} />
      <BackButton text={"Done"} />
    </View>
  )
}