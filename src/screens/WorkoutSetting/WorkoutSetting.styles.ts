import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const ITEM_WIDTH = windowWidth * 0.8;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },

  header: {},

  headerArrow: {
    marginTop: 15,
    fontSize: 20,
    color: 'white',
  },

  scrollViewContent: {
    flexGrow: 1,
  },

  textWorkout: {
    color: 'white',
    marginTop: 5,
    fontSize: 20,
  },

  coachVideo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textCoach: {
    fontSize: 15,
    color: 'white',
  },

  imageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },

  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageCoach: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },

  imageArrow: {
    fontSize: 14,
    marginLeft: 10,
    color: 'grey',
  },

  switchButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageText: {
    marginLeft: 5,
    fontSize: 10,
    color: 'white',
  },

  volumeContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  slider: {
    flex: 1,
    marginHorizontal: 10,
  },

  itemContainer: {
    width: ITEM_WIDTH,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 20,
  },
  item: {
    width: '80%',
    aspectRatio: 1,
    backgroundColor: 'white',
  },
});
