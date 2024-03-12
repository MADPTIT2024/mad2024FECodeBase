import { Home, Calendar, Discover, Personal } from "@/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

// export type RootStackParamList = {
//   Home: undefined;
//   Discover: undefined;
//   Calendar: undefined;
//   Personal: undefined;
// };

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          if (route.name === "Home") {
            iconSource = focused
              ? require("../assets/navigation/Home_icon_active.png")
              : require("../assets/navigation/Home_icon.png");
          } else if (route.name === "Discover") {
            iconSource = focused
              ? require("../assets/navigation/Discover_active.png")
              : require("../assets/navigation/Discover.png");
          } else if (route.name === "Calendar") {
            iconSource = focused
              ? require("../assets/navigation/Calendar_active.png")
              : require("../assets/navigation/Calendar.png");
          } else if (route.name === "Personal") {
            iconSource = focused
              ? require("../assets/navigation/Personal_active.png")
              : require("../assets/navigation/Personal.png");
          }

          return (
            <Image source={iconSource} style={{ width: 20, height: 20 }} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
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
