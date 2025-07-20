import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Button,
  ImageBackground,
} from "react-native";

import { auth } from "../database/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [Email] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { navigate } = useNavigation();

  async function onLoginPress() {
    try{
    const result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error){
      alert (error.message);
    }
  }

  return (
    <ImageBackground
      source={{
        uri: "https://cdn.pixabay.com/photo/2024/02/13/22/20/eibsee-8572003_1280.jpg",
      }}
      style={styles.container}
    >
      <Image style={styles.img} source={require("../../assets/img.png")} />

      <TextInput
        placeholderTextColor={"white"}
        style={styles.input}
        placeholder="Enter your Email"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        secureTextEntry={true}
        placeholderTextColor={"white"}
        onChangeText={setPassword}
      />

      <View style={styles.buttonCon}>
        <Button title="Login" onPress={onLoginPress} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",

    justifyContent: "center",

    alignItems: "center",

    gap: 30,

    paddingLeft: 10,

    paddingRight: 10,
  },

  img: {
    width: 100,

    height: 100,

    borderRadius: 100,
  },

  input: {
    width: "100%",

    borderColor: "black",

    borderWidth: 1,

    borderRadius: 100,

    padding: 20,
  },

  buttonCon: {
    width: "100%",
  },
});
