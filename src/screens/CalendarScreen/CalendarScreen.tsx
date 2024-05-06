import { View, Text, Dimensions } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { styles } from './CalendarScreen.styles';
import Colors from '@/constants/Colors';
import React, { useEffect, useState } from 'react';
import FontSize from '@/constants/FontSize';
import HistoryCard from '@/components/HistoryCard/HistoryCard';
import { histories } from '@/data';
import axios from 'axios';

import { ScrollView } from 'react-native-gesture-handler';
import { NETWORK } from '@/data/fitness';
import { useFocusEffect } from '@react-navigation/native';

export function CalendarScreen() {
  const [selected, setSelected] = useState('');
  const [records, setRecords] = useState(0); // Khởi tạo records với giá trị ban đầu là 0

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  // Hàm để gọi API và cập nhật giá trị records
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://${NETWORK}:8080/api/logs/count`);

      setRecords(response.data);

    } catch (error) {
      console.error('Error fetching logs:', error);
    }
  };

  const OverallTab = () => {
    return (
      <View style={styles.panelContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.columnHeader}>Records</Text>
          <Text style={[styles.columnHeader]}>Kcal</Text>
          <Text style={styles.columnHeader}>Time(mins)</Text>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCell, styles.borderRight]}>
            <Text style={styles.columnCell}>{records}</Text>
          </View>
          <View style={[styles.tableCell, styles.borderRight]}>
            <Text style={styles.columnCell}>2</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.columnCell}>3</Text>
          </View>
        </View>
      </View>
    );
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
            dotColor: Colors.primary,
            selectedDotColor: Colors.text,
            arrowColor: Colors.text,
            monthTextColor: Colors.text,
            // textDayFontFamily: 'monospace',
            // textMonthFontFamily: 'monospace',
            // textDayHeaderFontFamily: 'monospace',
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
              fontSize: FontSize.xl,
              fontWeight: 'bold',
            }}
          >
            History
          </Text>
          {histories.map((history, index) => (
            <HistoryCard key={index} history={history} />
          ))}
        </View>
      </View>
    );
  };

  return (
    <View>
      <ScrollView style={styles.scrollView}>
        <OverallTab></OverallTab>
        <View style={styles.tabContent}>
          <CalendarTab></CalendarTab>
        </View>
      </ScrollView>
    </View>
  );
}
