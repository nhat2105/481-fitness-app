import { View, Text,Image } from 'react-native'
import React from 'react'
import { theme } from '../theme'

export default function ProgressPhoto({month, source, def}) {
    let useURI = true;
    const themeColors = theme("purple")
    switch (def){
      case "true":
        useURI = false;
        break;

      default: 
        useURI = true;
        break;
    }
  return (
    <View style={{display: 'flex'}} >
      {!useURI && <Image source={source} width={100} height={100} style={{marginRight: 30}} />}
      {useURI && <Image source={{uri: source}} width={100} height={100} style={{marginRight: 30}} />}
      <Text style={{color: themeColors.text, fontSize: 15, 
        fontWeight: 600, alignSelf: 'center', marginTop: 10, marginRight: 30}}>{month}</Text>
    </View>
  )
}