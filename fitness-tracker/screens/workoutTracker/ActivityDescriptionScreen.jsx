import { View, Text, Image, TouchableOpacity, ScrollView,  Modal, FlatList } from 'react-native'
import React, {useState} from 'react'
import Header from '../../components/Header'
import banner from "../../assets/components/workout_banner.png"
import { theme } from '../../theme'
import { Calendar, ChevronDown, ChevronRight, Menu } from 'react-native-feather'
import rope from "../../assets/components/skipping-rope.png"
import bottle from "../../assets/components/water-bottle.png"
import barbell from "../../assets/components/barbell.png"
import ActivityCard from '../../components/ActivityCard'
import { useNavigation } from '@react-navigation/native'


export default function ActivityDescription({route}) {
    const themeColors = theme("blue")
    const {text, lookOnly} = route.params;
    const navigation = useNavigation();

    const [currentAct, setCurrentAct] = useState(0);
    const [currentSet, setCurrentSet] = useState(0);
    const [selectedDifficulty, setSelectedDifficulty] = useState("Beginner");
    const [calories, setCalories] = useState("320");
    const [time, setTime] = useState(32)
    const difficulties = ["Beginner", "Intermediate", "Advanced"];
    const [difficultyModalVisible, setDifficultyModalVisible] = useState(false);
    const [mult, setMult] = useState(1)

    //hard code it this way, easier to use switch key of `text` then choose the corresponding set
    const [exercises, setExercises] = useState(() => {
        let ex = [];
        switch (selectedDifficulty){
            case "Intermediate":
                setMult(2)
                break;
            case "Advanced":
                setMult(4)
                break;
            default:
                setMult(1)
                break;
        }
        switch(text){
            case "Lowerbody Train":
                ex = [
                    [
                        { id: 0, title: 'Squats', text: `${12 * mult}x` },
                        { id: 1, title: 'Lunges', text: `${15 * mult}x` },
                        { id: 2, title: 'Deadlifts', text: `${20 * mult}x` },
                        { id: 3, title: 'Rest & Drinks', text: '0:10' },
                    ],
                    [
                        { id: 0, title: 'Step Ups', text: `${12 * mult}x` },
                        { id: 1, title: 'Glute Bridges', text: `${15 * mult}x` },
                        { id: 2, title: 'Plie Squats', text: `${20 * mult}x`  },
                    ]
                ];
                break;
            case "Upperbody Train":
                ex = [
                    [
                        { id: 0, title: 'Push-Ups',text: `${15 * mult}x`  },
                        { id: 1, title: 'Pull-Ups', text: `${15 * mult}x`  },
                        { id: 2, title: 'Rest & Drinks', text: '0:10' },
                    ],
                    [
                        { id: 0, title: 'Incline Bench Press', text: `${12 * mult}x`  },
                        { id: 1, title: 'Dumbbell Flys', text: `${15 * mult}x`  },
                    ]
                ];
                break;
            default:
                ex = [
                //Set 1 (i = 0)
                [ 
                    { id: 0, title: 'Warm Up', text: '0:10' },
                    { id: 1, title: 'Jumping Jacks', text: `${12 * mult}x` },
                    { id: 2, title: 'Skippings', text: `${15 * mult}x`  },
                    { id: 3, title: 'Squats', text: `${20 * mult}x`  },
                    { id: 4, title: 'Arm Raises', text: '0:10' },
                    { id: 5, title: 'Rest & Drinks', text: '0:10' },
                ], 

                //Set 2 (i = 1)
                [
                    { id: 0, title: 'Incline Push-Ups', text: `${12 * mult}x`  },
                    { id: 1, title: 'Push-Ups', text: `${15 * mult}x`  },
                    { id: 2, title: 'Sit-Ups', text: `${20 * mult}x`  }
                ]
            ]
            break;
        }
       // console.log(ex)
       // console.log(text)
        return ex;
    });

    const handleDifficultySelect = (difficulty) => {
        setSelectedDifficulty(difficulty);
    
        let newMult = 1; // Initialize newMult
    
        switch(difficulty){
            case "Intermediate":
                setCalories("450");
                setTime(45);
                newMult = 2;
                break;
            case "Advanced":
                setCalories("560");
                setTime(56);
                newMult = 4;
                break;
            default:
                setCalories("320");
                setTime(32);
                newMult = 1;
                break;
        }
    
        // Update exercises with the new multiplier
        let ex = [];
        switch(text){
            case "Lowerbody Train":
                ex = [
                    [
                        { id: 0, title: 'Squats', text: `${12 * newMult}x` },
                        { id: 1, title: 'Lunges', text: `${15 * newMult}x` },
                        { id: 2, title: 'Deadlifts', text: `${20 * newMult}x` },
                        { id: 3, title: 'Rest & Drinks', text: '0:10' },
                    ],
                    [
                        { id: 0, title: 'Step Ups', text: `${12 * newMult}x` },
                        { id: 1, title: 'Glute Bridges', text: `${15 * newMult}x` },
                        { id: 2, title: 'Plie Squats', text: `${20 * newMult}x`  },
                    ]
                ];
                break;
            case "Upperbody Train":
                ex = [
                    [
                        { id: 0, title: 'Push-Ups',text: `${15 * newMult}x`  },
                        { id: 1, title: 'Pull-Ups', text: `${15 * newMult}x`  },
                        { id: 2, title: 'Rest & Drinks', text: '0:10' },
                    ],
                    [
                        { id: 0, title: 'Incline Bench Press', text: `${12 * newMult}x`  },
                        { id: 1, title: 'Dumbbell Flys', text: `${15 * newMult}x`  },
                    ]
                ];
                break;
            default:
                ex = [
                    //Set 1 (i = 0)
                    [ 
                        { id: 0, title: 'Warm Up', text: '0:10' },
                        { id: 1, title: 'Jumping Jacks', text: `${12 * newMult}x` },
                        { id: 2, title: 'Skippings', text: `${15 * newMult}x`  },
                        { id: 3, title: 'Squats', text: `${20 * newMult}x`  },
                        { id: 4, title: 'Arm Raises', text: '0:10' },
                        { id: 5, title: 'Rest & Drinks', text: '0:10' },
                    ], 
    
                    //Set 2 (i = 1)
                    [
                        { id: 0, title: 'Incline Push-Ups', text: `${12 * newMult}x`  },
                        { id: 1, title: 'Push-Ups', text: `${15 * newMult}x`  },
                        { id: 2, title: 'Sit-Ups', text: `${20 * newMult}x`  }
                    ]
                ];
                break;
        }
    
        setMult(newMult); // Update mult state
        setExercises(ex);
        setDifficultyModalVisible(false);
    };

    const renderDifficultyItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleDifficultySelect(item)} style={{ padding: 10, marginVertical: 5, backgroundColor: 'white', borderRadius: 10 }}>
          <Text>{item}</Text>
        </TouchableOpacity>
      );

    const [showUndo1, setShowUndo1] = useState(false);
    const [showUndo2, setShowUndo2] = useState(false);
    const [backupScreen1, setBackupScreen1] = useState([])
    const [backupScreen2, setBackupScreen2] = useState([])

    const removeExercise2 = (exerciseId) => {
        setBackupScreen2(exercises[1]);
        let newExercises = exercises;
        newExercises[1] = exercises[1].filter(exercise => exercise.id !== exerciseId)
        setExercises(newExercises);
        setShowUndo2(true);
    };

    const undo1 = () => {
        let temp = exercises;
        temp[0] = backupScreen1;
        setExercises(temp);
        setShowUndo1(false);
    }

    const undo2 = () => {
        let temp = exercises;
        temp[1] = backupScreen2;
        setExercises(temp)
        setShowUndo2(false)
    }

    const removeExercise1 = (exerciseId) => {
        setBackupScreen1(exercises[0]);
        let newExercises = exercises;
        newExercises[0] = exercises[0].filter(exercise => exercise.id !== exerciseId);
        setExercises(newExercises);
        setShowUndo1(true);
    };

    const EquipmentCard = ({id, text}) =>{
        let imageSource;

        switch(id){
            case 'bottle':
                imageSource = bottle;
                break;
            case 'barbell':
                imageSource = barbell;
                break;
            default:
                imageSource = rope;
                break;
        }

        return(
            <View marginTop={10}>
                <TouchableOpacity style={{backgroundColor: "lightgrey", borderRadius: 15, width: 90, height: 90}}>
                    <Image source={imageSource} style={{ alignSelf: 'center', marginTop: 5, marginBottom: 5}} />
                </TouchableOpacity>
                <Text style={{marginTop: 5, justifyContent: 'center', fontWeight: 700, fontSize: 16, color: themeColors.text}}>{text}</Text>
            </View>
        )
    }

  return (




    
    <View style={{backgroundColor: themeColors.bgColor(1)}} >
      <Header color={"blue"} />
      <Image source={banner} style={{alignSelf:'center'}} />
      <ScrollView style ={{top: -250, borderTopLeftRadius: 15, borderTopRightRadius: 15,
        backgroundColor: 'white'}}>
      
     
        <Text style={{fontSize: 20, fontWeight: 700, marginLeft: 20,
            marginTop: 15, marginBottom: 5,}}>{text}</Text>
        <Text style={{fontSize: 20, fontWeight: 700, alignSelf: 'center', marginLeft: 7, marginRight: 6, color: themeColors.text,
            marginTop: 5, marginBottom: 5,}}>11 Exercises | {time} mins | {calories} Calories Burn</Text>

        <View style={{backgroundColor: 'lightgray', borderRadius: 15, marginTop: 20, marginLeft: 30, marginRight: 30}}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Calendar strokeWidth={2} stroke={themeColors.bgColor(1)} style={{marginTop: 10, marginLeft: 15}}/>
                <Text style={{fontSize: 17, fontWeight: 800, marginLeft: 8, marginTop: 10, marginBottom: 10}}>Schedule Workout</Text>
                <Text style={{ position: 'absolute', right: 35,
                    fontSize: 14, fontWeight: 500, marginTop: 12, marginBottom: 10}}>2/24 9:00am</Text>
                {/**<ChevronRight strokeWidth={1} stroke={"black"} style={{marginTop: 12, right: 10, position: 'absolute'}}/>*/}
            </View>
        </View>

        <TouchableOpacity onPress={() => setDifficultyModalVisible(true)}
        style={{backgroundColor: 'lightgrey', borderRadius: 15, marginTop: 20, marginLeft: 30, marginRight: 30}}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Menu strokeWidth={2} stroke={themeColors.bgColor(1)} style={{marginTop: 10, marginLeft: 15}}/>
                <Text style={{fontSize: 17, fontWeight: 800, marginLeft: 8, marginTop: 10, marginBottom: 10}}>Difficulty</Text>
                <Text style={{ position: 'absolute', right: 35, color: 'black',
                    fontSize: 14, fontWeight: 500, marginTop: 12, marginBottom: 10}}>{selectedDifficulty}</Text>
                {/**<ChevronDown strokeWidth={1} stroke={"black"} style={{marginTop: 12, right: 10, position: 'absolute'}}/>*/}
            </View>
        </TouchableOpacity>

        <Text style={{fontSize: 20, fontWeight: 700, marginLeft: 20, color: 'black',
            marginTop: 15, marginBottom: 5,}}>Equipment You'll Need</Text>
        <View style={{marginLeft: 10,
            flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>
            <EquipmentCard id={"barbell"} text={"Barbell"} />
            <EquipmentCard text={"Skipping Rope"} />
            <EquipmentCard id={"bottle"} text={"Water Bottle"} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 15}}>
            <Text style={{fontSize: 20, fontWeight: 700, marginLeft: 20, color: 'black',
                marginTop: 15, marginBottom: 5,}}>Exercises</Text>
            <Text style={{fontSize: 20, fontWeight: 700, marginLeft: 20, color: themeColors.text,
                marginTop: 15, marginBottom: 5,}}>2 sets</Text>   
        </View>
        <View marginBottom={40}>
            <View style={{flexDirection: 'row',  marginTop: 15}}>
                <Text style={{fontSize: 16, fontWeight: 700, marginLeft: 20, color: 'black', marginBottom: 5,}}>
                    Set 1
                </Text>
                {showUndo1 && <TouchableOpacity onPress={undo1}
                style={{position: 'absolute', right: 35, backgroundColor: themeColors.bgColor(1), borderRadius: 5}}>
                    <Text style={{fontSize: 14, fontWeight: 600, marginLeft: 5, marginRight: 5,
                    marginBottom: 3, marginTop: 3}}>Undo</Text>
                </TouchableOpacity>}
            </View>
            {exercises[0].map(exercise => (
                <ActivityCard  currentAct={currentAct} currentSet={currentSet} timer={1000}
                viewOnly={ lookOnly? true : (exercise.id !== 0)} exercises={exercises} routine={text}
                key={exercise.id} title={exercise.title} text={exercise.text} 
                onDelete={() => removeExercise1(exercise.id)} />
            ))}
            
        </View>
        <View marginBottom={40}>
            <View style={{flexDirection: 'row',  marginTop: 15}}>
                <Text style={{fontSize: 16, fontWeight: 700, marginLeft: 20, color: 'black', marginBottom: 5,}}>
                    Set 2
                </Text>
                {showUndo2 && <TouchableOpacity onPress={undo2}
                style={{position: 'absolute', right: 35, backgroundColor: themeColors.bgColor(1), borderRadius: 5}}>
                    <Text style={{fontSize: 14, fontWeight: 600, marginLeft: 5, marginRight: 5,
                    marginBottom: 3, marginTop: 3}}>Undo</Text>
                </TouchableOpacity>}
            </View>
            {exercises[1].map(exercise => (
                <ActivityCard  currentAct={currentAct} currentSet={currentSet} timer={1000}
                exercises={exercises} viewOnly={true} routine={text}
                key={exercise.id} title={exercise.title} text={exercise.text} 
                onDelete={() => removeExercise2(exercise.id)} />
            ))}
            
        </View>
        {lookOnly? <View>
            {exercises[1].map(exercise => (
                <ActivityCard  currentAct={currentAct} currentSet={currentSet} timer={1000}
                exercises={exercises} routine={text}
                key={exercise.id} title={exercise.title} text={exercise.text} 
                onDelete={() => removeExercise2(exercise.id)} />
            ))}
        </View> :
        <TouchableOpacity onPress={() => 
        {   
            let curS = exercises[currentSet];
            let curA = curS[currentAct];
            let act = curA.title;
            navigation.navigate("ActivityInstruction", 
                {   
                    
                    text: act, exercises: exercises, currentAct: currentAct, routine: text,
                    currentSet: currentSet, timer: 10000, viewOnly: false}
                )}
        }
         style={{backgroundColor: themeColors.bgColor(1), borderRadius: 15,
            marginLeft: 30, marginRight: 30, marginBottom: 300}}>
            <Text style={{color: 'white', fontWeight: 900, fontSize: 22, alignSelf: 'center', marginTop: 10, marginBottom: 10
            }}>Start Work Out</Text>
        </TouchableOpacity>
        }

        {/* Difficulty Level Selection Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={difficultyModalVisible}
          onRequestClose={() => {
            setDifficultyModalVisible(false);
          }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ backgroundColor: 'white', borderRadius: 15, padding: 20, width: '80%' }}>
              <FlatList
                data={difficulties}
                renderItem={renderDifficultyItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </Modal>

      </ScrollView>
    </View>
  )
}