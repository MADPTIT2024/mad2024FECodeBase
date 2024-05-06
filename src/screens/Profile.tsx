import { RootStackParamList } from '@/common/types';
import Button from '@/components/Button/Button';
import Screen from '@/components/Screen/Screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import { PencilIcon, ChevronLeftIcon } from 'react-native-heroicons/solid';
import Spacing from '@/constants/Spacing';
import IconButton from '@/components/IconButton/IconButton';

const { height, width } = Dimensions.get('window');
type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;
const Profile: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <IconButton
          onPress={() => navigation.navigate('Personality')}
          name="chevron-back"
        />
        <Text style={styles.textHeader}>Profile</Text>
        <Text />
      </View>

      <TouchableOpacity>
        <View style={styles.imageContent}>
          <Text style={styles.textCoach}>Music</Text>

          <View style={styles.imageContainer}>
            <Text style={styles.imageText}>Male</Text>
            <Text style={styles.imageArrow}>&gt;</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.imageContent}>
          <Text style={styles.textCoach}>Year of Birth</Text>

          <View style={styles.imageContainer}>
            <Text style={styles.imageText}>2002</Text>
            <PencilIcon
              color="white"
              fill="white"
              size={20}
              style={styles.pencilIcon}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.padding.base,
    marginTop: Spacing.margin.xlg,
    height: height * 0.1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  textHeader: {
    color: 'white',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, // Đặt margin bottom cho khoảng cách giữa nút và dưới cùng của màn hình
  },
  textCoach: {
    fontSize: 15,
    color: 'white',
  },
  imageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'grey',
    height: 50,
  },

  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
