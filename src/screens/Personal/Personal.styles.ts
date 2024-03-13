import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    justifyContent: "center",
    left: 0,
    right: 0,
    height: 60,
  },

  headerText: {
    color: "#212121",
    fontSize: 18,
  },

  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  textContent: {
    marginTop: 20, // Để tạo khoảng cách giữa icon và văn bản
  },
  textStyle: {
    textAlign: "center",
    color: "#000",
    fontSize: 16,
    padding: 20,
  },

  scrViewText: {
    paddingTop: 20,
  },
});
