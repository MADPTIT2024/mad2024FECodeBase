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
    height: '100%',
    marginVertical: 20,
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
    backgroundColor: Colors.primary,
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
  scrollView: {
    marginTop: 50, // Để biểu đồ nằm giữa và không bị cắt lề trái và lề phải
  },
  panelContainer: {
    marginTop: 50,
    backgroundColor: 'deepskyblue',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 20,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    padding: 10, // Khoảng cách nội dung trong ô
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
  },
  columnHeader: {
    flex: 1,
    borderColor: 'black',
    padding: 10,
    textAlign: 'center', // Căn giữa văn bản
    color:'white',
    fontSize:15,
  },
  columnCell: {
    padding: 10, // Khoảng cách nội dung trong ô
    fontWeight: 'bold',
    fontSize:40,
    color:'white'
  },

  borderRight: {
    borderRightWidth: 1, // Thêm đường kẻ ngăn cách bên phải
  },
});
