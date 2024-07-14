import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import React, { useState} from 'react'

export default function Edittask({route, navigation}){
    const { todo, note, setTodoList } = route.params;
    const [updatedTodo, setUpdatedTodo] = useState(todo.title);
    const [updatedNote, setUpdatedNote] = useState(todo.note);

    const handleUpdateTodo = () => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((item) => (item.id === todo.id ? { ...item, title: updatedTodo, note: updatedNote } : item))
    );
    navigation.goBack();
    };

    return(
        <View style={{ backgroundColor: "#fff",paddingBottom:500 }}>
        <TextInput
        style={styles.input}
        placeholder="Edit task"
        value={updatedTodo}
        onChangeText={(userText) => setUpdatedTodo(userText)}
        />
        <TextInput
        style={styles.input}
        placeholder="Edit note"
        value={updatedNote}
        onChangeText={(userText) => setUpdatedNote(userText)}
        />
        <TouchableOpacity style={styles.button} onPress={handleUpdateTodo}>
        <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
      borderWidth: 2,
      marginHorizontal: 16,
      borderColor: "#fff",
      borderRadius: 6,
      paddingVertical: 8,
      paddingHorizontal: 16,
      fontSize: 20
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
  