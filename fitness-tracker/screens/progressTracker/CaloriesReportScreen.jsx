import { View, Text, Image} from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import graph from "../../assets/components/report-graph.png"
import BackButton from '../../components/BackButton'

export default function CaloriesReportScreen() {
  return (
    <View>
      <Header title={"Calories Report"} />
      <Text style={{color: 'black', fontSize: 20, fontWeight: 700, marginLeft: 30, marginTop: 20, marginBottom: 20}}>Yearly Report</Text>
      <Image source={graph} style={{alignSelf: 'center'}} />
      <BackButton text={"Done"} />
    </View>
  )
}