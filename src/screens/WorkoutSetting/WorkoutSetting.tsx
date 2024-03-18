import { styles } from './WorkoutSetting.styles';
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  Animated,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';
// @ts-ignore
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = width * 0.7;

const data = [
  { id: 1, image: require('../../assets/workout1.webp') },
  { id: 2, image: require('../../assets/workout1.webp') },
  { id: 3, image: require('../../assets/workout1.webp') },
];

export function WorkoutSetting() {
  const navigation = useNavigation();

  const [volumeMusic, setVolumeMusic] = useState(0.5);
  const [volumeVoice, setVolumeVoice] = useState(0.5);
  const [volumeSound, setVolumeSound] = useState(0.5);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch1 = () => {
    setIsEnabled1((previousState) => !previousState);
  };

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item }: { item: { id: number; image: any } }) => {
    return (
      <View style={styles.itemContainer}>
        <Animated.View
          style={[
            styles.item,
            {
              transform: [
                {
                  scale: scrollX.interpolate({
                    inputRange: [
                      (item.id - 1) * ITEM_WIDTH,
                      item.id * ITEM_WIDTH,
                    ],
                    outputRange: [0.8, 1],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        >
          <Image
            source={item.image}
            style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }} // Thay ITEM_HEIGHT bằng chiều cao mong muốn của hình ảnh
            resizeMode="cover"
          />
        </Animated.View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={styles.headerArrow}
          onPress={() => navigation.navigate('Personal')}
        >
          &lt;
        </Text>
      </View>
      <Animated.ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.textWorkout}>Workout Settings</Text>
        <View style={styles.coachVideo}>
          <Text style={styles.textCoach}>Coach Video</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageCoach}
              source={require('../../assets/workout1.webp')}
            />
            <Text style={styles.imageArrow}>&gt;</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
          <View style={styles.imageContent}>
            <Text style={styles.textCoach}>Music</Text>

            <View style={styles.imageContainer}>
              <Image
                style={styles.imageCoach}
                source={require('../../assets/workout1.webp')}
              />
              <Text style={styles.imageText}>Peaceful Time</Text>
              <Text style={styles.imageArrow}>&gt;</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.volumeContainer}>
          <FontAwesome5 name="volume-off" size={16} color="gray" />
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            value={volumeMusic}
            onValueChange={setVolumeMusic}
            minimumTrackTintColor="#007bff"
            maximumTrackTintColor="#000000"
            thumbTintColor="#007bff"
          />
          <FontAwesome5 name="volume-up" size={16} color="gray" />
        </View>

        <View style={styles.imageContent}>
          <Text style={styles.textCoach}>Voice Guide</Text>

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

        <View style={styles.volumeContainer}>
          <FontAwesome5 name="volume-off" size={16} color="gray" />
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            value={volumeVoice}
            onValueChange={setVolumeVoice}
            minimumTrackTintColor="#007bff"
            maximumTrackTintColor="#000000"
            thumbTintColor="#007bff"
          />
          <FontAwesome5 name="volume-up" size={16} color="gray" />
        </View>

        <View style={styles.imageContent}>
          <Text style={styles.textCoach}>Coach Voice</Text>

          <View style={styles.imageContainer}>
            <Text style={styles.imageText}>Thomas</Text>
          </View>
        </View>

        <Animated.FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          bounces={false}
        />

        <View style={styles.imageContent}>
          <Text style={styles.textCoach}>Sound Effect</Text>

          <View>
            <Switch
              trackColor={{ false: '#767577', true: '#0066FF' }}
              thumbColor={isEnabled1 ? '#0066FF' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
        </View>

        <View style={styles.volumeContainer}>
          <FontAwesome5 name="volume-off" size={16} color="gray" />
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            value={volumeSound}
            onValueChange={setVolumeSound}
            minimumTrackTintColor="#007bff"
            maximumTrackTintColor="#000000"
            thumbTintColor="#007bff"
          />
          <FontAwesome5 name="volume-up" size={16} color="gray" />
        </View>
        <Text>Reminder</Text>
        <Text>Reminder</Text>
        <Text>Reminder</Text>
        <Text>Reminder</Text>
        <Text>Reminder</Text>
      </Animated.ScrollView>
    </View>
  );
}
