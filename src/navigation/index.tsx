import { AppNavigator } from "@/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { ColorSchemeName, useColorScheme } from "react-native";
import { DefaultTheme } from "@react-navigation/native";
import Colors from "@/constants/Colors";
import MainStackNavigator from "./MainStackNavigator";

export function RootNavigator() {
  let scheme: NonNullable<ColorSchemeName> = useColorScheme() || "light";

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.background,
    },
  };
  
  return (
    <NavigationContainer theme={theme}>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
