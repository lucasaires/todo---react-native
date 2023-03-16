import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 24,
  },

  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 58,
  },

  input: {
    height: 56,
    flex: 1,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fdfcfe",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },

  buttonText: {
    color: "#fff",
    fontSize: 24,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    display: "flex",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },

  content: {
    marginTop: 42,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  spaceView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  create: {
    color: "#4EA8DE",
    fontWeight: "bold",
  },

  finished: {
    color: "#8284FA",
    fontWeight: "bold",
  },
  number: {
    color: "#fff",
  },

  counter: {
    backgroundColor: "#333333",
    borderRadius: 99,
    width: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  hr: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.2,
    marginTop: 21,
  },
});
