import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddExercises } from '@/screens/AddExercises/AddExercises';
import { CustomWorkout } from '@/screens/Custom/CustomWorkout';

const Stack = createNativeStackNavigator();

export const CustomStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="CustomWorkout"
        component={CustomWorkout}
        // options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="AddExercise" component={AddExercises} />
    </Stack.Navigator>
  );
};
