import { View, Text } from "react-native";
import { styles } from "./General_Setting.styles";

export function Discover() {
  return (
    <View style={styles.container}>
      <Text style={styles.toolbarArrow}>&gt;</Text>
      <Text>General Settings</Text>
    </View>
  );
}
