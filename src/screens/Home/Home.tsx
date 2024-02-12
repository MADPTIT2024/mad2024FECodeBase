import { View, Text } from 'react-native';
import { styles } from './Home.styles';
import { Card } from '@/components';

export function Home() {
  const cards = [
    {
      title: 'Top up',
      desc: 'Top up any number',
    },
  ];

  const renderCards = () => {
    return cards.map((card) => <Card key={card.title} title={card.title} desc={card.desc} />);
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {renderCards()}
    </View>
  );
}
