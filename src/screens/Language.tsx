import { RootStackParamList } from '@/common/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { CheckCircleIcon } from 'react-native-heroicons/solid';

type Props = NativeStackScreenProps<RootStackParamList, 'Language'>;
const Language: React.FC<Props> = ({ navigation: { goBack } }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.backButtonContainer}>
          <Text style={styles.title} onPress={() => goBack()}>
            &lt;
          </Text>
        </View>
        <Text style={styles.title}>Language</Text>
        <View style={styles.placeholder} />
      </View>

      <TouchableOpacity>
        <View style={styles.imageContent}>
          <Text style={styles.textCoach}>Tiếng Việt</Text>

          <View style={styles.imageContainer}></View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.imageContent}>
          <Text style={styles.textCoach}>English</Text>

          <View style={styles.imageContainer}>
            <CheckCircleIcon color="white" fill="blue" size={20} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Language;

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
  textCoach: {
    fontSize: 12,
    color: 'white',
    marginLeft: 20,
  },
  imageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'grey',
    height: 50,
  },

  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },

  imageArrow: {
    fontSize: 14,
    marginLeft: 10,
    color: 'grey',
  },
  imageText: {
    marginLeft: 5,
    fontSize: 10,
    color: 'white',
  },
  pencilIcon: {
    marginLeft: 10,
  },
});
