import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const RestScreen = ({ onSkip, onExtend }) => {
  const [countdown, setCountdown] = useState(10);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    let interval;
    if (isCounting) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 0) {
            clearInterval(interval);
            return 10;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isCounting]);

  const handleToggleCounting = () => {
    setIsCounting((prevIsCounting) => !prevIsCounting);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Rest Screen</Text>
      <Text>Time left: {countdown} seconds</Text>
      <Button
        title={isCounting ? 'Pause' : 'Resume'}
        onPress={handleToggleCounting}
      />
      <Button title="Skip Rest" onPress={onSkip} />
      <Button title="Extend Rest (+20s)" onPress={onExtend} />
    </View>
  );
};

export default RestScreen;
