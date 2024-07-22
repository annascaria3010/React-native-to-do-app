import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native'
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icons from 'react-native-vector-icons/Entypo';

export default function Addtask({route, navigation}){
    const [todo, setTodo] = useState('');
    const [note, setNote] = useState('');
    const {setTodoList } = route.params;
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);


    const handleAddTodo = () => {
        if (todo === ''|| note==='' || date==='' || time==='') return;
        setTodoList((prevTodoList) => [...prevTodoList, { id: Date.now().toString(), title: todo, note:note, date:date, time: time }]);
        setTodo('');
        navigation.goBack();
    };
    const onDateChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShowDatePicker(Platform.OS === 'android');
      setShowDatePicker(false);
      setDate(currentDate);
    };

    const onTimeChange = (event, selectedTime) => {
      const currentTime = selectedTime || time;
      setShowTimePicker(Platform.OS === 'android');
      setTime(currentTime);
      setShowTimePicker(false);
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
       
        <View style={styles.container}>
          <View>
            <Text style={styles.label}>Date</Text>
            <TouchableOpacity style={styles.dropdown} onPress={showDatepicker}>
            <View style={styles.dropdownContent}>
              <Text style={styles.dropdownText}>Due Date: {formatDate(date)}</Text>
              <Icons name="chevron-down" size={24} color="black" />
              
            </View>  
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                display="default"
                onChange={onDateChange}
              />
            )}
        </View>

        <View>
          <Text style={styles.label}>Time</Text>
          <TouchableOpacity style={styles.dropdown} onPress={showTimepicker}>
          <View style={styles.dropdownContent}>
            <Text style={styles.dropdownText}>Due Time: {formatTime(time)}</Text>
            <Icons name="chevron-down" size={24} color="black" />
            
          </View>  
          </TouchableOpacity> 
          {showTimePicker && (
            <DateTimePicker
              testID="timeTimePicker"
              value={time}
              mode="time"
              display="default"
              onChange={onTimeChange}
            />
          )}
        </View>
      </View>
        
    
        
     <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
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

    label: {
      color:"#000",
      fontSize: 18,
      fontWeight: "bold",
      marginHorizontal: 22,
      paddingTop:15
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