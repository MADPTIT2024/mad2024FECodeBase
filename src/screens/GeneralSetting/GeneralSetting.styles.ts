import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: -10,
  },

  headerText: {
    color: 'white',
  },

  headerArrow: {
    color: 'white',
    fontSize: 20,
  },

  toolbarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: 'grey',
    paddingHorizontal: 10,
    width: '100%', // Chiếm toàn bộ chiều ngang của màn hình
    marginTop: 20,
  },
  toolbarItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  toolbarArrow: {
    color: 'black',
  },
  divider: {
    height: 1,
    backgroundColor: 'white',
  },
  toolbarText: {
    marginLeft: 5,
    color: 'black',
  },
});
