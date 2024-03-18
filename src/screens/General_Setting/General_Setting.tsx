import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./General_Setting.styles";

export function General_Setting() {
  const handleGeneralSettings = () => {
    // Xử lý khi ấn vào General Settings
    // navigation.navigate('.');
    console.log("Go to General Settings screen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>&lt;</Text>
        <Text>Discover</Text>
        <Text></Text>
      </View>

      <TouchableOpacity
        style={styles.toolbarItem}
        onPress={handleGeneralSettings}
      >
        <View style={styles.toolbarItemContent}>
          <Text style={styles.toolbarText}>Reminder</Text>
        </View>
        <Text style={styles.toolbarArrow}>&gt;</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.toolbarItem}
        onPress={handleGeneralSettings}
      >
        <View style={styles.toolbarItemContent}>
          <Text style={styles.toolbarText}>Restone purchase</Text>
        </View>
        <Text style={styles.toolbarArrow}>&gt;</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.toolbarItem}
        onPress={handleGeneralSettings}
      >
        <View style={styles.toolbarItemContent}>
          <Text style={styles.toolbarText}>Privacy policy</Text>
        </View>
        <Text style={styles.toolbarArrow}>&gt;</Text>
      </TouchableOpacity>
    </View>
  );
}
