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
        paddingVertical: 15,
        marginBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop:15
      }}>
      <TouchableOpacity
       style={{flexDirection:"column",paddingRight: 20, flex: 1}}
      onPress={() => navigation.navigate('Edit task', { todo: item, note: item, date: item, time: item, setTodoList })}
      >
        <Text style={{color:"#fff", fontSize:21, fontWeight: "800",}}>{item.title}</Text>
        <Text style={{color:"#fff", fontSize:15}}>Notes: {item.note}</Text>
       </TouchableOpacity>
       
      <View style={{flexDirection:"row" }}>
        
        <Icons style={{ color:"#fff", fontSize:25}}
          name="trash"
          onPress={() => showDeleteDialog(item)}
        />
       </View> 
       </View>
       
    );
  };




  return (
    <View style={{ backgroundColor: "#fff", flex: 1, paddingTop:15, paddingBottom:180 }}>
      

      <FlatList data={todoList} renderItem={renderTodos} />

      {todoList.length <= 0 && <Fallback />}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('New Item', { setTodoList })}
      >
       <Icons name="circle-with-plus" style={styles.addIcon} />
      </TouchableOpacity>
      
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
    position: 'absolute',
    bottom: 30,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
    addButtonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 20,
      alignItems: 'flex-end'
    }, 
    addIcon: {
      color: "#000",
      fontSize: 50,
      marginRight: 5,
      
    },

  });

