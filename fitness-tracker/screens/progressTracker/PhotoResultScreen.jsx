import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import BackButton from '../../components/BackButton'
import sample from "../../assets/components/photo_result.png"

export default function PhotoResultScreen() {
  return (
    <View>
      <ScrollView>
          <Header title={"Photo Result"} />
          <View style={{ borderRadius: '15', marginTop: 15, marginRight: 15,
           display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={sample}/>
              <Image source={sample}/>
          </View>
          <BackButton text={"Done"} />
      </ScrollView>
    </View>
  )
}