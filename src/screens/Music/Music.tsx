import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Switch,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { musiclist } from '@/data';
import MusicList from '@/components/MusicList/MusicList';
import TrackPlayer from 'react-native-track-player';

const { width, height } = Dimensions.get('window');
const modalHeight = height * 0.85;

interface MusicSelectData {
  id: number;
  music: string;
}

interface MusicProps {
  visible: boolean;
  onClose: () => void;
}

const Music: React.FC<MusicProps> = ({ visible, onClose }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [showImages, setShowImages] = useState(true);
  const [isCloseButton, setIsCloseButton] = useState(false);
  // const [sound, setSound] = useState<Audio.Sound | undefined>(undefined);
  const [selectedMusic, setSelectedMusic] = useState<number | null>(null);
  const [selectedMusicIdWhenDisabled, setSelectedMusicIdWhenDisabled] =
    useState<number | null>(null);

  const toggleSwitch = async () => {
    setIsEnabled((previousState) => !previousState);
    setShowImages((previousState) => !previousState);
    // if (!isEnabled && sound) {
    //   sound.stopAsync();
    //   sound.unloadAsync();
    //   setSelectedMusicIdWhenDisabled(selectedMusic);
    // } else if (isEnabled && !sound) {
    //   await playSound(
    //     require('@/assets/music/Unstoppable-Remix-Tiktok-Sia.mp3'),
    //   );
    // }
  };

  const handleSelect = async (data: MusicSelectData) => {
    setSelectedMusic(data.id);

    // if (data) {
    //   await playSong(data.music);
    // }
  };

  const closeButton = () => {
    setIsCloseButton(true);
  };

  useEffect(() => {
    if (selectedMusicIdWhenDisabled !== null) {
      setSelectedMusic(selectedMusicIdWhenDisabled);
    }
  }, [selectedMusicIdWhenDisabled]);

  // useEffect(() => {
  //   if (
  //     visible &&
  //     showImages &&
  //     musiclist.length > 0 &&
  //     selectedMusic === null
  //   ) {
  //     handleSelect(musiclist[0]);
  //   }

  //   if (isCloseButton && sound) {
  //     sound.stopAsync();
  //     sound.unloadAsync();
  //     setSound(undefined);
  //     setIsCloseButton(false);
  //     setSelectedMusic(null);
  //   }
  // }, [visible, isCloseButton, sound]);

  // useEffect(() => {
  //   if (!isEnabled && sound) {
  //     sound.stopAsync();
  //     sound.unloadAsync();
  //   } else if (isEnabled && sound) {
  //     (async () => {
  //       await sound.unloadAsync();
  //       await sound.loadAsync(
  //         require('@/assets/music/Unstoppable-Remix-Tiktok-Sia.mp3'),
  //       );
  //       await sound.playAsync();
  //     })();
  //   }
  // }, [sound, isEnabled]);

  // const playSound = async (music: string) => {
  //   if (sound) {
  //     await sound.stopAsync();
  //     await sound.unloadAsync();
  //     setSound(undefined);
  //   }

  //   const { sound: newSound } = await Audio.Sound.createAsync(
  //     require('@/assets/music/Unstoppable-Remix-Tiktok-Sia.mp3'),
  //   );
  //   setSound(newSound);

  //   await newSound.playAsync();
  // };

  // const playSong = async (song: any) => {
  //   // Phát bài hát được chọn
  //   await TrackPlayer.setupPlayer();
  //   await TrackPlayer.add({
  //     id: song.id,
  //     url: require('@/assets/music/Unstoppable-Remix-Tiktok-Sia.mp3'), // Đường dẫn tới file nhạc
  //     title: song.title,
  //     artist: song.artist,
  //   });
  //   await TrackPlayer.play();
  // };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={[styles.modalContent, { height: modalHeight }]}>
          <View style={styles.music}>
            <View style={styles.textMusic}>
              <Text style={styles.text}>Music</Text>
            </View>
            <View style={styles.toggleSwitch}>
              <Switch
                trackColor={{ false: '#767577', true: '#0066FF' }}
                thumbColor={isEnabled ? '#0066FF' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>

          {showImages && (
            <ScrollView
              style={{
                flexDirection: 'column',
                marginTop: 100,
                marginBottom: 100,
              }}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              {musiclist.map((music) => (
                <View key={music.id}>
                  <MusicList
                    musiclist={music}
                    onSelect={handleSelect}
                    isSelected={selectedMusic === music.id}
                  />
                </View>
              ))}
            </ScrollView>
          )}

          <TouchableOpacity
            onPress={() => {
              onClose();
              closeButton();
            }}
            style={styles.doneButton}
          >
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },

  modalContent: {
    backgroundColor: 'rgba(192, 192, 192,0.07)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  music: {
    flex: 1,
    width: width,
  },

  textMusic: {
    position: 'absolute',
    top: 20,
    left: 20,
  },

  toggleSwitch: {
    position: 'absolute',
    top: 10,
    right: 20,
  },

  text: {
    color: 'white',
  },

  image: {
    width: width, // Chiếm 80% chiều rộng màn hình
    height: 80, // Chiều cao 20px
  },

  doneButton: {
    backgroundColor: 'rgba(34, 34, 237, 0.88)',
    width: width * 0.8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', // Đặt alignSelf thành 'center' để căn giữa theo trục ngang
    position: 'absolute',
    bottom: 20,
  },

  doneButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Music;
