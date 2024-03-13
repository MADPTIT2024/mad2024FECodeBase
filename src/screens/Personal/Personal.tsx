import { styles } from "./Personal.styles";
import React, { useRef } from "react";
import { ScrollView, Animated, View, Text, StyleSheet } from "react-native";
// @ts-ignore
import FontAwesomeIcon5 from "react-native-vector-icons/FontAwesome5";

export function Personal() {
  const myData = ["My Profile", "My favorite"];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Personal</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <FontAwesomeIcon5 name="user-circle" size={80} color="grey" />
          <Text style={styles.scrViewText}>Welcome, my friend!</Text>
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
