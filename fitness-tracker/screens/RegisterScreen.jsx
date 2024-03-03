import { View, Text, TouchableOpacity, TextInput} from 'react-native'
import React, { useState } from 'react'
import { theme } from '../theme'
import { useNavigation } from '@react-navigation/native'
import * as Icon from 'react-native-feather'


function Register_1_Screen() { 
    const themeColors = theme('purple');
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
            borderRadius: 9999, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
    </View>
  )
}

function Register_2_Screen() { 
    const themeColors = theme('purple');
    const navigation = useNavigation();
    const goToRegister3= () => {
        navigation.navigate('Register_3');
    }

  const GoalButton = ({text}) => {
    return (
        <TouchableOpacity onPress={goToRegister3}
            style={{backgroundColor: "white", borderRadius: 30, height: 50, marginTop: 40, width: 225}}>
            <Text style={{fontSize: 35, fontWeight: 700, color: themeColors.text, textAlign: "center"}}>{text}</Text>
        </TouchableOpacity>
    );
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: themeColors.bgColor(1)}}>
      <Text style ={{fontSize: 34, fontWeight: 600, color: 'white', textAlign: "center", marginLeft: 20, marginRight: 20}}>
        Choose the option that best describes your goal
      </Text>
      <GoalButton text={"Stay Active"} />
      <GoalButton text={"Lose Weight"} />
      <GoalButton text={"Gain Muscle"} />
      <TouchableOpacity onPress={()=>navigation.goBack()} 
            style={{ marginTop: 40, marginLeft: 4, backgroundColor: 'white', padding: 2,
            borderRadius: 9999, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
    </View>
  )
}

function Register_3_Screen(){
    const navigation = useNavigation();
    const themeColors = theme('purple');
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");


    const goToDashboard= () => {
        navigation.navigate('Dashboard');
    }

    const InputField = ({input, placeholder}) =>{
        return(
            <View>
                <Text style ={{fontSize: 34, fontWeight: 600, color: 'white', textAlign: "center", marginLeft: 20, marginRight: 20}}>{input}</Text>
                <TextInput type={input} placeholderTextColor={'lightgrey'} placeholder={placeholder}
                    style={{height: 40, width: 200, borderColor: 'white',
                    margin: 12, borderWidth: 3, padding: 10, borderRadius: 10}}/>
            </View>
                
        );
    }

    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: themeColors.bgColor(1)}}>
            <InputField input={"Name"} placeholder={"i.e. John Doe"}/>
            {/**option to choose between cm and inch*/}
            <InputField input={"Height (cm)"} placeholder={"i.e. 163"}/> 
             {/**option to choose between kg and pounds*/}
            <InputField input={"Weight (kg)"} placeholder={"i.e. 50"}/>

            <View className='buttons' style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()} 
                    style={{ marginTop: 40, marginLeft: 4, backgroundColor: 'white', padding: 2,
                    borderRadius: 9999, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />      
                        </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToDashboard} 
                    style={{ marginTop: 40, marginLeft: 200, backgroundColor: 'white', padding: 2,
                    borderRadius: 9999, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Icon.ArrowRight strokeWidth={3} stroke={themeColors.bgColor(1)} />

                        </View>
                </TouchableOpacity>
            </View> 
        </View>
    );

}



export {Register_1_Screen, Register_2_Screen, Register_3_Screen}