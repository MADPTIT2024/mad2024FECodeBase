import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';

import {
  Bars3Icon,
  PlayCircleIcon,
  CheckCircleIcon,
} from 'react-native-heroicons/solid';
import { MusicList as MusicListType } from '@/data';

const { width, height } = Dimensions.get('window');

interface MusicSelectData {
  id: number;
  name: string;
  image: ImageSourcePropType;
  music: string;
}

interface Props {
  musiclist: MusicListType;
  onSelect: (data: MusicSelectData) => void;
  isSelected: boolean;
}

const MusicList: React.FC<Props> = ({ musiclist, onSelect, isSelected }) => {
  return (
    <TouchableOpacity
      style={styles.musicListItem}
      onPress={() => {
        onSelect({
          id: musiclist.id,
          name: musiclist.name,
          image: musiclist.image,
          music: musiclist.music,
        });
      }}
    >
      <View style={styles.iconImage}>
        <Bars3Icon color={'white'} style={styles.iconMenu} />
        <Image
          source={musiclist.image}
          style={[styles.image, isSelected && styles.selectedImage]}
        />
      </View>
      <View style={styles.music}>
        <View style={styles.item}>
          <Text style={styles.text}>{musiclist.name}</Text>
          <Text style={[styles.text, isSelected && styles.selectedText]}>
            {musiclist.time}
          </Text>
        </View>

        {isSelected ? (
          <CheckCircleIcon color={'blue'} />
        ) : (
          <PlayCircleIcon color={'white'} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MusicList;

const styles = StyleSheet.create({
  musicListItem: {
    flexDirection: 'row',
    width: width * 0.8,
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  iconImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  music: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.55,
  },
  iconMenu: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedImage: {
    borderColor: 'blue',
  },
  item: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    color: 'white',
    fontSize: 10,
  },
  selectedText: {
    color: 'blue',
  },
});
