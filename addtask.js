import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';

export default function Addtask({route, navigation}){
    const [todo, setTodo] = useState('');
    const [note, setNote] = useState('');
    const { setTodoList } = route.params;
  
    const handleAddTodo = () => {
        if (todo === ''|| note==='') return;
        setTodoList((prevTodoList) => [...prevTodoList, { id: Date.now().toString(), title: todo, note:note }]);
        setTodo('');
        navigation.goBack();
    };

    return(
        <View style={{ backgroundColor: "#fff",paddingBottom:500 }}>
        <Text style={styles.label}>Title</Text>
        <TextInput
        placeholder="Add task"
        style={{
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginVertical: 5,
        marginHorizontal: 22, 
        fontSize: 16,
      }}
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
    />
        <Text style={styles.label}>Note</Text>
        <TextInput
        placeholder="Add Note"
        style={{
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginVertical: 5,
        marginHorizontal: 22, 
        fontSize: 16,
      }}
        value={note}
        onChangeText={(userText) => setNote(userText)}
       />
        <Text style={styles.label}>Date</Text>
        <TextInput
        placeholder="select date"
        style={{
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginVertical: 5,
        marginHorizontal: 22, 
        fontSize: 16,
      }}
        
       />
        <Text style={styles.label}>Time</Text>
        <TextInput
        placeholder="set time"
        style={{
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginVertical: 5,
        marginHorizontal: 22, 
        fontSize: 16,
      }}
        
       />
        
     <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    label: {
      color:"#000",
      fontSize: 18,
      fontWeight: "bold",
      marginHorizontal: 22,
    },
    input: {
      borderWidth: 2,
      borderColor: "#1e90ff",
      borderRadius: 6,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    button: {
      backgroundColor: "#000",
      marginHorizontal: 16,
      borderRadius: 6,
      paddingVertical: 12,
      marginVertical: 34,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },
  });