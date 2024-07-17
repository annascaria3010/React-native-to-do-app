import React from "react";
import { StatusBar, useColorScheme, SafeAreaView } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Todolist from "./todolist";
import Addtask from './addtask';
import Edittask from "./edittask";


export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: "white"
  };
  const Stack = createStackNavigator();

  return(
    <>
    <SafeAreaView >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </SafeAreaView>

    <NavigationContainer>
    <Stack.Navigator >
    
      <Stack.Screen name="To Do List" component={Todolist} options={{ headerTitleAlign: 'center' }}  />
      <Stack.Screen name="Add task" component={Addtask} options={{ headerTitleAlign: 'center' }}  />
      <Stack.Screen name="Edit task" component={Edittask} options={{ headerTitleAlign: 'center' }}  />  
    </Stack.Navigator>
    </NavigationContainer>
   
    </>
  );

} 