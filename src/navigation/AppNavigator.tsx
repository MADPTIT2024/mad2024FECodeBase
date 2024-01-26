import { About, Home } from "@/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

const Tab = createBottomTabNavigator()

export function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}