import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Button,
  ImageBackground,
} from "react-native";

export default function Login() {

  const {navigate} = useNavigation();

  function onLoginPress(){
    navigate("WhatsappStatus");
  }
  
  return (
    <ImageBackground
      source={{
        uri: "https://cdn.pixabay.com/photo/2024/02/13/22/20/eibsee-8572003_1280.jpg",
      }}
      style={styles.container}
    >
      <Image style={styles.img} source={require("../../assets/img.png")} />
      <TextInput style={styles.input} placeholder="Enter your Email" />
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        secureTextEntry={true}
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
