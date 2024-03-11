import { styles } from "./Personal.styles";
import React, { useRef } from "react";
import { ScrollView, Animated, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Personal() {
  const myData = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>React Native</Text>
      </View>
      <ScrollView>
        {myData.map((item, index) => (
          <Text style={styles.textStyle} key={index}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
