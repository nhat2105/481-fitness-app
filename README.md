To run the project:
1. cd to `fitness-tracker` directory
2. use  `npx create-expo-app .` command, this will initialize a package of default expo app project
3. use `npm install @react-navigation/native @react-navigation/native-stack react-native-feather @react-native-picker/picker @react-native-async-storage/async-storage react-native-countdown-fixed react-native-webview react-native-paper` to install the required library
4. use  `npx install expo-image-picker react-native-gesture-handler` to install the required library


There are 2 options to run the repository, 1 from mobile device, one from the laptop/computer environment.
- For mobile: 
  Download `Expo Go` app. Use `npm run android` cmd to run the application. Scan the QR code and open the app in Expo Go. 
  **WARNING** It is very likely running the app on phone will display the message: "It's taking longer than expected", when this happens, use command "npx expo start --tunnel" instead.
- For desktop: 
  If you don't have an Android Emulator, this video shall help to set it up: [https://youtu.be/8ejuHsaXiwU?si=Ex0ZnJxdrCPWRHo_](url) 
  Otherwise, run your emulator, and just use `npm run android` command
  
