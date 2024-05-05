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
import { styles } from './DoWorkout.styles';
import Screen from '@/components/Screen/Screen';
import axios from 'axios';
import { NETWORK } from '../../data/fitness';

export function DoWorkout({ navigation }: { navigation: any }) {
  const route = useRoute();
  const { item } = route.params;
  console.log(item);
  console.log(JSON.stringify(item));

  const handleStartWorkout = () => {
    navigation.navigate('StartWorkout', { item: item });
  };
  return (
    <Screen style={{ flex: 1 }}>
      {/* <SafeAreaView style={styles.container}> */}
      <View style={{ flex: 1 }}>
        <View style={styles.wrapper}>
          <View
            style={{
              marginTop: 30,
              gap: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: 30,
            }}
          >
            {item?.exerciseCollectionDetails.map((item, index) => (
              <Pressable
                key={index}
                style={styles.exerciseComponent}
                // onPress={() => openModalWithExercise(item)}
              >
                <View style={styles.exerciseInfo}>
                  <Image
                    style={{ width: 70, height: 70 }}
                    source={{ uri: item.exercise.animation }}
                  />

                  <View style={{ marginLeft: 10 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        width: 170,
                        color: 'white',
                      }}
                    >
                      {item.exercise.name}
                    </Text>

                    <Text
                      style={{ marginTop: 4, fontSize: 13, color: '#e9a98e' }}
                    >
                      x{item.rep}
                    </Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
          <Pressable onPress={() => handleStartWorkout()}>
            <Text style={{ fontWeight: '900', color: 'white' }}>START</Text>
          </Pressable>
        </View>
      </View>
      {/* </SafeAreaView> */}
    </Screen>
  );
}
