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

All the functionality includes are:
- Instruction (Info guidance): if you feel lost, please click on the `info button` on the top right corner, it will help to guide through each function.

- Workout Tracker (where users can track their progress through scheduled routines exercises), view or start their pre-scheduled exericse (*Users can only start a workout routine if and only if it is in their current date's schedule, otherwise it is a view only mode).

- Users can swipe left on any of the exercise card to remove an activity, if they don't want to do a certain activity in the set. There will be an "undo" button that pops up accordingly.

- Users must start with "Warm up", or the first activity in the set, they cannot start half-way through the set. One an activity starts, there will be a countdown timer, hard-coded to be 10 seconds. Users can either skip this timer (if they are done early), or it will automatically be done afterwards

- Once the whole routine is done, users will be redirected to a "congrats message screen", after this the activity will be added to the history workout session, as well as the "calories burnt" records

- Schedule Workout: where users can add activity to their schedule, either add or remove activities based on their desired time availability. This can be access after clicking on `View Schedule`, then `View Your Workout Schedule`. To add an exercise routine, there is an "Add to Schedule" button at the bottom of the screen.

- Users can also alternate their schedule by dragging the routine cards in the schedule. If you walkthrough all dates within the schedule and alternate it, the schedule is set for the whole week based on your personal schedule.

- Workout History: where users can view their past workout

- Steps Count/Calories Burnt: where users can view their progress in workout exercises

- Photo Tracker: Users can add photos from their phone to track of how their progress in muscle gaining/weight losing/weight gaining are.

- Photos adding are only applicable for 1 photo per month, and this feature only capture 1 year time range, so anything you upload in a month that is already existed in the system would override the data previously (The sample photos are samples, not actual photos until users upload something)
- 
----------------------------------------
Group: 3
Name:
Rezwan, Fabiha, Minhaz, Hong
----------------------------------------
