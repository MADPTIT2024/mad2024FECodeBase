import React, { useState } from 'react';
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
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import fitness from '../../data/fitness';
import { styles } from './AddExercises.styles';
import { PlusCircleIcon as PlusCircleIconOutline } from 'react-native-heroicons/outline';
import CustomExercise from '@/components/CustomExercise/CustomExercise';
import Screen from '@/components/Screen/Screen';

export function AddExercises() {
  const route = useRoute();
  const navigation = useNavigation();
  const FitnessData = fitness;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const openModalWithExercise = (exercise: any) => {
    setSelectedExercise(exercise);
    setModalVisible(true);
  };

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

        <View style={{ marginTop: 30, gap: 20 }}>
          {FitnessData[0].excersises.map((item, index) => (
            <Pressable
              key={index}
              style={styles.exerciseComponent}
              onPress={() => openModalWithExercise(item)}
            >
              <PlusCircleIconOutline color="#F8EDFF" size={25} />
              <View style={styles.exerciseInfo}>
                <Image
                  style={{ width: 70, height: 70 }}
                  source={{ uri: item.image }}
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
                    x{item.sets}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <CustomExercise
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
              exercise={selectedExercise}
            />
          </Modal>
        </View>
      </ScrollView>
    </Screen>
  );
}
