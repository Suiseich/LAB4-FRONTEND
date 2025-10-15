import { View, Text, Button, TextInput } from "react-native";
import { useState } from "react";
import axios from "axios";
import styles from "../styles";
export default function EditUserPage({ route }) {
  const { user } = route.params;

  const [first_Name, setFirstName] = useState(user.first_name);
  const [last_Name, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [gender, setUserGender] = useState(user.gender);
  const [password, setPassword] = useState(user.password);

  const handleUpdate = () => {
    if (!first_Name || !last_Name || !email || !gender || !password) {
      window.alert("Error", "Please fill up all required fields");
      return;
    }
    axios
      .put(`http://172.19.128.1:8000/registration/api/users/${user.id}/`, {
        first_name: first_Name,
        last_name: last_Name,
        email: email,
        gender: gender,
        password: password,
      })
      .then(() => {
        window.alert("Success", "User updated successfully");
      })
      .catch((error) => {
        console.error(error);
        window.alert("Error", "Failed to update user!");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText2}>Edit User</Text>
      <TextInput
        style={styles.input}
        value={first_Name}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        value={last_Name}
        onChangeText={setLastName}
      />

      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <TextInput
        style={styles.input}
        value={gender}
        onChangeText={setUserGender}
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.buttonContainer}>
        <Button title="Update Record" onPress={handleUpdate} />
      </View>
    </View>
  );
}
