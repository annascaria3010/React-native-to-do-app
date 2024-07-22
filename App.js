import React from "react";
import { StatusBar, useColorScheme, SafeAreaView, View, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Todolist from "./todolist";
import Addtask from './addtask';
import Edittask from "./edittask";


export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: "white",
    
  };
  const Stack = createStackNavigator();

  return(
    <>
    <SafeAreaView >
    <View style={styles.statusBarContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      </View>
    </SafeAreaView>

    <NavigationContainer>
    <Stack.Navigator >
    
      <Stack.Screen name="To Do List" component={Todolist} options={{ headerTitleAlign: 'center', headerStyle: styles.header, }}  />
      <Stack.Screen name="New Item" component={Addtask} options={{ headerTitleAlign: 'center',headerStyle: styles.header }}  />
      <Stack.Screen name="Edit task" component={Edittask} options={{ headerTitleAlign: 'center',headerStyle: styles.header }}  />  
    </Stack.Navigator>
    </NavigationContainer>
   
    </>
  );

} 
const styles = StyleSheet.create({
header: {
    height: 35,
    backgroundColor: "white",
    borderBottomColor: 'black',
    borderBottomWidth: 0.3,
  },  
});