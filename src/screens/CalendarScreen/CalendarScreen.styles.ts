import Colors from '@/constants/Colors';
import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: Colors.text,
  },
  headerNav: {
    display: 'flex',
    flexDirection: 'row',
    width: screenWidth,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  buttonText: {
    marginHorizontal: screenWidth / 6,
    marginVertical: 20,
  },
});
