import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { styles } from './CalendarScreen.styles';
import Colors from '@/constants/Colors';
import { useState } from 'react';
import FontSize from '@/constants/FontSize';
import HistoryCard from '@/components/HistoryCard/HistoryCard';
import { BarChart, LineChart } from 'react-native-chart-kit';
import LinearGradient from 'react-native-linear-gradient';

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

  // TODO: Data Graph Tab
  const DataTab = () => {
    const data = {
      labels: ['1', '2', '3', '4', '5', '6', '7', ''],
      datasets: [
        {
          data: [100, 150, 180, 120, 190, 170, 200, 0],
          color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
        },
      ],
    };

    return (
      <View style={styles.dataTabContainer}>
        <Text style={styles.chartTitle}>
          Calories burned, estimated (Kacal)
        </Text>

        <BarChart
          data={data}
          width={Dimensions.get('window').width}
          height={200}
          chartConfig={{
            backgroundColor: Colors.primary,
            backgroundGradientFrom: Colors.primary,
            backgroundGradientTo: Colors.primary,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
              marginRight: 5,
            },
          }}
          yAxisInterval={50}
          fromZero
          withHorizontalLabels={true}
          showBarTops={false}
        />
      </View>
    );
  };

  const BMIChart = () => {
    // Dữ liệu trung bình BMI
    const averageBMI = 22; // Giả sử trung bình BMI là 22

    return (
      <View style={styles.bmiContainer}>
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>BMI</Text>
          <LineChart
            data={{
              labels: ['0', '40'], // Đơn vị trục hoành
              datasets: [
                {
                  data: [averageBMI, averageBMI], // Dữ liệu trung bình BMI cho mỗi điểm trên đoạn thẳng
                },
              ],
            }}
            width={Dimensions.get('window').width - 20} // Độ rộng của biểu đồ
            height={10} // Độ cao của biểu đồ
            chartConfig={{
              backgroundColor: Colors.primary,
              backgroundGradientFrom: Colors.primary,
              backgroundGradientTo: Colors.primary,
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier // Biểu đồ là đường cong mượt
            yAxisSuffix=" BMI" // Hậu tố của nhãn trục Y
            fromZero // Bắt đầu trục Y từ 0
            withHorizontalLines={true} // Hiển thị các đường kẻ ngang
            withVerticalLines={false} // Ẩn các đường kẻ dọc
            style={styles.chartStyle}
          />
        </View>
      </View>
    );
  };

  const renderSelectedTab = () => {
    if (activeTab === 0) {
      return <CalendarTab />;
    } else {
      return (
        <View>
          <DataTab />
          <BMIChart />
        </View>
      );
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
