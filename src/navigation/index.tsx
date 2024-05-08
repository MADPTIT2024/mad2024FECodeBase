import { AppNavigator } from '@/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';
import Colors from '@/constants/Colors';
import { Login } from '@/screens';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function RootNavigator() {
  let scheme: NonNullable<ColorSchemeName> = useColorScheme() || 'light';

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.background,
    },
  };

  const [login, setLogin] = useState(false);
  const [userID, setUserID] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserID = async () => {
      const storedUserID = await AsyncStorage.getItem('userID');
      setUserID(storedUserID);
    };

    fetchUserID();
  }, []);

  useEffect(() => {
    if (userID) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [userID]);

  function handleLoginRoot(loggedIn: boolean) {
    console.log('User logged in:', loggedIn);
    setLogin(loggedIn);
  }

  return (
    <NavigationContainer theme={theme}>
      {login ? <AppNavigator /> : <Login loginRoot={handleLoginRoot} />}
    </NavigationContainer>
  );
}
