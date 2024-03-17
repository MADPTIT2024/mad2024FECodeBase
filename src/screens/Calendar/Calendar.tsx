import { View, Text } from 'react-native';
import { styles } from './Calendar.styles';
import { ScrollView } from 'react-native-gesture-handler';

export function Calendar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calendar</Text>
    </View>
  );
}
