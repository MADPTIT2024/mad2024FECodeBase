import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import fitness from '../../data/fitness';
import { styles } from './CustomWorkout.styles';
import { ClockIcon as ClockIconSolid } from 'react-native-heroicons/solid';
import { CheckIcon as CheckIconSolid } from 'react-native-heroicons/solid';
import { PlusIcon as PlusIconSolid } from 'react-native-heroicons/solid';
import { XMarkIcon as XMarkIconSolid } from 'react-native-heroicons/solid';
import Screen from '@/components/Screen/Screen';
import axios from 'axios';
import { NETWORK } from '../../data/fitness';

export function CustomWorkout({ navigation }: { navigation: any }) {
  // const FitnessData = fitness;
  console.log(NETWORK);
  const [customWorkout, setCustomWorkout] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://${NETWORK}:8080/api/exercise-collection`,
        );
        setCustomWorkout(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleCustomWorkoutPress = (item: any) => {
    navigation.navigate('DoWorkout', { item: item });
  };

  return (
    <Screen style={{ flex: 1 }}>
      {/* <SafeAreaView style={styles.container}> */}
      <View style={{ flex: 1 }}>
        <View style={styles.wrapper}>
          <View style={styles.discoverHeader}>
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back-outline"
              size={28}
              color="white"
            />

            <Text style={styles.headerText}>My training</Text>
          </View>

          <View style={styles.introductionContainer}>
            <View style={styles.introductionIcon}>
              <CheckIconSolid size={25} color="#f1ebdb" />
            </View>
            <Text style={styles.introductionText}>
              Customize your own training plans based on your preference
            </Text>
          </View>
          {customWorkout.length === 0 ? (
            <View style={styles.addExercises}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AddExercise')}
              >
                <View style={styles.addIcon}>
                  <PlusIconSolid size={25} color="#f1ebdb" />
                </View>
              </TouchableOpacity>
              <Text style={styles.addExerciseText}>Add exercises</Text>
            </View>
          ) : (
            <View style={[styles.addExercise]}>
              <View style={styles.customUserWorkout}>
                {customWorkout.map((item, index) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handleCustomWorkoutPress(item)}
                  >
                    <View key={index} style={styles.customUserWorkoutComponent}>
                      <View style={styles.customUserWorkoutInfo}>
                        <View style={styles.customUserWorkoutLeftIcon}>
                          <ClockIconSolid
                            color="#F8EDFF"
                            fill="#525CEB"
                            size={32}
                          />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: 'bold',
                              width: 170,
                              color: 'white',
                            }}
                          >
                            {item?.name}
                          </Text>

                          <Text
                            style={{
                              marginTop: 4,
                              fontSize: 13,
                              color: '#e9a98e',
                            }}
                          >
                            {item?.exerciseCollectionDetails.length} exercises
                          </Text>
                        </View>
                      </View>
                      <XMarkIconSolid
                        color="#F8EDFF"
                        fill="#F8EDFF"
                        size={22}
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('AddExercise')}
                style={styles.addExerciseIcon}
              >
                <View style={[styles.addIcon]}>
                  <PlusIconSolid size={25} color="#f1ebdb" />
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      {/* </SafeAreaView> */}
    </Screen>
  );
}
