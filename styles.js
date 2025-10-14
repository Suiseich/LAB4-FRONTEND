import { StyleSheet } from "react-native";

const bluishBackgroundColor = "#E3F2FD";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bluishBackgroundColor,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333333",
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: "70%",
    borderRadius: 50,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    color: "#555555",
    fontSize: 18,
    padding: 15,
    backgroundColor: "#F0F0F0",
    margin: 15,
    borderRadius: 25,
    width: "85%",
    borderColor: "#DDDDDD",
    borderWidth: 1,
  },

  Container2: {
    flex: 1,
    padding: 20,
  },
  headerText2: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 8,
  },
});
