import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
import HomeScreen from './screens/HomeScreen'
import SleepTrackerScreen from './screens/SleepTrackerScreen';
import {Register_1_Screen, Register_2_Screen} from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';

export default function Navigation(){
    return (
       <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name = "Home" component={HomeScreen} />
            <Stack.Screen name = "SleepTracker" component={SleepTrackerScreen} />
            <Stack.Screen name = "Register_1" component={Register_1_Screen} />
            <Stack.Screen name = "Register_2" component={Register_2_Screen} />
            <Stack.Screen name = "Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
       </NavigationContainer>
    )
}