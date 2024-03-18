import { RootStackParamList } from '@/common/types';
import Button from '@/components/Button/Button';
import Screen from '@/components/Screen/Screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Reminder'>;
const Reminder: React.FC<Props> = ({ navigation: { goBack } }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.backButtonContainer}>
          <Text style={styles.title} onPress={() => goBack()}>
            &lt;
          </Text>
        </View>
        <Text style={styles.title}>Reminder</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.content}>{/* Nội dung của màn hình Reminder */}</View>

      <TouchableOpacity style={styles.addButton} onPress={() => {}}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Reminder;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 60, // Đặt chiều cao của phần header
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  backButtonContainer: {
    width: 100, // Đặt chiều rộng của container nút quay lại
    alignContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  placeholder: {
    width: 100, // Đặt chiều rộng của container để giữ vị trí cho tiêu đề
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, // Đặt margin bottom cho khoảng cách giữa nút và dưới cùng của màn hình
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center', // Can giữa theo trục ngang
    justifyContent: 'center', // Can giữa theo trục dọc
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
