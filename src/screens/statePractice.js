import { useState } from "react";

export { View, TextInput,StyleSheet,Text,Button } from "react-native";

export default function StatePractice(){

//business logic

const [email, setEmail] = useState();
const [password, setPassword] = useState();



  return (
    <View style = {styles.container}>;
    <Text>{email}</Text>
    <Text>{password}</Text>
    <TextInput
        style = {styles.input}
        placeholder = "Enter Email"
        onChangeText={setEmail}
    />
    <TextInput
        style = {styles.input}
        placeholder = "Enter Password"
        onChangeText={setPassword}
    />
    

    <Button title="Login"/>
    </View>
   );
}

const styles = new StylesSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
  },
});