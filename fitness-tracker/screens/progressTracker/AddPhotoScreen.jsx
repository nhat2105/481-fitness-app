import { View, Text, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import BackButton from '../../components/BackButton'
import { theme } from '../../theme'
import { ChevronDown, Upload } from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from "expo-image-picker" 
import { Picker }  from '@react-native-picker/picker'

export default function AddPhotoScreen() {
  const themeColors = theme('purple')
  const navigation = useNavigation();
  const [image, setImage] = useState();

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
        aspect: [1,1],
        quality: 1
      });

      if (!result.canceled){
        //save image
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      
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
      <BackButton text={"Done"} />
      {/* Try to add month and photo into photo gallery */}
    </View>
  )
}