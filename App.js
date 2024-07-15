import React from "react";
import { Text } from "react-native"; 
import { View, StatusBar } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Todolist from "./todolist";
import { NavigationContainer } from '@react-navigation/native';
import Addtask from './addtask';
import Edittask from "./edittask";


export default function App() {
  
  const Stack = createStackNavigator();

  return(
    <>
    
    
    <NavigationContainer>
    <Stack.Navigator >
    
      <Stack.Screen name="To Do List" component={Todolist} options={{ headerTitleAlign: 'center' }}  />
      <Stack.Screen name="Add task" component={Addtask} options={{ headerTitleAlign: 'center' }}  />
      <Stack.Screen name="Edit task" component={Edittask} options={{ headerTitleAlign: 'center' }}  />  
    </Stack.Navigator>
    </NavigationContainer>
   
    </>
  )

} 