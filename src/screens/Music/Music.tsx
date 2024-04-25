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
  ImageSourcePropType,
} from 'react-native';
import { musiclist } from '@/data';
import MusicList from '@/components/Music/MusicList';
import { LogBox } from 'react-native';
import { Audio } from 'expo-av';
import Colors from '@/constants/Colors';
// import FormMusic from '@/components/Music/FormMusic';

LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();

const { width, height } = Dimensions.get('window');
const modalHeight = height * 0.85;

interface MusicSelectData {
  id: number;
  name: string;
  image: ImageSourcePropType;
  music: string;
}

interface MusicProps {
  visible: boolean;
  onClose: () => void;
  volumeMusic: number;
  music: (data: any) => void;
}

const Music: React.FC<MusicProps> = ({
  visible,
  onClose,
  volumeMusic,
  music,
}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [showImages, setShowImages] = useState(true);
  const [isCloseButton, setIsCloseButton] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | undefined>(undefined);
  const [selectedMusic, setSelectedMusic] = useState<number | null>(null);
  const [selectedMusicIdWhenDisabled, setSelectedMusicIdWhenDisabled] =
    useState<number | null>(null);
  const [dataSelect, setDataSelect] = useState<MusicSelectData | null>(null);
  const [addMusic, setAddMusic] = useState(false);
  const toggleSwitch = async () => {
    setIsEnabled((previousState) => !previousState);
    setShowImages((previousState) => !previousState);
    if (!isEnabled && sound) {
      sound.stopAsync();
      sound.unloadAsync();
      setSound(undefined);
      setSelectedMusicIdWhenDisabled(selectedMusic);
    } else if (isEnabled && sound) {
      await sound.playAsync();
    }
  };

  useEffect(() => {
    const handleToggleSwitch = async () => {
      if (!isEnabled && sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(undefined);
        setSelectedMusicIdWhenDisabled(selectedMusic);
      } else if (isEnabled && dataSelect) {
        await handleSelect(dataSelect);
      }
    };

    handleToggleSwitch();
  }, [isEnabled]);

  const handleSelect = async (data: MusicSelectData) => {
    music(data);
    setSelectedMusic(data.id);
    setDataSelect(data);
    if (isEnabled && data) {
      await playSong(data.music);
    }
  };

  const closeButton = () => {
    setIsCloseButton(true);
  };

  const addButton = () => {
    setAddMusic(true);
  };

  const handleUpdateMusic = (data: MusicSelectData) => {};

  const playSong = async (song: any) => {
    try {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(undefined);
      }

      console.log('Loading Sound');
      const { sound: newSound } = await Audio.Sound.createAsync(
        require('@/assets/music/Unstoppable-Remix-Tiktok-Sia.mp3'),
        {
          shouldPlay: false,
          volume: volumeMusic,
        },
      );
      setSound(newSound);

      console.log('Playing Sound');
      await newSound.playAsync();

      // Nếu bạn muốn lặp lại bài hát khi kết thúc, bạn có thể sử dụng sự kiện 'setOnPlaybackStatusUpdate'
      // newSound.setOnPlaybackStatusUpdate(async (status) => {
      //   if (status.didJustFinish) {
      //     console.log('Song finished, replaying...');
      //     await newSound.replayAsync();
      //   }
      // });
    } catch (error) {
      console.error('Lỗi khi phát nhạc:', error);
    }
  };

  useEffect(() => {
    if (selectedMusicIdWhenDisabled !== null) {
      setSelectedMusic(selectedMusicIdWhenDisabled);
    }
  }, [selectedMusicIdWhenDisabled]);

  useEffect(() => {
    if (
      visible &&
      showImages &&
      musiclist.length > 0 &&
      selectedMusic === null
    ) {
      handleSelect(musiclist[0]);
    }

    if (isCloseButton && sound) {
      sound.stopAsync();
      sound.unloadAsync();
      setSound(undefined);
      setIsCloseButton(false);
      setSelectedMusic(null);
    }
  }, [visible, isCloseButton, sound]);

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
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.8,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                onClose();
                closeButton();
              }}
              style={styles.doneButton}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <TouchableOpacity
                onPress={() => addButton()}
                style={styles.doneButton}
              >
                <Text style={styles.doneButtonText}>+ Add</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
          {/* {addMusic && <FormMusic updateMusic={handleUpdateMusic}></FormMusic>} */}
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
    backgroundColor: Colors.primary,
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
    width: width,
    height: 80,
  },

  doneButton: {
    backgroundColor: 'rgba(34, 34, 237, 0.88)',
    width: width * 0.3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 20,
  },

  doneButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Music;
