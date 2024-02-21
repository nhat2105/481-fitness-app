import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import reminder from "../../assets/components/photo_reminder.png"
import banner from "../../assets/components/photo_banner.png"
import { theme } from '../../theme'
import sample1 from "../../assets/components/photo_sample1.png"
import sample3 from "../../assets/components/photo_sample3.png"
import sample2 from "../../assets/components/photo_sample2.png"
import { useNavigation } from '@react-navigation/native'

export default function PhotoComparerScreen() {
    const themeColors = theme('purple')
    const navigation = useNavigation()

  return (
    <View>
      <ScrollView>
        <Header title={"Photo Comparer"} />
        <Image source={reminder} style={{alignSelf:'center', marginTop: 20}} />
        <View style={{backgroundColor: 'white', borderRadius: 10, marginLeft: 35, marginRight: 35, marginTop: 30 }}>
            <View style={{display: 'flex', flexDirection: 'row'}} >
                <View style ={{marginTop: 20, marginLeft: 10, marginRight: 3}}>
                    <Text style={{fontSize: 17, fontWeight: 700, color: themeColors.text}} >Track Your Progress</Text>
                    <Text style= {{fontSize: 17, fontWeight: 700, color: themeColors.text}} >Each Month with </Text>
                    <Text style= {{fontSize: 17, fontWeight: 800}}> Photo</Text>
                </View>
                <Image source={banner} style={{alignSelf:'center', marginTop: 20, marginBottom: 30, marginLeft: 10}} />
            </View>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate("ComparePhotos")}
        style={{backgroundColor: themeColors.bgColor(1), borderRadius: 12, marginLeft: 35, marginRight: 35, marginTop: 30}}>
            <Text style={{fontSize: 20, fontWeight: 700, marginTop: 5, marginBottom: 5,
                color: 'white', alignSelf: 'center'}}>Compare Photos</Text>
        </TouchableOpacity>

        {/**Gallery display */}
        <Text style={{fontSize: 20, fontWeight: 800, marginLeft: 30, marginTop: 20, marginBottom: 30}}>Gallery</Text>
        <View style={{display: 'flex', flexDirection: 'row', 
        marginLeft: 30, marginRight: 30, justifyContent:'space-between' }}>
            <Image source={sample1} />
            <Image source={sample2} />
            <Image source={sample3} />
        </View> 
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 10,
        marginLeft: 65, marginRight: 65, justifyContent:'space-between' }}>
          <Text style ={{color: theme.text, fontSize: 15, fontWeight: 600}}>May</Text>
          <Text style ={{color: theme.text, fontSize: 15, fontWeight: 600}}>June</Text>
          <Text style ={{color: theme.text, fontSize: 15, fontWeight: 600}}>July</Text>
        </View> 
        <TouchableOpacity onPress={() => navigation.navigate("AddPhoto")}
            style={{backgroundColor: themeColors.bgColor(1), borderRadius: 12, marginLeft: 35, marginRight: 35, marginTop: 30}}>
            <Text style={{fontSize: 20, fontWeight: 700, marginTop: 5, marginBottom: 5,
                color: 'white', alignSelf: 'center'}}>Add Photo</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}