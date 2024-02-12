import { AppNavigator } from '@/navigation/AppNavigator';
import { theme } from '@/theme';
import { NavigationContainer } from '@react-navigation/native';
import { ColorSchemeName, useColorScheme } from 'react-native';

export function RootNavigator() {
  const scheme: NonNullable<ColorSchemeName> = useColorScheme() || 'light';

  return (
    <NavigationContainer theme={theme[scheme]}>
      <AppNavigator />
    </NavigationContainer>
  );
}
