import { View, Text } from 'react-native';
import { styles } from './Calendar.styles';
import { ScrollView } from 'react-native-gesture-handler';
import Screen from '@/components/Screen/Screen';

export function Calendar() {
  return (
    // <View style={styles.container}>
    //   <Text>Calendar</Text>
    // </View>
    <Screen>
      <ScrollView>
        <Text>Calendar</Text>
      </ScrollView>
    </Screen>
  );
}
