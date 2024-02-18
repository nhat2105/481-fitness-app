import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import * as Icon from 'react-native-feather'
import { SelectCountry} from 'react-native-element-dropdown'

function Register_1_Screen() { 
    const navigation = useNavigation();
    const goToRegister2= () => {
        navigation.navigate('Register_2');
    }

  const LevelButton = ({text}) => {
    return (
        <TouchableOpacity onPress={goToRegister2}
            style={{backgroundColor: "white", borderRadius: 30, height: 50, marginTop: 40, width: 225}}>
            <Text style={{fontSize: 35, fontWeight: 700, color: themeColors.text, textAlign: "center"}}>{text}</Text>
        </TouchableOpacity>
    );
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: themeColors.bgColor(1)}}>
      <Text style ={{fontSize: 34, fontWeight: 600, color: 'white', textAlign: "center", marginLeft: 20, marginRight: 20}}>
        Choose the option that best describes your fitness level
      </Text>
      <LevelButton text={"Beginner"} />
      <LevelButton text={"Intermediate"} />
      <LevelButton text={"Advanced"} />
      <TouchableOpacity onPress={()=>navigation.goBack()} 
            style={{ marginTop: 40, marginLeft: 4, backgroundColor: 'white', padding: 2,
            borderRadius: '9999px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
    </View>
  )
}

function Register_2_Screen(){
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    const gender_data = [
        {
          value: '1',
          lable: 'Male',
          image: {
            uri: 'https://www.logolynx.com/images/logolynx/a3/a350a963961280a527fb03df3d57fa36.png',
          },
          value: '2',
          lable: 'Female',
          image: {
            uri: 'https://static.vecteezy.com/system/resources/previews/000/630/430/original/vector-female-sign-icon-illustration.jpg',
          },
        }
    ]

    const SelectGenderScreen = _props => {
        const [gender, setGender] = useState('1');
    
        return (
          <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            imageStyle={styles.imageStyle}
            iconStyle={styles.iconStyle}
            maxHeight={200}
            value={gender}
            data={gender_data}
            valueField="value"
            labelField="lable"
            imageField="image"
            placeholder="Select Your Biological Gender"
            searchPlaceholder="Search..."
            onChange={e => {
              setGender(e.value);
            }}
          />
        );
      };



    const goToDashboard= () => {
        navigation.navigate('Dashboard');
    }

    const InputField = ({input}) =>{
        return(
            <View>
                <Text style ={{fontSize: 34, fontWeight: 600, color: 'white', textAlign: "center", marginLeft: 20, marginRight: 20}}>{input}</Text>
                <TextInput type={input} 
                    style={{height: 40, width: 200, borderColor: 'white',
                    margin: 12, borderWidth: 3, padding: 10, borderRadius: 10}}/>
            </View>
                
        );
    }

    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: themeColors.bgColor(1)}}>
            <InputField input={"Name"}/>
            {/**option to choose between cm and inch*/}
            <InputField input={"Height"}/> 
             {/**option to choose between kg and pounds*/}
            <InputField input={"Weight"}/>


            
            <View className='buttons' style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()} 
                    style={{ marginTop: 40, marginLeft: 4, backgroundColor: 'white', padding: 2,
                    borderRadius: '9999px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
            
                        </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToDashboard} 
                    style={{ marginTop: 40, marginLeft: 200, backgroundColor: 'white', padding: 2,
                    borderRadius: '9999px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Icon.ArrowRight strokeWidth={3} stroke={themeColors.bgColor(1)} />
            
                        </View>
                </TouchableOpacity>
            </View> 
        </View>
    );

}

export {Register_1_Screen, Register_2_Screen}

const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      width: 150,
      backgroundColor: '#EEEEEE',
      borderRadius: 22,
      paddingHorizontal: 8,
    },
    imageStyle: {
      width: 24,
      height: 24,
      borderRadius: 12,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      marginLeft: 8,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
  });
