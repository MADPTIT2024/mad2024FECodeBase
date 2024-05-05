import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import Screen from '@/components/Screen/Screen';

interface ExerciseElementProps {
  exercise: {
    exercise: {
      name: string;
      animation: string;
    };
  };
  timer: number;
  onFinish: () => void;
  onNext: () => void;
}

export function ExerciseElement({
  exercise,
  timer,
  onFinish,
  onNext,
}: ExerciseElementProps) {
  const [countdown, setCountdown] = useState(timer);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCounting) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 0) {
            clearInterval(interval); // Dừng interval khi countdown = 0
            onFinish(); // Kết thúc bài tập khi countdown = 0
            return timer; // Đặt lại countdown thành timer của bài tập mới
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isCounting, timer, onFinish]);

  const handleToggleCounting = () => {
    setIsCounting((prevIsCounting) => !prevIsCounting);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white' }}>{exercise.exercise.name}</Text>
      <Image
        source={{ uri: exercise.exercise.animation }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ color: 'white' }}>Time left: {countdown} seconds</Text>
      <Button
        title={isCounting ? 'Pause' : 'Resume'}
        onPress={handleToggleCounting}
      />
      <Button title="Next Exercise" onPress={onNext} />
    </View>
  );
}
