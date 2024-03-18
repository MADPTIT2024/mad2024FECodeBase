import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './GeneralSetting.styles';
import { useNavigation } from '@react-navigation/native';

export function GeneralSetting() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={styles.headerArrow}
          onPress={() => navigation.navigate('Personal')}
        >
          &lt;
        </Text>
        <Text style={styles.headerText}>General Settings</Text>
        <Text> </Text>
      </View>

      <TouchableOpacity
        style={styles.toolbarItem}
        onPress={() => navigation.navigate('Reminder')}
      >
        <View style={styles.toolbarItemContent}>
          <Text style={styles.toolbarText}>Reminder</Text>
        </View>
        <Text style={styles.toolbarArrow}>&gt;</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.toolbarItem}
        onPress={() => navigation.navigate('Personal')}
      >
        <View style={styles.toolbarItemContent}>
          <Text style={styles.toolbarText}>Restone purchase</Text>
        </View>
        <Text style={styles.toolbarArrow}>&gt;</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.toolbarItem}
        onPress={() => navigation.navigate('Personal')}
      >
        <View style={styles.toolbarItemContent}>
          <Text style={styles.toolbarText}>Privacy policy</Text>
        </View>
        <Text style={styles.toolbarArrow}>&gt;</Text>
      </TouchableOpacity>
    </View>
  );
}
