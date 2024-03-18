import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth, // Chiếm toàn bộ chiều ngang của màn hình
  },
  header: {
    justifyContent: 'center',
    height: 60,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  scrViewText: {
    fontSize: 20,
    paddingTop: 20,
    color: '#ffffff',
  },
  toolbarContainer: {
    flexDirection: 'column',
    alignItems: 'stretch', // Thay đổi từ 'center' thành 'stretch'
    marginTop: 20,
    width: windowWidth, // Chiếm toàn bộ chiều ngang của màn hình
  },
  toolbarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: 'rgba(192, 192, 192,0.07)',
    paddingHorizontal: 10,
    width: '100%', // Chiếm toàn bộ chiều ngang của màn hình
  },
  toolbarItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  toolbarArrow: {
    color: 'white',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(192, 192, 192,0.2)',
  },
  toolbarText: {
    marginLeft: 5,
    color: 'white',
  },
  textContent: {
    marginTop: 20,
  },
  textStyle: {
    fontSize: 16,
    marginBottom: 10,
  },

  textContainer: {
    left: windowWidth - (4 / 3) * windowWidth,
    marginTop: 30,
  },
  textSettings: {
    fontSize: 16,
    color: 'white',
  },
});
