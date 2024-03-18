import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },

  header: {
    flexDirection: "row",
  },

  toolbarItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    backgroundColor: "grey",
    paddingHorizontal: 10,
    width: "100%", // Chiếm toàn bộ chiều ngang của màn hình
    marginTop: 20,
  },
  toolbarItemContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  toolbarArrow: {
    color: "black",
  },
  divider: {
    height: 1,
    backgroundColor: "white",
  },
  toolbarText: {
    marginLeft: 5,
    color: "black",
  },
});
