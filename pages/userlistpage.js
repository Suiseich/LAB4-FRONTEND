import { View, Text, FlatList, Button, Alert } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../styles";

export default function UserListPage({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://172.19.128.1:8000/registration/api/users/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleEdit = (user) => {
    navigation.navigate("EditUser", { user });
  };

  const handleDelete = (id) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this user?",
      [
        ({ text: "Cancel", style: "Cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            axios
              .delete(`http://172.19.128.1:8000/registration/api/users/${id}/`)
              .then(() => {
                Alert.alert("Success", "User deleted successfully");
              })
              .catch((err) => {
                Alert.alert("Error", "Failed to delete user");
              });
          },
        }),
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText2}>Registered Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>Firstname: {item.first_name}</Text>
            <Text style={styles.cardText}>Lastname: {item.last_name}</Text>
            <Text style={styles.cardText}>Email: {item.email}</Text>
            <View>
              <Button
                title="Edit"
                onPress={() => handleEdit(item)}
                color="#4CAF50"
              />
              <Button
                title="Delete"
                onPress={() => handleDelete(item.id)}
                color="#f44336"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}
