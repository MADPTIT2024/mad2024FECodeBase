import React from 'react';
import Screen from '@/components/Screen/Screen';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
  Alert,
  Modal,
  FlatList,
} from 'react-native';
import { styles } from './AddedExercisesScreen.style';
import { Ionicons } from '@expo/vector-icons';
import { PlusCircleIcon as PlusCircleIconOutline } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const AddedExercisesScreen = ({ route }) => {
  const { addedExercises } = route.params;
  const navigation = useNavigation();

  return (
    <Screen style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: 'black' }}
      >
        <View style={styles.discoverHeader}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back-outline"
            size={28}
            color="white"
          />

          <Text style={styles.headerText}>Add exercises</Text>
        </View>

        <Text>List of Added Exercises:</Text>
        <View style={{ marginTop: 30, gap: 20 }}>
          {addedExercises?.map((item, index) => (
            <Pressable
              key={index}
              style={styles.exerciseComponent}
              // onPress={() => openModalWithExercise(item)}
            >
              {/* <PlusCircleIconOutline color="#F8EDFF" size={25} /> */}
              <View style={styles.exerciseInfo}>
                <Image
                  style={{ width: 70, height: 70 }}
                  source={{ uri: item?.animation }}
                />

                <View style={{ marginLeft: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      width: 170,
                      color: 'white',
                    }}
                  >
                    {item.name}
                  </Text>

                  <Text
                    style={{ marginTop: 4, fontSize: 13, color: '#e9a98e' }}
                  >
                    x{item.rep}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
};

export default AddedExercisesScreen;
