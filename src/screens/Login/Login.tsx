import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { styles } from './Login.styles';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';
import axios from 'axios';

interface LoginData {
  username: string;
  hashed_password: string;
}

export function Login() {
  const [username, setUsername] = useState('');
  const [hashed_password, setHashed_password] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    console.log('username: ', username);
    console.log('hashed_password: ', hashed_password);
    const loginData: LoginData = {
      username: username,
      hashed_password: hashed_password,
    };
    try {
      console.log('như shit');
      const response = await axios.post<any, LoginData>(
        'http://localhost:8080/api/users/login',
        loginData,
      );

      console.log('check response', response);

      console.log('Đăng nhập thành công:');
      Alert.alert('Success', 'Login successful');
    } catch (error) {
      console.error('Đăng nhập không thành công:');
      Alert.alert('Error', 'Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        autoCapitalize="none"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          onChangeText={(text) => setHashed_password(text)}
          value={hashed_password}
          secureTextEntry={!showPassword}
        />
        {showPassword ? (
          <EyeIcon
            size={20}
            color="grey"
            onPress={() => setShowPassword(!showPassword)}
          />
        ) : (
          <EyeSlashIcon
            size={20}
            color="grey"
            onPress={() => setShowPassword(!showPassword)}
          />
        )}
      </View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
