import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import frame from "../../assets/components/Frame.png"
import { theme } from '../../theme'
import { useNavigation } from '@react-navigation/native'

export default function SetWeightScreen() {
    const themeColors = theme("purple")
    const themeBlue = theme('blue');
    const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'white'}} >
        <View style={{display: 'flex', flexDirection: 'row'}} >
          <TouchableOpacity onPress={()=>navigation.goBack()} 
                style={{ marginTop: 50, marginRight: 30, backgroundColor: 'white', padding: 2, marginLeft: 30,
                borderRadius: 9999, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
                <Icon.ArrowLeft strokeWidth={3} stroke={themeBlue.text} marginBottom={10}/>
            </TouchableOpacity>
          <Text style={{color: themeBlue.text, fontSize: 25, marginLeft: 42, fontWeight: 600, marginTop: 45 }} >Weight Setter</Text>
        </View>
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
       
    </View>
  )
}