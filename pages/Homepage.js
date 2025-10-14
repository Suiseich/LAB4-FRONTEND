import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles.js";

export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Homepage</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
          color={"#0a7894ff"}
        />
      </View>

      <View>
        <Button
          title="View Users"
          onPress={() => navigation.navigate("UserList")}
        ></Button>
      </View>
      
    </View>
  );
}
