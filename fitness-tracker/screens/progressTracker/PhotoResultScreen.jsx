import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import BackButton from '../../components/BackButton'

export default function PhotoResultScreen({route}) {
  const { selectedMonth1, selectedMonth2, gallery } = route.params
  const in1 = gallery.find(({ month }) => month === selectedMonth1);
  const in2 = gallery.find(({ month }) => month === selectedMonth2);

  var uri1 = false;
  var uri2 = false;

  let src1, src2;

  let error = false;
  let errMsg;
  if (!in1){
    error = true
    errMsg = "No footage from first month chosen. Please try to reselect month 1 again"
  }

  if (!in2){
    error = true
    errMsg = "No footage from second month chosen. Please try to reselect month 2 again"
  }

  if (error === false){
    src1 = in1.image;
    if (in1.def === 'false')uri1 = true;
    src2 = in2.image;
    if (in2.def === 'false')uri2 = true;
  }

  return (
    <View>
      <ScrollView>
          <Header title={"Photo Result"} />
          {error === false &&
            <View style={{ borderRadius: '15', marginTop: 15, marginRight: 15, marginLeft: 2, marginRight: 2,
            display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                {uri1 === false && <Image source={src1} width={400} height={400}/>}
                {uri1 === true && <Image source={{uri: src1}} width={185} height={500}/>}
                {uri2 === false && <Image source={src2} width={400} height={400}/>}
                {uri2 === true && <Image source={{uri: src2}} width={185} height={500}/>}
            </View>
          }

          {error === true &&
            <Text style={{color: 'red', fontSize: 18, fontWeight: 500, marginLeft: 30, marginRight: 30, marginTop: 20}}>{errMsg}</Text>
          }
          <BackButton text={"Done"} />
      </ScrollView>
    </View>
  )
}