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
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { styles } from './DoWorkout.styles';
import Screen from '@/components/Screen/Screen';
import axios from 'axios';
import { NETWORK } from '../../data/fitness';
import { StackNavigationProp } from '@react-navigation/stack';

// Định nghĩa kiểu RouteParams cho route.params
type RouteParams = {
  StartWorkout: {
    item: any; // Kiểu của item phụ thuộc vào cấu trúc của item trong ứng dụng của bạn
  };
};

type Props = {
  navigation: StackNavigationProp<RouteParams>;
};

export function DoWorkout({ navigation }: Props) {
  const route = useRoute<RouteProp<RouteParams, 'StartWorkout'>>();
  const { item } = route.params;

  const handleStartWorkout = () => {
    navigation.navigate('StartWorkout', { item: item });
  };

  return (
    <Screen style={{ flex: 1 }}>
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
            {item?.exerciseCollectionDetails.map(
              (exerciseItem: any, index: number) => (
                <Pressable
                  key={index}
                  style={styles.exerciseComponent}
                  // onPress={() => openModalWithExercise(item)}
                >
                  <View style={styles.exerciseInfo}>
                    <Image
                      style={{ width: 70, height: 70 }}
                      source={{ uri: exerciseItem.exercise.animation }}
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
                        {exerciseItem.exercise.name}
                      </Text>

                      <Text
                        style={{ marginTop: 4, fontSize: 13, color: '#e9a98e' }}
                      >
                        x{exerciseItem.rep}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              ),
            )}
          </View>
          <Pressable onPress={() => handleStartWorkout()}>
            <Text style={{ fontWeight: '900', color: 'white' }}>START</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}
