import { AppNavigator } from '@/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';
import Colors from '@/constants/Colors';
import { Login } from '@/screens';
import { useState } from 'react';

export function RootNavigator() {
  let scheme: NonNullable<ColorSchemeName> = useColorScheme() || 'light';

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.background,
    },
  };

  const [loginRoot, setLoginRoot] = useState(false);

  function handleLoginRoot(loggedIn: boolean) {
    // Nhận giá trị `true` từ component con và thực hiện các thao tác cần thiết ở đây
    console.log('User logged in:', loggedIn);
    setLoginRoot(loggedIn);
  }

  return (
    <NavigationContainer theme={theme}>
      {!loginRoot && <Login loginRoot={handleLoginRoot} />}
      {loginRoot && <AppNavigator />}
    </NavigationContainer>
  );
}
