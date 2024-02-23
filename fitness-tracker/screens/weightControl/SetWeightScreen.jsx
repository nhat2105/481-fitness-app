import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import frame from "../../assets/components/Frame.png"
import { theme } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/Header'

export default function SetWeightScreen() {
    const themeBlue = theme('blue');
    const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'white'}} >
        <ScrollView>
         <Header title={"Set Weight"} color={'blue'} />
          <Image source={frame} style={{width: '100%'}} />  
          {/**Weight Setter */}
          <View>
          <Text style ={{fontSize: 20, fontWeight: 600, color: 'black', textAlign: "center", marginTop: 20}}>
            Current Weight
          </Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} >
              <TextInput type='text' 
                  style={{height: 40, width: 80, borderColor: themeBlue.bgColor(1), alignSelf:'center',
                margin: 12, borderWidth: 3, padding: 10, borderRadius: 10}}/>
              <Text style={{fontSize: 18, fontWeight: 600, color: 'black', textAlign: "center", marginTop: 20}}>kgs</Text>
              </View>
          </View>
          <View>
          <Text style ={{fontSize: 20, fontWeight: 600, color: 'black', textAlign: "center"}}>
            Desired Weight
          </Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} >
              <TextInput type='text' 
                  style={{height: 40, width: 80, borderColor: themeBlue.bgColor(1), alignSelf:'center',
                margin: 12, borderWidth: 3, padding: 10, borderRadius: 10}}/>
              <Text style={{fontSize: 18, fontWeight: 600, color: 'black', textAlign: "center", marginTop: 20}} >kgs</Text>
            </View>
          </View>

          <TouchableOpacity onPress={()=>navigation.goBack()}
          style={{backgroundColor: themeBlue.bgColor(1), justifyContent: 'center', marginTop: 20,
            alignItems: 'center', borderRadius: 20, marginLeft: 20, marginRight: 20}}>
          <Text style={{color: 'white', fontSize: 18, marginTop: 10, fontWeight: 700, height: 40, alignSelf: "center"}}>Set</Text>
        </TouchableOpacity>
       </ScrollView>
    </View>
  )
}