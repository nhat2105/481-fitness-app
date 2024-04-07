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
    const [selectedUnit, setSelectedUnit] = useState(metricSystem); // Initialize selectedUnit with metricSystem from registration
    const themeBlue = theme('blue');
    const navigation = useNavigation();

    // Function to handle weight update
    const onUpdateWeight = () => {
        navigation.navigate("Dashboard", {
            name: name,
            height: height,
            weight: updatedWeight, // Pass the updated weight
            metricSystem: selectedUnit // Pass the selected unit
        });
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={100}>
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <ScrollView>
                    <Header title={"Set Weight"} color={'blue'} />
                    <Image source={frame} style={{ width: '100%' }} />

                    {/** Weight Setter */}
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 600, color: 'black', textAlign: "center", marginTop: 20 }}>
                            Current Weight
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: 600, color: 'black', textAlign: "center", marginTop: 10 }}>
                            {currentWeight} {selectedUnit === 'metric' ? 'kgs' : 'lbs'}
                        </Text>
                    </View>

                    {/* Option to change units */}
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                        <TouchableOpacity
                            onPress={() => setSelectedUnit('metric')} // Update selectedUnit to 'metric' when Metric is pressed
                            style={{ backgroundColor: selectedUnit === 'metric' ? 'lightgrey' : 'white', padding: 10, borderRadius: 5, marginRight: 10 }}
                        >
                            <Text style={{ color: selectedUnit === 'metric' ? 'black' : 'grey' }}>Metric (kg)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setSelectedUnit('imperial')} // Update selectedUnit to 'imperial' when Imperial is pressed
                            style={{ backgroundColor: selectedUnit === 'imperial' ? 'lightgrey' : 'white', padding: 10, borderRadius: 5 }}
                        >
                            <Text style={{ color: selectedUnit === 'imperial' ? 'black' : 'grey' }}>Imperial (lbs)</Text>
                            
                        </TouchableOpacity>
                    </View>

                    {/** Text input field for updated weight */}
                    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <TextInput
                            type='text'
                            placeholder="Enter new weight"
                            placeholderTextColor={'lightgrey'}
                            onChangeText={(text) => setUpdatedWeight(text)} // Update updated weight state
                            style={{
                                height: 40, borderColor: themeBlue.bgColor(1),
                                marginVertical: 12, borderWidth: 3, padding: 10, borderRadius: 10
                            }}
                            // Remove additional styling for border and padding
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
                        <Text style={{ color: 'white', fontSize: 18, marginTop: 10, fontWeight: 700, height: 40, alignSelf: "center" }}>
                            Set
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
}
