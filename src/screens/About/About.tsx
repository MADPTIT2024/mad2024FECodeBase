import { View, Text, Button } from "react-native";
import { styles } from "./About.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/AppNavigator";

type AboutScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'About'>;

interface AboutProps {
  navigation: AboutScreenNavigationProp;
}

export function About({ navigation }: AboutProps) {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}