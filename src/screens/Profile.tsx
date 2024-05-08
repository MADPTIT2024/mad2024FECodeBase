import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import { PencilIcon } from 'react-native-heroicons/solid';
import { RootStackParamList } from '@/common/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import IconButton from '@/components/IconButton/IconButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NETWORK } from '@/data/fitness';
import axios from 'axios';

interface FullName {
  full_name: string;
}

interface Password {
  old_Password: string;
  new_Password: string;
}

const { height, width } = Dimensions.get('window');
type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;
const Profile: React.FC<Props> = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [isEditingFullName, setIsEditingFullName] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [newFullName, setNewFullName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let userID = await AsyncStorage.getItem('userID');
      console.log('check userID', userID);
      if (userID) {
        setUserId(userID);
      }
      if (userID) {
        try {
          const res = await axios.get(
            `http://${NETWORK}:8080/api/users/${userID}`,
          );
          console.log(res.data.full_name);
          setFullName(res.data.full_name);
          console.log(res.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, []);

  const handleFullnameEdit = () => {
    setIsEditingFullName(true);
  };

  const handlePasswordEdit = () => {
    setIsEditingPassword(true);
  };

  const handleCancelEdit = () => {
    setIsEditingFullName(false);
    setIsEditingPassword(false);
    setNewFullName('');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleDoneFullNameEdit = async () => {
    // Xử lý lưu trữ giá trị mới
    if (isEditingFullName) {
      if (!newFullName) {
        Alert.alert('Error', 'Please enter New FullName');
        return;
      }
      console.log('check newFullName', newFullName);
      console.log('check userId', userId);
      const newFullname: FullName = {
        full_name: newFullName,
      };
      if (userId) {
        try {
          const res1: any = await axios.put<any, FullName>(
            `http://${NETWORK}:8080/api/users/${userId}`,
            newFullname,
          );
          console.log(res1.data);
          setFullName(newFullName);
        } catch (error) {
          console.log(error);
        }
      }
    }
    setIsEditingFullName(false);
    setIsEditingPassword(false);
  };

  const handleDonePasswordEdit = async () => {
    // Xử lý lưu trữ giá trị mới
    if (isEditingPassword) {
      if (!oldPassword || !newPassword || !confirmPassword) {
        Alert.alert('Error', 'Please enter full field');
        return;
      }
      if (
        oldPassword.length < 6 ||
        newPassword.length < 6 ||
        confirmPassword.length < 6
      ) {
        Alert.alert(
          'Error',
          'Old Password, New Password and Enter Again Password must be at least 6 characters',
        );
        return;
      }
      if (newPassword === oldPassword) {
        Alert.alert('New Password does coincide with Old Password');
        return;
      }
      if (newPassword !== confirmPassword) {
        Alert.alert('Enter Again Password does not coincide with New Password');
        return;
      }
      console.log('check oldPassword', oldPassword);
      console.log('check newPassword', newPassword);
      console.log('check confirmPassword', confirmPassword);
      console.log('check userId', userId);
      const updatePassword: Password = {
        old_Password: oldPassword,
        new_Password: newPassword,
      };
      if (userId) {
        try {
          const res2: any = await axios.put<any, Password>(
            `http://${NETWORK}:8080/api/users/${userId}`,
            updatePassword,
          );
          console.log(res2.data);
        } catch (error) {
          console.log(error);
        }
      }
    }
    setIsEditingFullName(false);
    setIsEditingPassword(false);
  };

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

      {isEditingFullName && (
        <View style={[styles.formContainer, styles.centeredForm]}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleCancelEdit}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDoneFullNameEdit}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: height * 0.05,
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              height: height * 0.35,
            }}
          >
            <Text>Old FullName</Text>
            <TextInput style={styles.input} value={fullName} />
            <Text>New FullName</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter new full name"
              onChangeText={setNewFullName}
            />
          </View>
        </View>
      )}

      {isEditingPassword && (
        <View style={[styles.formContainer, styles.centeredForm]}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleCancelEdit}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDonePasswordEdit}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: height * 0.05,
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              height: height * 0.35,
            }}
          >
            <Text>Old Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter old password"
              secureTextEntry
              onChangeText={setOldPassword}
            />
            <Text>New Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter new password"
              secureTextEntry
              onChangeText={setNewPassword}
            />
            <Text>Enter Again Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm new password"
              secureTextEntry
              onChangeText={setConfirmPassword}
            />
          </View>
        </View>
      )}

      {!(isEditingFullName || isEditingPassword) && (
        <TouchableOpacity onPress={handleFullnameEdit}>
          <View style={styles.imageContent}>
            <Text style={styles.textCoach}>Full Name </Text>
            <Text style={styles.textCoach}>{fullName}</Text>
          </View>
        </TouchableOpacity>
      )}

      {!(isEditingFullName || isEditingPassword) && (
        <TouchableOpacity onPress={handlePasswordEdit}>
          <View style={styles.imageContent}>
            <Text style={styles.textCoach}>Password</Text>
            <PencilIcon
              color="white"
              fill="white"
              size={20}
              style={styles.pencilIcon}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    height: 60,
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
    marginBottom: 20,
  },
  textCoach: {
    fontSize: 15,
    color: 'white',
  },
  imageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'grey',
    height: 50,
  },
  pencilIcon: {
    marginLeft: 10,
  },
  formContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    width: width * 0.9,
    height: height * 0.45,
    borderRadius: 10,
    padding: 20,
  },
  centeredForm: {
    top: (height - height * 0.7) / 2,
    left: (width - width * 0.9) / 2,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
