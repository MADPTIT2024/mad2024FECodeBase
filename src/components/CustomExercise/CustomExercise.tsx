import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

type CustomExerciseProps = {
  setModalVisible: (visible: boolean) => void;
  exercise: any;
  modalVisible: boolean;
};

const CustomExercise: React.FC<CustomExerciseProps> = ({
  setModalVisible,
  exercise,
  modalVisible,
}) => {
  // console.log(exercise);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image
            style={{
              flex: 4,
              resizeMode: 'stretch',
              borderRadius: 10,
              borderColor: '#948979',
              borderWidth: 30,
            }}
            source={{ uri: exercise.image }}
          />
          <View style={styles.exerciseContainer}>
            <View style={styles.exerciseInfo}>
              <Text style={styles.exerciseText}>{exercise.name}</Text>
              <Text style={styles.exerciseDesc}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
                excepturi temporibus porro corrupti, non est sequi repellat
                illum nihil rerum quae obcaecati deleniti dolorem numquam. Alias
                facilis autem expedita laborum? Sit maxime temporibus hic
                nesciunt accusantium minus aut illum, sunt voluptate, harum
                facere natus odit commodi dicta nihil soluta, explicabo porro
                velit autem delectus expedita?
              </Text>
            </View>
            <View style={styles.exerciseButtons}>
              <Pressable
                onPress={closeModal}
                style={[styles.exerciseButton, styles.exerciseButtonCancel]}
              >
                <Text style={{ fontWeight: '900' }}>CANCEL</Text>
              </Pressable>
              <View style={[styles.exerciseButton, styles.exerciseButtonAdd]}>
                <Text style={{ fontWeight: '900', color: 'white' }}>ADD</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 20,
  },

  exerciseContainer: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  exerciseInfo: {},
  exerciseText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  exerciseDesc: {
    fontWeight: '200',
    marginTop: 20,
    marginRight: 30,
    textAlign: 'justify',
    lineHeight: 24,
  },

  exerciseButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  exerciseButton: {
    flex: 1,
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderColor: '#31363F',
    borderRadius: 50,
    padding: 10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseButtonAdd: {
    backgroundColor: '#38419D',
    color: 'white',
    fontWeight: '800',
  },
  exerciseButtonCancel: {
    backgroundColor: 'white',
    color: 'black',
    fontWeight: '800',
  },
});

export default CustomExercise;
