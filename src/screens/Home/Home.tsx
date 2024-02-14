import { View, Text, FlatList, ScrollView, SectionList, SafeAreaView } from 'react-native';
import { styles } from './Home.styles';
import { Card } from '@/components';

export function Home() {
  const cards = [
    {
      title: 'Top up',
      desc: 'Top up any number',
    },
    {
      title: 'Top up',
      desc: 'Top up any number',
    },
  ];

  const renderCards = () => {
    return cards.map((card, index) => (
      <View key={index}>
        <View>
          <Card title={card.title} desc={card.desc} customeStyle={styles.cardStyle} />
        </View>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bigCardRender}>
        <Text>Home</Text>
        {renderCards()}
      </View>
    </ScrollView>
  );
}
