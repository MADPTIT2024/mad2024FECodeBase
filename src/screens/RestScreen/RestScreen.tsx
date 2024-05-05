import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

type RestScreenProps = {
  onSkip: () => void;
  onNext: () => void;
};

export function RestScreen({ onSkip, onNext }: RestScreenProps) {
  const [countdown, setCountdown] = useState(10);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCounting) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 0) {
            clearInterval(interval);
            onNext(); // Gọi hàm onNext khi countdown đếm ngược về 0
            return 10;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isCounting, onNext]);

  const handleToggleCounting = () => {
    setIsCounting((prevIsCounting) => !prevIsCounting);
  };

  const handleExtendRest = () => {
    setCountdown((prevCountdown) => prevCountdown + 20);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Rest Screen</Text>
      <Text style={{ color: 'white' }}>Time left: {countdown} seconds</Text>
      <Button
        title={isCounting ? 'Pause' : 'Resume'}
        onPress={handleToggleCounting}
      />
      <Button title="Skip Rest" onPress={onSkip} />
      <Button title="Extend Rest (+20s)" onPress={handleExtendRest} />
    </View>
  );
}
