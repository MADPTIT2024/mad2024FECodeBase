import { styles } from "./Personal.styles";
import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
// @ts-ignore
import FontAwesomeIcon5 from "react-native-vector-icons/FontAwesome5";
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export function Personal() {
  const navigation = useNavigation();

  const myData = [
    "My Profile",
    "My favorite",
    "My Profile",
    "My favorite",
    "My Profile",
    "My favorite",
    "My Profile",
    "My favorite",
  ];

  const handleProfilePress = () => {
    // Xử lý khi ấn vào My Profile
    console.log("Go to My Profile screen");
  };

  const handleFavoritesPress = () => {
    // Xử lý khi ấn vào My Favorites
    console.log("Go to My Favorites screen");
  };

  const handleWorkoutSettings = () => {
    // Xử lý khi ấn vào Workout Settings
    console.log("Go to Workout Settings screen");
  };

  const handleGeneralSettings = () => {
    // Xử lý khi ấn vào General Settings
    // navigation.navigate('.');
    console.log("Go to General Settings screen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Personal</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <FontAwesomeIcon5 name="user-circle" size={80} color="grey" />
          <Text style={styles.scrViewText}>Welcome, my friend!</Text>

          <View style={styles.toolbarContainer}>
            <TouchableOpacity
              style={styles.toolbarItem}
              onPress={handleProfilePress}
            >
              <View style={styles.toolbarItemContent}>
                <Icon name="account-box" size={40} color="blue" />
                <Text style={styles.toolbarText}>My Profile</Text>
              </View>
              <Text style={styles.toolbarArrow}>&gt;</Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
            <TouchableOpacity
              style={styles.toolbarItem}
              onPress={handleFavoritesPress}
            >
              <View style={styles.toolbarItemContent}>
                <Icon name="heart-box" size={40} color="blue" />
                <Text style={styles.toolbarText}>My Favorites</Text>
              </View>
              <Text style={styles.toolbarArrow}>&gt;</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textSettings}>Settings</Text>
          </View>

          <View style={styles.toolbarContainer}>
            <TouchableOpacity
              style={styles.toolbarItem}
              onPress={handleWorkoutSettings}
            >
              <View style={styles.toolbarItemContent}>
                <Icon name="account-box" size={40} color="orange" />
                <Text style={styles.toolbarText}>Workout Settings</Text>
              </View>
              <Text style={styles.toolbarArrow}>&gt;</Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
            <TouchableOpacity
              style={styles.toolbarItem}
              onPress={handleGeneralSettings}
            >
              <View style={styles.toolbarItemContent}>
                <Icon name="cog-outline" size={40} color="orange" />
                <Text style={styles.toolbarText}>General Settings</Text>
              </View>
              <Text style={styles.toolbarArrow}>&gt;</Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
            <TouchableOpacity
              style={styles.toolbarItem}
              onPress={handleGeneralSettings}
            >
              <View style={styles.toolbarItemContent}>
                <Icon name="cog-outline" size={40} color="orange" />
                <Text style={styles.toolbarText}>LanguageOptions</Text>
              </View>
              <Text style={styles.toolbarArrow}>&gt;</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textContent}>
            {myData.map((item, index) => (
              <Text style={styles.textStyle} key={index}>
                {item}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
