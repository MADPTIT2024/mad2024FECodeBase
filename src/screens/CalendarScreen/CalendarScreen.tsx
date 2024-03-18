import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from './CalendarScreen.styles';
import Colors from '@/constants/Colors';
import { useState } from 'react';

const screenWidth = Dimensions.get('screen').width;

export function CalendarScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabChoose, setTabChoose] = useState('');

  const TABS = [
    {
      title: 'Calendar',
      color: activeTab === 0 ? 'blue' : Colors.primary,
    },
    {
      title: 'Data',
      color: activeTab === 1 ? 'blue' : Colors.primary,
    },
  ];

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    setTabChoose(TABS[index].title);

    if (tabChoose === 'Calendar') {
      console.log('Calendar');
    } else {
      console.log('Data');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerNav}>
        {TABS.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, { backgroundColor: tab.color }]}
            onPress={() => handleTabPress(index)}
          >
            <View style={styles.buttonText}>
              <Text style={styles.text}>{tab.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
