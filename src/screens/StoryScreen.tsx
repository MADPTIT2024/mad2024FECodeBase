import React from 'react';
import { View, Text, Button } from 'react-native';

const StoryScreen = ({ story, onNext }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white' }}>{story.title}</Text>
      <Text>{story.content}</Text>
      <Button title="Next" onPress={onNext} />
    </View>
  );
};

export default StoryScreen;
