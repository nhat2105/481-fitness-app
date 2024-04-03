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

function Register_3_Screen() {
    const navigation = useNavigation();
    const themeColors = theme('purple');
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [metricSystem, setMetricSystem] = useState('metric');

    const goToDashboard = () => {
        navigation.navigate('Dashboard', { name: name, height: height, weight: weight, metricSystem: metricSystem });
    }

    const handleInputChange = (input, text) => {
        if (input === "Name") {
            setName(text);
        } else if (input === "Height") {
            setHeight(text);
        } else if (input === "Weight") {
            setWeight(text);
        }
    }

    const InputField = ({ input, placeholder }) => {
        return (
            <View>
                <Text style={{ fontSize: 34, fontWeight: 600, color: 'white', textAlign: "center", marginLeft: 20, marginRight: 20 }}>{input}</Text>
                <TextInput type={input} placeholderTextColor={'lightgrey'} placeholder={placeholder}
                    onChangeText={(text) => handleInputChange(input, text)}
                    value={input === "Name" ? name : input === "Height" ? height : weight}
                    style={{ height: 40, width: 200, borderColor: 'white', margin: 12, borderWidth: 3, padding: 10, borderRadius: 10 }} />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: themeColors.bgColor(1) }}>
            <InputField input="Name" placeholder="i.e. John Doe" />
            <View>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>{metricSystem === 'metric' ? 'Height (cm)' : 'Height (in)'}</Text>
                <TextInput
                    placeholder={`i.e. 163 cm or 5.4 ft`}
                    placeholderTextColor={'lightgrey'}
                    onChangeText={(text) => handleInputChange("Height", text)}
                    value={height}
                    style={{ height: 40, width: 200, borderColor: 'white', marginVertical: 12, borderWidth: 3, padding: 10, borderRadius: 10 }}
                />
            </View>
            <View>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>{metricSystem === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}</Text>
                <TextInput
                    placeholder={`i.e. 50 kgs or 160 lbs`}
                    placeholderTextColor={'lightgrey'}
                    onChangeText={(text) => handleInputChange("Weight", text)}
                    value={weight}
                    style={{ height: 40, width: 200, borderColor: 'white', marginVertical: 12, borderWidth: 3, padding: 10, borderRadius: 10 }}
                />
            </View>
            <View className='buttons' style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity
                    onPress={() => setMetricSystem('metric')}
                    style={{ backgroundColor: metricSystem === 'metric' ? 'lightgrey' : 'white', padding: 10, borderRadius: 5, marginRight: 10 }}>
                    <Text style={{ color: metricSystem === 'metric' ? 'black' : 'grey' }}>Metric (cm, kg)</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setMetricSystem('imperial')}
                    style={{ backgroundColor: metricSystem === 'imperial' ? 'lightgrey' : 'white', padding: 10, borderRadius: 5 }}>
                    <Text style={{ color: metricSystem === 'imperial' ? 'black' : 'grey' }}>Imperial (ft.in, lbs)</Text>
                </TouchableOpacity>
            </View>
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