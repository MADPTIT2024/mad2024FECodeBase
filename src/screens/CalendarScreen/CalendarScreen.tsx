import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { styles } from './CalendarScreen.styles';
import Colors from '@/constants/Colors';
import { useState } from 'react';
import FontSize from '@/constants/FontSize';
import HistoryCard from '@/components/HistoryCard/HistoryCard';

export function CalendarScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const [selected, setSelected] = useState('');

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
    return (
      <View>
        <Calendar
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              selectedColor: 'blue',
              disableTouchEvent: true,
            },
          }}
          theme={{
            calendarBackground: Colors.primary,
            textSectionTitleColor: Colors.text,
            selectedDayBackgroundColor: Colors.primary,
            selectedDayTextColor: Colors.text,
            todayTextColor: Colors.accent,
            dayTextColor: Colors.text,
            textDisabledColor: Colors.text,
            dotColor: Colors.primary,
            selectedDotColor: Colors.text,
            arrowColor: Colors.text,
            monthTextColor: Colors.text,
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          style={styles.calendarStyle}
        />
        <View style={styles.historyContainer}>
          <Text
            style={{
              color: Colors.text,
              fontSize: FontSize.lg,
              fontWeight: 'bold',
            }}
          >
            History
          </Text>
          <HistoryCard
            history={{
              date: '2021-06-01',
              workout: 'Workout 1',
              duration: '1 hour',
              rating: 5,
            }}
            onPress={() => {}}
          />
        </View>
      </View>
    );
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
