import React, { useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import StoryScreen from './StoryScreen';

const StoryListScreen = ({ stories }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const handleNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else {
      // Nếu bạn muốn quay lại màn hình đầu tiên khi đã đọc hết danh sách câu chuyện,
      // bạn có thể đặt `setCurrentStoryIndex(0)` ở đây.
      console.log('Bạn đã đọc hết câu chuyện');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={[stories[currentStoryIndex]]}
        renderItem={({ item }) => (
          <StoryScreen story={item} onNext={handleNextStory} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default StoryListScreen;
