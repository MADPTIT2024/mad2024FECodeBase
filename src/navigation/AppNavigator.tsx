import { Home, CalendarScreen, Discover, Personal } from '@/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeIcon as HomeUnactive } from 'react-native-heroicons/outline';
import { HomeIcon as HomeActive } from 'react-native-heroicons/solid';

import { CalendarDaysIcon as CalendarUnactive } from 'react-native-heroicons/outline';
import { CalendarDaysIcon as CalendarActive } from 'react-native-heroicons/solid';

import { UserCircleIcon as PersonalUnactive } from 'react-native-heroicons/outline';
import { UserCircleIcon as PersonalActive } from 'react-native-heroicons/solid';

import { BookOpenIcon as DiscoverUnactive } from 'react-native-heroicons/outline';
import { BookOpenIcon as DiscoverActive } from 'react-native-heroicons/solid';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/common/types';
import PlanOverviewScreen from '@/screens/PlanOverviewScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function StackScreenHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlanOverview"
        component={PlanOverviewScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function StackScreenDiscover() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={Discover}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlanOverview"
        component={PlanOverviewScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          if (route.name === 'Training') {
            iconSource = focused ? (
              <HomeActive color="white" fill="blue" size={20} />
            ) : (
              <HomeUnactive color="white" size={20} />
            );
          } else if (route.name === 'Discovery') {
            iconSource = focused ? (
              <DiscoverActive color="white" fill="blue" size={20} />
            ) : (
              <DiscoverUnactive color="white" size={20} />
            );
          } else if (route.name === 'Calendar') {
            iconSource = focused ? (
              <CalendarActive color="white" fill="blue" size={20} />
            ) : (
              <CalendarUnactive color="white" size={20} />
            );
          } else if (route.name === 'Personal') {
            iconSource = focused ? (
              <PersonalActive color="white" fill="blue" size={20} />
            ) : (
              <PersonalUnactive color="white" size={20} />
            );
          }

          return iconSource;

          // return (
          //   <Image source={iconSource} style={{ width: 20, height: 20 }} />
          // );
        },
        tabBarStyle: {
          backgroundColor: 'black', // Background color of the tab bar
          elevation: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: 'white', // Color of the active tab icon
      })}
      //
    >
      <Tab.Screen
        name="Training"
        component={StackScreenHome}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Discovery"
        component={StackScreenDiscover}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Personal"
        component={Personal}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
