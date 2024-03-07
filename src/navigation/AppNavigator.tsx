import { About, Home } from '@/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from '@/screens/Profile/Profile';

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}
