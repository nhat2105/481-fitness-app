import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import frame from "../../assets/components/Frame.png";
import { theme } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

export default function SetWeightScreen({ route }) {
    const { name, height, weight, metricSystem } = route.params;

    const [currentWeight, setCurrentWeight] = useState(weight);
    const [updatedWeight, setUpdatedWeight] = useState('');
    const selectedUnit = metricSystem;
    const themeBlue = theme('blue');
    const navigation = useNavigation();

    // Function to handle weight update
    const onUpdateWeight = () => {
        navigation.navigate("Dashboard", {
            name: name,
            height: convertHeight(height),
            weight: updatedWeight,
            metricSystem: selectedUnit
        });
    };

    // Function to convert weight to the appropriate unit
    const convertWeight = (weightInKg) => {
      weightInKg = Number(weightInKg); // Convert weightInKg to a number
      if (selectedUnit === 'imperial') {
          // Convert kg to lbs
          return (weightInKg * 2.20462).toFixed(1);
      } else {
          // If metric, return weight in kg as is
          return weightInKg.toFixed(1);
      }
    };

    // Function to convert height to the appropriate unit
    const convertHeight = (heightInCm) => {
      heightInCm = Number(heightInCm); // Convert heightInCm to a number
      if (selectedUnit === 'imperial') {
          // Convert cm to feet and inches
          const feet = Math.floor(heightInCm / 30.48);
          const inches = ((heightInCm % 30.48) / 2.54).toFixed(1);
          return parseFloat(feet + '.' + inches); // Convert to a float
      } else {
          // If metric, return height in cm as is
          return heightInCm.toFixed(1);
      }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={100}>
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <ScrollView>
                    <Header title={"Update Weight"} color={'blue'} />
                    <Image source={frame} style={{ width: '100%' }} />

                    {/** Weight Setter */}
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', textAlign: "center", marginTop: 20 }}>
                            Current Weight
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: 'black', textAlign: "center", marginTop: 10 }}>
                            {convertWeight(currentWeight)} {selectedUnit === 'imperial' ? 'lbs' : 'kgs'}
                        </Text>
                    </View>

                    {/** Text input field for updated weight */}
                    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <TextInput
                            placeholder="Enter new weight"
                            placeholderTextColor={'lightgrey'}
                            onChangeText={(text) => setUpdatedWeight(text)}
                            style={{
                                height: 40,
                                borderColor: themeBlue.bgColor(1),
                                marginVertical: 12,
                                borderWidth: 3,
                                padding: 10,
                                borderRadius: 10
                            }}
                            underlineColorAndroid="transparent"
                            selectionColor={themeBlue.bgColor(1)}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={onUpdateWeight}
                        style={{
                            backgroundColor: themeBlue.bgColor(1),
                            justifyContent: 'center',
                            marginTop: 20,
                            alignItems: 'center',
                            borderRadius: 20,
                            marginHorizontal: 20
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 18, marginTop: 10, fontWeight: '700', height: 40, alignSelf: "center" }}>
                            Set
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
}
