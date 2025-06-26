import { useState } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";

export default function StatePractice() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.stateText}> {email}</Text>
      <Text style={styles.stateText}> {password}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />

      <Button
        title="Login"
        onPress={() => {
          console.log("Login button pressed!");
          console.log("Entered Email:", email);
          console.log("Entered Password:", password);
        }}
        color="#28A745"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 25,
  },
  stateText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#4A4A4A",
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 10,
    padding: 15,
    width: "100%",
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    color: "#333333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
});