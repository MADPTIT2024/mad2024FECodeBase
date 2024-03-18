import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from './CalendarScreen.styles';
import Colors from '@/constants/Colors';
import { useState } from 'react';

export function CalendarScreen() {
  const [activeTab, setActiveTab] = useState(0);

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
  };

  // Calendar Tab
  const CalendarTab = () => {
    return <Text style={{ color: Colors.text }}>Calendar</Text>;
  };

  // Data Graph Tab
  const DataTab = () => {
    return <Text style={{ color: Colors.text }}>Data</Text>;
  };

  const renderSelectedTab = () => {
    if (activeTab === 0) {
      return <CalendarTab />;
    } else {
      return <DataTab />;
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
      <View style={styles.tabContent}>{renderSelectedTab()}</View>
    </View>
  );
}
