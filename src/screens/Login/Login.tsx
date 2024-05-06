import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  TextInputBase,
} from 'react-native';
import { styles } from './Login.styles';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';
import axios from 'axios';
import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
const { height, width } = Dimensions.get('window');

interface LoginProps {
  loginRoot: (loggedIn: boolean) => void;
}

interface LoginData {
  username: string;
  hashed_password: string;
}

interface RegisterData {
  username: string;
  full_name: string;
  hashed_password: string;
  user_level: string;
  weight: Float;
  height: Float;
  role: {
    id: any;
  };
  userCollectionDetails: [];
  _active: boolean;
}

export function Login({ loginRoot }: LoginProps) {
  const [username, setUsername] = useState('');
  const [hashed_password, setHashed_password] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [usernameRegister, setUsernameRegister] = useState('');
  const [hashed_passwordRegister, setHashed_passwordRegister] = useState('');
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  const [enterAgainPassword, setEnterAgainPassword] = useState('');
  const [showAgainPassword, setAgainShowPassword] = useState(false);

  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  const handleRegisterUser = () => {
    setLogin(false);
    setRegister(true);
    setUsernameRegister('');
    setEnterAgainPassword('');
    setHashed_passwordRegister('');
    setAgainShowPassword(false);
    setShowPasswordRegister(false);
  };

  const handleLoginUser = () => {
    setLogin(true);
    setRegister(false);
    setHashed_password('');
    setUsername('');
    setShowPassword(false);
  };

  const handleLogin = async () => {
    console.log('username: ', username);
    console.log('hashed_password: ', hashed_password);

    // registerForPushNotificationsAsync();

    const loginData: LoginData = {
      username: username,
      hashed_password: hashed_password,
    };

    try {
      const response: any = await axios.post<any, LoginData>(
        'http://192.168.23.6:8080/api/users/login',
        loginData,
      );
      console.log('check response', response);
      const id: number = response.data.id;
      console.log('User ID:', id);
      loginRoot(true);
      console.log('Đăng nhập thành công:');
      Alert.alert('Success', 'Login successful');
    } catch (error) {
      console.error('Đăng nhập không thành công:');
      Alert.alert('Error', 'Login failed');
    }
  };

  const handleRegister = async () => {
    console.log('username: ', usernameRegister);
    console.log('hashed_password: ', hashed_passwordRegister);
    console.log('enterAgainPassword: ', enterAgainPassword);

    // registerForPushNotificationsAsync();

    const registerData: RegisterData = {
      username: usernameRegister,
      full_name: 'User',
      hashed_password: hashed_passwordRegister,
      user_level: 'User',
      weight: 70.5,
      height: 170,
      role: {
        id: 1,
      },
      userCollectionDetails: [],
      _active: true,
    };

    // if (hashed_passwordRegister !== enterAgainPassword) {
    //   console.log('Nhập lại sai mật khẩu');
    //   Alert.alert('Error', 'Enter incorrect password');
    // }

    try {
      const response: any = await axios.post<any, RegisterData>(
        'http://192.168.23.6:8080/api/users',
        registerData,
      );
      console.log('check response', response);

      console.log('Đăng kí thành thành công:');
      Alert.alert('Success', 'Register successful');
    } catch (error) {
      console.error('Đăng kí không thành công:');
      Alert.alert('Error', 'Register failed');
    }
  };

  const Login = () => {
    return (
      <View style={styles.formContainer}>
        <View style={styles.formText}>
          <Text style={styles.textLogin}>Login</Text>
        </View>
        <View
          style={{
            height: height * 0.25,
            marginTop: 50,
          }}
        >
          <View>
            <Text style={{ marginBottom: 15 }}>Username</Text>

            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={(text) => setUsername(text)}
              value={username}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.passwordContainer}>
            <Text style={{ marginBottom: 15, marginTop: 15 }}>Password</Text>
            <View style={styles.inputPasswordContainer}>
              <TextInput
                style={styles.inputPassword}
                placeholder="Password"
                onChangeText={(text) => setHashed_password(text)}
                value={hashed_password}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon size={20} color="grey" />
                ) : (
                  <EyeSlashIcon size={20} color="grey" />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.formButtonText}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View style={styles.formButton}>
              <Button color={'white'} title="Login" onPress={handleLogin} />
            </View>
          </View>
          <Text
            style={{ textAlign: 'center', marginBottom: 15, marginTop: 15 }}
            onPress={handleRegisterUser}
          >
            Not have an account?Register now!
          </Text>
        </View>
      </View>
    );
  };

  const Register = () => {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.textLogin}>Register</Text>
        <View
          style={{
            height: height * 0.3,
            marginTop: 30,
          }}
        >
          <View style={{ flexDirection: 'column' }}>
            <View>
              <Text style={{ marginBottom: 15 }}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => setUsernameRegister(text)}
                value={usernameRegister}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.passwordRegisterContainer}>
              <Text style={{ marginBottom: 15 }}>Password</Text>
              <View style={styles.inputPasswordContainer}>
                <TextInput
                  style={styles.inputPassword}
                  placeholder="Password"
                  onChangeText={(text) => setHashed_passwordRegister(text)}
                  value={hashed_passwordRegister}
                  secureTextEntry={!showPasswordRegister}
                />
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() => setShowPasswordRegister(!showPasswordRegister)}
                >
                  {showPasswordRegister ? (
                    <EyeIcon size={20} color="grey" />
                  ) : (
                    <EyeSlashIcon size={20} color="grey" />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.againPasswordContainer}>
              <Text style={{ marginBottom: 15 }}>Enter the password</Text>
              <View style={styles.inputPasswordContainer}>
                <TextInput
                  style={styles.inputPassword}
                  placeholder="Enter the password"
                  onChangeText={(text) => setEnterAgainPassword(text)}
                  value={enterAgainPassword}
                  secureTextEntry={!showAgainPassword}
                />
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() => setAgainShowPassword(!showAgainPassword)}
                >
                  {showAgainPassword ? (
                    <EyeIcon size={20} color="grey" />
                  ) : (
                    <EyeSlashIcon size={20} color="grey" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.formButtonText, { marginTop: 15 }]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View style={styles.formButton}>
              <Button
                color={'white'}
                title="Register"
                onPress={handleRegister}
              />
            </View>
          </View>
          <Text
            style={{ textAlign: 'center', marginBottom: 15, marginTop: 15 }}
            onPress={handleLoginUser}
          >
            Already have an account?Login now!
          </Text>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/images/workouts/login.jpg')}
      >
        <View style={styles.overlay}>
          {login && !register && <Login />}
          {!login && register && <Register />}
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
