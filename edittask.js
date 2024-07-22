import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import React, { useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import Icons from 'react-native-vector-icons/Entypo';

export default function Edittask({route, navigation}){
    const {todo, setTodoList} = route.params;
    const [updatedTodo, setUpdatedTodo] = useState(todo.title);
    const [updatedNote, setUpdatedNote] = useState(todo.note);
    const [updatedDate, setUpdatedDate] = useState(new Date(todo.date));
    const [updatedTime, setUpdatedTime] = useState(new Date(todo.time));
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleUpdateTodo = () => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((item) => (item.id === todo.id ? { ...item, title: updatedTodo, note: updatedNote,date: updatedDate,time: updatedTime } : item))
    );
    navigation.goBack();
    };

    const onDateChange = (event, selectedDate) => {
      const currentDate = selectedDate || updatedDate;
      setShowDatePicker(Platform.OS === 'android');
      setShowDatePicker(false);
      setUpdatedDate(currentDate);
    };

    const onTimeChange = (event, selectedTime) => {
      const currentTime = selectedTime || updatedTime;
      setShowTimePicker(Platform.OS === 'android');
      setShowTimePicker(false);
      setUpdatedTime(currentTime);
    };
    const showDatepicker = () => {
      setShowDatePicker(true);
    };

    const showTimepicker = () => {
      setShowTimePicker(true);
    };
    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    };

    const formatTime = (time) => {
      const options = { hour: '2-digit', minute: '2-digit' };
      return time.toLocaleTimeString(undefined, options);
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

      <View style={styles.container}> 

        <Text style={styles.label}>Date</Text>
        <TouchableOpacity style={styles.dropdown} onPress={showDatepicker}>
        <View style={styles.dropdownContent}>
          <Text style={styles.dropdownText}>Due Date: {formatDate(updatedDate)}</Text>
          <Icons name="chevron-down" size={24} color="black" />
          
          </View>
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

        <Text style={styles.label}>Time</Text>
        <TouchableOpacity style={styles.dropdown} onPress={showTimepicker}>
        <View style={styles.dropdownContent}> 
          <Text style={styles.dropdownText}>Due Time: {formatTime(updatedTime)}</Text>
          <Icons name="chevron-down" size={24} color="black" />
          
          </View>
        </TouchableOpacity>
        {showTimePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={updatedTime}
                mode="time"
                display="default"
                onChange={onTimeChange}
              />
            )}    
      </View>
        <TouchableOpacity style={styles.button} onPress={handleUpdateTodo}>
        <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  
  label: {
      color:"#000",
      fontSize: 18,
      fontWeight: "bold",
      marginHorizontal: 22,
      paddingTop:15

    },
  dropdown: {
    marginHorizontal: 22,
    marginVertical: 5,
    paddingVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5, 
  },
  dropdownContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dropdownText: {
    fontSize: 16,
  },
    input: {
      borderBottomColor: 'black',
      borderBottomWidth: 0.5,
      marginHorizontal: 16,
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
  