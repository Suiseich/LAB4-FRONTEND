import { View, Text, Button, Alert } from "react-native";
import styles from "../styles";
import axios from "axios";

export default function ReviewPage({ route, navigation }) {
  const { formData } = route.params;

  const handleSubmit = async () => {
    try {
      const respone = await axios.post(
        "http://172.19.128.1:8000/registration/api/register/",
        formData
      );
      Alert.alert("Success", "User Registered successful");
      navigation.getBack();
    } catch (error) {
      Alert.alert(
        "Error",
        JSON.stringify(error.response?.data || "Something went wrong")
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Information</Text>
      <Text style={styles.input}>First Name: {formData.first_name}</Text>
      <Text style={styles.input}>Last Name: {formData.last_name}</Text>
      <Text style={styles.input}>Email: {formData.email}</Text>
      <Text style={styles.input}>Password: {formData.password}</Text>
      <Text style={styles.input}>Gender: {formData.gender}</Text>

      <Button
        title="Go back to edit"
        onPress={() => navigation.goBack()}
      ></Button>
      <Button title="Submit" onPress={handleSubmit}></Button>
    </View>
  );
}
