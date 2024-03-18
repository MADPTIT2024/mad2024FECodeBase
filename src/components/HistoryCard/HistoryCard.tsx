import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { History as HistoryType } from '@/data';
import FontSize from '@/constants/FontSize';
import { styles } from './HistoryCard.styles';

const screenWidth = Dimensions.get('screen').width;

interface Props {
  history: HistoryType;
  onPress?: () => void;
}

const HistoryCard: React.FC<Props> = ({ history, onPress }) => {
  return (
    <TouchableOpacity style={styles.touchableContainer}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          minWidth: screenWidth * 0.9,
        }}
      >
        <Image source={history.image} style={styles.image} />
        <View>
          <Text
            style={{
              fontSize: FontSize.md,
              fontWeight: 'bold',
            }}
          >
            {history.name}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <View
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.base,
                }}
              >
                {history.date}
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.base,
                }}
              >
                {history.duration}
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.base,
                }}
              >
                {history.caloriesBurn}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HistoryCard;

{
  /* <View
              style={{
                height: 80,
                width: 1,
                backgroundColor: 'gray', // Change the color as needed
                marginHorizontal: 5, // Adjust the space between the line and texts
              }}
            /> */
}
