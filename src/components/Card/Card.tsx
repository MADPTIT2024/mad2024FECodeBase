import { Animated, Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import { styles } from './Card.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CardProps {
  title: string;
  desc: string;
  customeStyle?: StyleProp<ViewStyle>;
}

export function Card({ title, desc, customeStyle }: CardProps) {
  const animated = new Animated.Value(1);

  const debugPress = () => {
    console.log('Card pressed');
  };

  return (
    <View>
      <TouchableOpacity onPress={debugPress}>
        <View style={[styles.cardContainer, customeStyle]}>
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
      {/* <Pressable onPress={debugPress} onPressIn={fadeIn} onPressOut={fadeOut}>
        <Animated.View style={styles.cardContainer}>
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
        </Animated.View>
      </Pressable> */}
    </View>
  );
}
