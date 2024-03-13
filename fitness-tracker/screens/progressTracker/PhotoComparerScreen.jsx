import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Header from '../../components/Header'
import reminder from "../../assets/components/photo_reminder.png"
import banner from "../../assets/components/photo_banner.png"
import { theme } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import ProgressPhoto from '../../components/ProgressPhoto'

export default function PhotoComparerScreen({route}) {

    const themeColors = theme('purple')
    const navigation = useNavigation()
    const gal = route.params;
    const [gallery, setGallery] = useState(gal);
    console.log(gallery)

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

        <ScrollView horizontal style={{display: 'flex', flexDirection: 'row', marginLeft: 30}}>
          {gallery.map((g, index) => 
            <ProgressPhoto month={g.month} source={g.image} key={index} def={g.def} />
          )}
        </ScrollView> 

        <TouchableOpacity onPress={() => navigation.navigate("AddPhoto", gallery)}
            style={{backgroundColor: themeColors.bgColor(1), borderRadius: 12, marginLeft: 35, marginRight: 35, marginTop: 30}}>
            <Text style={{fontSize: 20, fontWeight: 700, marginTop: 5, marginBottom: 5,
                color: 'white', alignSelf: 'center'}}>Add Photo</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}