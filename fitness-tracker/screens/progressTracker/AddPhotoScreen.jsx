import { View, Text, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { theme } from '../../theme'
import { Upload } from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from "expo-image-picker" 
import { Picker }  from '@react-native-picker/picker'

export default function AddPhotoScreen({route}) {
  const themeColors = theme('purple')
  const navigation = useNavigation();
  const [image, setImage] = useState();
  let gallery = route.params

  const [selectedMonth, setSelectedMonth] = useState(null);

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const onMonthChange = (month) => {
    setSelectedMonth(month);
  };


  const uploadImage = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1
      });

      if (!result.canceled){
        //save image
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      
    }
  }

  const updateGallery = () =>{
    const index = gallery.findIndex(({ month }) => month === selectedMonth)
    if (index >= 0) {
      gallery[index].image = image;
      gallery[index].def = 'false';
    } 
    else {
      gallery.push({image: image, month: selectedMonth, def: 'false'})
    }
  }

  return (
    <View>
      <Header title={"Add Photo"} />
      <View style={{marginTop: 20, backgroundColor: 'white', marginBottom: 20,
        marginLeft: 20, marginRight: 20, borderRadius: 15}}>
        <Text style={{fontSize: 18, fontWeight: 600, marginLeft: 10, marginTop: 5, color: themeColors.text,
           marginBottom: 5, fontStyle: 'italic'}}>
          For better results of comparison, we recommend checking out the instructions if you haven't already </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("PhotoInstruction")}
         style={{marginLeft: 50, marginRight: 50, backgroundColor: themeColors.bgColor(1), marginTop: 10,
         borderRadius: 15, marginBottom: 50 }}>
        <Text style={{fontSize: 20, fontWeight: 700, color: 'white', marginTop: 5, 
          marginBottom: 5, marginLeft: 5, marginRight: 5, alignSelf: "center"}}>View Instruction</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => uploadImage()}
      style={{backgroundColor: 'white', borderRadius: 20, marginLeft: 20, marginBottom: 20,
         marginRight: 20, marginTop: 10}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontSize: 20, fontWeight: 500, color: 'black', marginTop: 5, marginLeft: 10, marginBottom: 10}}>Upload Photo</Text>
          <Upload stroke={themeColors.bgColor(1)} strokeWidth={3} style={{position: 'absolute', right: 15, top: 5}}/>
        </View>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, alignSelf: 'center', marginBottom: 10}} />}
      <View style={{backgroundColor:'white', borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop: 10}}>
        <Picker onValueChange={onMonthChange} selectedValue={selectedMonth}>
        {selectedMonth === null && <Picker.Item label="Month" value={null} />}
            {months.map((month, index) => (
              <Picker.Item key={index} 
              label={month} 
              style={{ fontSize: 18, fontWeight: '800', color: 'black', marginLeft: 10, marginBottom: 10 }}
              value={month} />
            ))}
        </Picker>
      </View>
      <TouchableOpacity onPress= {()=> 
       { updateGallery();
         navigation.navigate("PhotoComparer", {gallery: gallery});
        }}
        style={{backgroundColor: themeColors.bgColor(1), justifyContent: 'center', marginTop: 40,
          alignItems: 'center', borderRadius: 20, marginLeft: 20, marginRight: 20, marginBottom: 50}}>
        <Text style={{color: 'white', fontSize: 18, marginTop: 10, fontWeight: 700, height: 40, alignSelf: "center"}}>Done</Text>
      </TouchableOpacity>
      {/* Try to add month and photo into photo gallery */}
    </View>
  )
}