import Colors from '@/constants/Colors';
import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

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
  tabContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: screenHeight - 20,
  },
  calendarStyle: {
    width: screenWidth * 0.9,
    borderRadius: 10,
  },
  historyContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth * 0.9,
    marginVertical: 10,
    color: Colors.primary,
  },
  dataTabContainer: {
    flex: 1,
    marginTop: 10, // Thêm khoảng cách từ DataTab đến headerNav
    backgroundColor: Colors.background, // Màu nền cho DataTab
  },
  chartTitle: {
    color: 'white',
    fontSize: 12,
    marginLeft: 20,
    marginBottom: 10,
  },
  bmiContainer: {
    position: 'absolute',
    marginTop: 300,
  },
  chartContainer: {
    width: '98%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  monthLabel: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.text,
  },
  chartStyle: {
    marginHorizontal: 10, // Để biểu đồ nằm giữa và không bị cắt lề trái và lề phải
  },
});
