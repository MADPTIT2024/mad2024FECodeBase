import { RootStackParamList } from '@/common/types';
import Button from '@/components/Button/Button';
import Screen from '@/components/Screen/Screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Favorites'>;
const Favorites: React.FC<Props> = ({ navigation: { goBack } }) => {
  const [activeItem, setActiveItem] = useState<string>('Item1'); // State lưu trạng thái của item được chọn

  // Hàm xử lý khi nhấn vào item
  const handleItemPress = (item: string) => {
    setActiveItem(item); // Đặt item được chọn thành activeItem
    // Thực hiện các hành động khác nếu cần
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.backButtonContainer}>
          <Text style={styles.title} onPress={() => goBack()}>
            &lt;
          </Text>
        </View>
        <Text style={styles.title}>My</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Dưới thanh header */}
      <View style={styles.bottomMenu}>
        {/* Item 1 */}
        <TouchableOpacity
          style={[styles.menuItem, activeItem === 'Item1' && styles.activeItem]} // Nếu item được chọn, thêm hiệu ứng active
          onPress={() => handleItemPress('Item1')}
        >
          <Text style={styles.menuText}>History</Text>
        </TouchableOpacity>

        {/* Item 2 */}
        <TouchableOpacity
          style={[styles.menuItem, activeItem === 'Item2' && styles.activeItem]}
          onPress={() => handleItemPress('Item2')}
        >
          <Text style={styles.menuText}>Recent</Text>
        </TouchableOpacity>

        {/* Item 3 */}
        <TouchableOpacity
          style={[styles.menuItem, activeItem === 'Item3' && styles.activeItem]}
          onPress={() => handleItemPress('Item3')}
        >
          <Text style={styles.menuText}>Favorite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Favorites;

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
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'black',
  },
  menuItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent', // Màu đuôi mặc định
  },
  activeItem: {
    borderBottomColor: 'blue', // Màu đuôi khi item được chọn
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
