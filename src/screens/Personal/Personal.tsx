import { styles } from './Personal.styles';
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
// @ts-ignore
import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { UserCircleIcon } from 'react-native-heroicons/solid';
import { HeartIcon } from 'react-native-heroicons/solid';

export function Personal() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <UserCircleIcon color="white" fill="grey" size={80} />
          <Text style={styles.scrViewText}>Welcome, my friend!</Text>

          <View style={styles.toolbarContainer}>
            <TouchableOpacity
              style={styles.toolbarItem}
              onPress={() => navigation.navigate('Profile')}
            >
              <View style={styles.toolbarItemContent}>
                <UserCircleIcon color="white" fill="white" size={40} />
                <Text style={styles.toolbarText}>My Profile</Text>
              </View>
              <Text style={styles.toolbarArrow}>&gt;</Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
            <TouchableOpacity
              style={styles.toolbarItem}
              onPress={() => navigation.navigate('Favorites')}
            >
              <View style={styles.toolbarItemContent}>
                <HeartIcon color="white" fill="white" size={40} />
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
              onPress={() => navigation.navigate('WorkoutSetting')}
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
              onPress={() => navigation.navigate('GeneralSetting')}
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
              onPress={() => navigation.navigate('Language')}
            >
              <View style={styles.toolbarItemContent}>
                <Icon name="cog-outline" size={40} color="orange" />
                <Text style={styles.toolbarText}>LanguageOptions</Text>
              </View>
              <Text style={styles.toolbarArrow}>&gt;</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
