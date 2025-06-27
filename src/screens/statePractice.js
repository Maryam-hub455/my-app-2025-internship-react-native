import { useState } from "react";
import { View,TextInput,StyleSheet,Text,Button } from "react-native";


export default function StatePractice(){

const [email, setEmail] = useState();
const [password, setPassword] = useState();

return (

  <View style = {StyleSheet.container}>
    <Text>{email}</Text>
    <Text>{password} </Text>

    <TextInput 
    style = {styles.input}
    placeholder = "Enter Email"
    onChangeText={setEmail}
    />

    <TextInput 
    style = {Styles.input}
    placeholder = "Enter Password"
    onChangeText={setPassword}
    />
    <Button title="login"/>

    </View>
);
}
const styles= new StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent:"center",
    gap:20,
    paddingHorizontal: 20,

    backgroundColor:"rgba(255,255,0,0.5)",
  },
  input:{
    borderWidth: 1,
    borderRadius:5,
  },

});