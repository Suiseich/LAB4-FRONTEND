import { View, Text, Button } from "react-native";
import styles from "../styles.js";
import { useState } from "react";
import { TextInput } from "react-native";

export default function HomePage({ navigation }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Registration</Text>

      <TextInput
        style={styles.input}
        placeholder="First name"
        value={formData.first_name}
        onChangeText={(text) => handleChange("first_name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last name"
        value={formData.last_name}
        onChangeText={(text) => handleChange("last_name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="email"
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        value={formData.password}
        secureTextEntry
        onChangeText={(text) => handleChange("password", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="gender"
        value={formData.gender}
        onChangeText={(text) => handleChange("gender", text)}
      />

      <Button
        title="Review and Submit"
        onPress={() => navigation.navigate("Review", { formData })}
        color={"#0a7894ff"}
      />
    </View>
  );
}
