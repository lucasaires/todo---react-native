import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  content: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
    paddingVertical: 10,
  },
 
  trash:{
    width: 24,
    height: 24,
    marginRight: 16,
  },

  contentDone: {
    textDecorationLine: "line-through",
    color: "#a09cb1",
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
    paddingVertical: 10,
  }
});
