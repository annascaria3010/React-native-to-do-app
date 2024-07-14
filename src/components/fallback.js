import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Fallback = () => {
  return (
    <View style={{alignItems:"center", paddingLeft:35,paddingTop:35}}>
      <Image 
      source={require("../../assests/image.png")} 
      style={{height: 300, width:300,}}/>
      <Text style={{ fontSize:18, paddingRight:65}}>Start Adding your Task</Text>
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({});