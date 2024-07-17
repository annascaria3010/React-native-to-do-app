import { StyleSheet, FlatList, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react';
import Fallback from './src/components/fallback';
import Icons from 'react-native-vector-icons/Entypo';
import Dialog from './src/components/Dialog'; 

export default function Todolist({navigation}) {
    const [todoList, setTodoList] = useState([]);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);
  
    const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const showDeleteDialog = (item) => {
    setSelectedTodo(item);
    setDialogVisible(true);
  };

  const handleConfirmDelete = () => {
    handleDeleteTodo(selectedTodo.id);
    setDialogVisible(false);
    setSelectedTodo(null);
  };

  const handleCancelDelete = () => {
    setDialogVisible(false);
    setSelectedTodo(null);
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (time) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return time.toLocaleTimeString(undefined, options);
  };

  const renderTodos = ({ item }) => {
    return (
      <View style={{ 
        backgroundColor: "#000",
        marginHorizontal: 16,
        borderRadius: 6,
        paddingHorizontal: 22,
        paddingVertical: 10,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <View style={{flexDirection:"column",paddingRight: 20, flex: 1}}>
        <Text style={{color:"#fff", fontSize:21, fontWeight: "800",}}>{item.title}</Text>
        <Text style={{color:"#fff", fontSize:15}}>Notes: {item.note}</Text>
        <Text style={{color:"#fff", fontSize:15}}>Due date: {formatDate(item.date)}</Text>
        <Text style={{color:"#fff", fontSize:15}}>Due time: {formatTime(item.time)}</Text>

      </View>  
      <View style={{flexDirection:"row" }}>
        <Icons style={{ color:"#fff", fontSize:25,marginRight: 20 }}
          name="pencil"
          onPress={() => navigation.navigate('Edit task', { todo: item, note: item, date: item, time: item, setTodoList })}
        />
        <Icons style={{ color:"#fff", fontSize:25}}
          name="trash"
          onPress={() => showDeleteDialog(item)}
        />
       </View> 
       </View>
       
    );
  };




  return (
    <View style={{ backgroundColor: "#fff", paddingBottom:150 }}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Add task', { setTodoList })}
      >
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>

      <FlatList data={todoList} renderItem={renderTodos} />

      {todoList.length <= 0 && <Fallback />}
      
      <Dialog
        visible={dialogVisible}
        title="Delete Task"
        message="Are you sure you want to delete this task?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />

    </View>
  );
};

const styles = StyleSheet.create({
    
    addButton: {
      backgroundColor: "#000",
      marginHorizontal: 16,
      borderRadius: 6,
      paddingVertical: 12,
      marginVertical: 34,
      alignItems: "center",
    },
    addButtonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 20,
    },
  });

