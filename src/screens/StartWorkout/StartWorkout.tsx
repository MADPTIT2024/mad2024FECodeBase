import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './StartWorkout.styles';
import Screen from '@/components/Screen/Screen';
import axios from 'axios';
import { NETWORK } from '../../data/fitness';
import { ExerciseElement } from '@/components/ExerciseElement/ExerciseElement';

export function StartWorkout({ navigation }: { navigation: any }) {
  const route = useRoute();
  const { item } = route.params;
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isResting, setIsResting] = useState(false);

  const handleFinishExercise = () => {
    if (currentExerciseIndex < item.exerciseCollectionDetails.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      console.log('Bạn đã hoàn thành tất cả các bài tập');
    }
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < item.exerciseCollectionDetails.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setIsResting(false);
    }
  };

  const handleSkipRest = () => {
    setIsResting(false);
    handleNextExercise();
  };

  const handleExtendRest = () => {
    setIsResting(false);
    setCurrentExerciseIndex(currentExerciseIndex + 1);
  };

  return (
    <Screen style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {isResting ? (
          <RestScreen onSkip={handleSkipRest} onExtend={handleExtendRest} />
        ) : (
          <ExerciseElement
            exercise={item.exerciseCollectionDetails[currentExerciseIndex]}
            timer={item.exerciseCollectionDetails[currentExerciseIndex].timer}
            onFinish={handleFinishExercise}
            onNext={handleNextExercise}
          />
        )}
      </View>
    </Screen>
  );
}
