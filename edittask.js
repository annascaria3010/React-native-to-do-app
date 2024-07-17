import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import React, { useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Edittask({route, navigation}){
    const {todo, setTodoList} = route.params;
    const [updatedTodo, setUpdatedTodo] = useState(todo.title);
    const [updatedNote, setUpdatedNote] = useState(todo.note);
    const [updatedDate, setUpdatedDate] = useState(new Date(todo.date));
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleUpdateTodo = () => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((item) => (item.id === todo.id ? { ...item, title: updatedTodo, note: updatedNote,date: updatedDate } : item))
    );
    navigation.goBack();
    };

    const onDateChange = (event, selectedDate) => {
      const currentDate = selectedDate || updatedDate;
      setShowDatePicker(Platform.OS === 'android');
      setUpdatedDate(currentDate);
    };

    const showDatepicker = () => {
      setShowDatePicker(true);
    };

    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    };

    return(
        <View style={{ backgroundColor: "#fff",paddingBottom:500 }}>
        <Text style={styles.label}>Title</Text>
        <TextInput
        style={styles.input}
        placeholder="Edit task"
        value={updatedTodo}
        onChangeText={(userText) => setUpdatedTodo(userText)}
        />
        <Text style={styles.label}>Note</Text>
        <TextInput
        style={styles.input}
        placeholder="Edit note"
        value={updatedNote}
        onChangeText={(userText) => setUpdatedNote(userText)}
        />
        <Text style={styles.label}>Date</Text>
        <TouchableOpacity style={styles.dropdown} onPress={showDatepicker}>
          <Text style={styles.dropdownText}>Due Date: {formatDate(updatedDate)}</Text>
          <Ionicons name="md-arrow-dropdown" size={24} color="black" />
        </TouchableOpacity>
        {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={updatedDate}
                mode="date"
                display="default"
                onChange={onDateChange}
              />
            )}



        <TouchableOpacity style={styles.button} onPress={handleUpdateTodo}>
        <Text style={styles.buttonText}>Save</Text>
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
    dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginLeft:10, 
  },
  dropdownText: {
    marginRight: 10,
    fontSize: 16,
    paddingLeft:5,
  },
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
  