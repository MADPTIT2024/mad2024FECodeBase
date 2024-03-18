import React from 'react';
import { Text } from 'react-native';

interface Props {
  history: any;
  onPress?: () => void;
}

const HistoryCard: React.FC<Props> = ({ history, onPress }) => {
  return <Text style={{ color: 'white' }}>This is a history card</Text>;
};

export default HistoryCard;
