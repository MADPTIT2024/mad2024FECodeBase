import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { styles } from './CalendarScreen.styles';
import Colors from '@/constants/Colors';
import { useState } from 'react';
import FontSize from '@/constants/FontSize';
import HistoryCard from '@/components/HistoryCard/HistoryCard';
import { histories } from '@/data';
import { BarChart, LineChart } from 'react-native-chart-kit';
import LinearGradient from 'react-native-linear-gradient';
import { ChatBubbleBottomCenterIcon } from 'react-native-heroicons/solid';

const { height, width } = Dimensions.get('window');

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
        <Text style={styles.chartTitle}>Calories burned, estimated (Kcal)</Text>

        <BarChart
          data={data}
          width={Dimensions.get('window').width}
          height={200}
          yAxisLabel=""
          yAxisSuffix=""
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
      <View>
        <TouchableOpacity
          style={{
            height: height * 0.3,
            width: width * 0.95,
            paddingHorizontal: 10,
            backgroundColor: Colors.primary,
            borderRadius: 10,
            marginBottom: 20,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignContent: 'center',
          }}
        >
          <Text style={{ marginLeft: 10, fontSize: 18 }}>BMI</Text>
          <View style={{ flexDirection: 'column' }}>
            <View
              style={{ width: 50, backgroundColor: '#fff', borderRadius: 5 }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: '#000',
                  fontSize: 16,
                }}
              >
                {averageBMI}
              </Text>
            </View>

            <TouchableOpacity
              style={{ marginLeft: 10, height: 30, flexDirection: 'row' }}
            >
              <View style={{ width: width * 0.82 * 0.08 }}>
                <View
                  style={{
                    height: 15,
                    backgroundColor: 'blue',
                    borderRadius: 10,
                    marginRight: 2,
                  }}
                ></View>
                <Text>15</Text>
              </View>
              <View style={{ width: width * 0.82 * 0.12 }}>
                <View
                  style={{
                    height: 15,
                    backgroundColor: 'blue',
                    borderRadius: 10,
                    marginRight: 2,
                  }}
                ></View>
                <Text>16</Text>
              </View>
              <View style={{ width: width * 0.82 * 0.26 }}>
                <View
                  style={{
                    height: 15,
                    backgroundColor: 'blue',
                    borderRadius: 10,
                    marginRight: 2,
                  }}
                ></View>
                <Text>18.5</Text>
              </View>
              <View style={{ width: width * 0.82 * 0.2 }}>
                <View
                  style={{
                    height: 15,
                    backgroundColor: 'blue',
                    borderRadius: 10,
                    marginRight: 2,
                  }}
                ></View>
                <Text>25</Text>
              </View>
              <View style={{ width: width * 0.82 * 0.2 }}>
                <View
                  style={{
                    height: 15,
                    backgroundColor: 'blue',
                    borderRadius: 10,
                    marginRight: 2,
                  }}
                ></View>
                <Text>30</Text>
              </View>
              <View style={{ width: width * 0.82 * 0.2 }}>
                <View
                  style={{
                    height: 15,
                    backgroundColor: 'blue',
                    borderRadius: 10,
                    marginRight: 2,
                  }}
                ></View>
                <Text>35</Text>
              </View>
              <Text style={{ marginTop: 15, marginLeft: -18 }}>40</Text>
            </TouchableOpacity>
          </View>

          {/* 15 16 18.5 25 30 35 40 */}

          <Text style={{ marginLeft: 10 }}>ABC</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSelectedTab = () => {
    if (activeTab === 0) {
      return <CalendarTab />;
    } else {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <DataTab />
          <BMIChart />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View>
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
      <ScrollView>
        <View style={styles.tabContent}>{renderSelectedTab()}</View>
      </ScrollView>
    </View>
  );
}
