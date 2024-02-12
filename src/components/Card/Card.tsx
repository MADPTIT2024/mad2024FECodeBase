import { Text, View } from 'react-native';
import { styles } from './Card.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CardProps {
  title: string;
  desc: string;
}

export function Card({ title, desc }: CardProps) {
  return (
    <TouchableOpacity onPress={() => console.log('Card pressed')}>
      <View style={styles.cardContainer}>
        <View style={styles.headerContainer}>
          <View>
            <Text>{title}</Text>
          </View>
          <View>
            <Text>Image</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text>{desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
