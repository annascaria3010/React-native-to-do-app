import { StyleSheet, FlatList, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react';
import Fallback from './src/components/fallback';
import Icons from 'react-native-vector-icons/Entypo';
import Dialog from './src/components/Dialog'; 

export default function Todolist({navigation}) {
    const [todoList, setTodoList] = useState([]);

  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const renderTodos = ({ item }) => {
    return (
      <View style={{ 
        backgroundColor: "#000",
        marginHorizontal: 16,
        borderRadius: 6,
        paddingHorizontal: 22,
        paddingVertical: 16,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <View style={{flexDirection:"column",paddingRight: 20, flex: 1}}>
        <Text style={{ color:"#fff", fontSize:20, fontWeight: "800",}}>{item.title}</Text>
        <Text style={{ color:"#fff", fontSize:16,}}>{item.note}</Text>
      </View>  
      <View style={{flexDirection:"row" }}>
        <Icons style={{ color:"#fff", fontSize:25,marginRight: 20 }}
          name="pencil"
          onPress={() => navigation.navigate('Edit task', { todo: item, note: item, setTodoList })}
        />
        <Icons style={{ color:"#fff", fontSize:25}}
          name="trash"
          onPress={() => handleDeleteTodo(item.id)}
        />
       </View> 
      </View>
    );
  };




  return (
    <View style={{ backgroundColor: "#fff", paddingBottom:500, }}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Add task', { setTodoList })}
      >
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>

      <Dialog/>

      <FlatList data={todoList} renderItem={renderTodos} />

      {todoList.length <= 0 && <Fallback />}
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

