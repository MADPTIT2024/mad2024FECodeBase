import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Switch,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '@/components/Button/Button';

const windowWidth = Dimensions.get('window').width;

export function Music() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [showImages, setShowImages] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setShowImages((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.music}>
        <Text style={styles.text}>Music</Text>
        <View>
          <Switch
            trackColor={{ false: '#767577', true: '#0066FF' }}
            thumbColor={isEnabled ? '#0066FF' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      {showImages && (
        <Image
          source={require('../../assets/images/music.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      {showImages && (
        <Image
          source={require('../../assets/images/music.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      {showImages && (
        <Image
          source={require('../../assets/images/music.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate('WorkoutSetting')}>
          Done
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'space-between',
  },
  text: {
    color: 'white',
  },
  image: {
    width: windowWidth, // Chiếm 80% chiều rộng màn hình
    height: 80, // Chiều cao 20px
  },
  music: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 100,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
