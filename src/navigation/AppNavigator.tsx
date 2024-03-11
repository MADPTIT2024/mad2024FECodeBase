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
              ? require("../assets/Home_icon_active.png")
              : require("../assets/Home_icon.png");
          } else if (route.name === "Discover") {
            iconSource = focused
              ? require("../assets/Discover_active.png")
              : require("../assets/Discover.png");
          } else if (route.name === "Calendar") {
            iconSource = focused
              ? require("../assets/Calendar_active.png")
              : require("../assets/Calendar.png");
          } else if (route.name === "Personal") {
            iconSource = focused
              ? require("../assets/Personal_active.png")
              : require("../assets/Personal.png");
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
