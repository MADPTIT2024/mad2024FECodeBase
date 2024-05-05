import React from 'react';
import { View } from 'react-native';
import StoryListScreen from './StoryListScreen';
import Screen from '@/components/Screen/Screen';

const Story = () => {
  // Giả sử stories là danh sách các câu chuyện bạn nhận từ API
  const stories = [
    { id: 1, title: 'Story 1', content: 'Content of story 1' },
    { id: 2, title: 'Story 2', content: 'Content of story 2' },
    { id: 3, title: 'Story 3', content: 'Content of story 3' },
    // Thêm các câu chuyện khác tương tự ở đây
  ];

  return (
    <Screen style={{ flex: 1 }}>
      <StoryListScreen stories={stories} />
    </Screen>
  );
};

export default Story;
