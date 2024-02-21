import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
import HomeScreen from './screens/HomeScreen'
import SleepTrackerScreen from './screens/sleepTracker/SleepTrackerScreen';
import {Register_1_Screen, Register_2_Screen} from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import SetSleepTrackerScreen from './screens/sleepTracker/SetSleepTrackerScreen';
import SetWeightScreen from './screens/weightControl/SetWeightScreen';
import MealPlannerScreen from './screens/weightControl/MealPlannerScreen';
import SetMealScreen from './screens/weightControl/SetMealScreen';
import MealScheduleScreen from './screens/weightControl/MealScheduleScreen';
import StepsWalkedScreen from './screens/progressTracker/StepsWalkedScreen';
import CaloriesReportScreen from './screens/progressTracker/CaloriesReportScreen';
import PhotoComparerScreen from './screens/progressTracker/PhotoComparerScreen';
import AddPhotoScreen from './screens/progressTracker/AddPhotoScreen';
import ComparePhotoScreen from './screens/progressTracker/ComparePhotoScreen';
import PhotoResultScreen from './screens/progressTracker/PhotoResultScreen';

export default function Navigation(){
    return (
       <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name = "Home" component={HomeScreen} />
            <Stack.Screen name = "SleepTracker" component={SleepTrackerScreen} />
            <Stack.Screen name = "Register_1" component={Register_1_Screen} />
            <Stack.Screen name = "Register_2" component={Register_2_Screen} />
            <Stack.Screen name = "Dashboard" component={DashboardScreen} />
            <Stack.Screen name = "SetSleepTracker" options={{presentation: 'modal'}} component={SetSleepTrackerScreen} />
            <Stack.Screen name = "SetWeight" component={SetWeightScreen} />
            <Stack.Screen name = "MealPlanner" component={MealPlannerScreen} />
            <Stack.Screen name = "MealSchedule" component={MealScheduleScreen} />
            <Stack.Screen name = "SetMeal" component={SetMealScreen} />
            <Stack.Screen name = "StepsReport" component={StepsWalkedScreen} />
            <Stack.Screen name = "CaloriesReport" component={CaloriesReportScreen} />
            <Stack.Screen name = "PhotoComparer" component={PhotoComparerScreen} />
            <Stack.Screen name = "AddPhoto" component={AddPhotoScreen} />
            <Stack.Screen name = "ComparePhotos" component={ComparePhotoScreen} />
            <Stack.Screen name = "PhotoResult" component={PhotoResultScreen} />
        </Stack.Navigator>
       </NavigationContainer>
    )
}