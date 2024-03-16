import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Screen from '@/components/Screen/Screen';
import Spacing from '@/constants/Spacing';
import { user, workoutPlans, workouts } from '@/data';
import AppText from '@/components/AppText/AppText';
import Font from '@/constants/Font';
import IconButton from '@/components/IconButton/IconButton';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import FontSize from '@/constants/FontSize';
import CategoryList from '@/components/CategoryList/CategoryList';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Workout from '@/components/Workout/Workout';
import Rating from 'react-native-easy-rating';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();

  return (
    <Screen>
      <ScrollView
        style={{
          paddingHorizontal: Spacing.padding.base,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={user.profile}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
              }}
            />
            <View
              style={{
                marginLeft: Spacing.margin.base,
              }}
            >
              <AppText>Hello, Welcome</AppText>
              <AppText
                style={{
                  fontFamily: Font['poppins-semiBold'],
                  textTransform: 'capitalize',
                }}
              >
                {user.name}
              </AppText>
            </View>
          </View>
          <IconButton name="notifications" />
        </View>

        {/* <View
          style={{
            backgroundColor: Colors.primary,
            paddingVertical: Spacing.padding.sm,
            paddingHorizontal: Spacing.padding.base,
            borderRadius: Spacing.borderRadius.base,
            marginVertical: Spacing.margin.xl,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Ionicons name='search-outline' size={24} color={Colors.text} />
          <TextInput
            placeholder='Search Workouts..'
            placeholderTextColor={Colors.text}
            style={{
              fontSize: FontSize.base,
              width: "80%",
            }}
          />
          <IconButton
            name='options-outline'
            style={{
              backgroundColor: Colors.accent,
            }}
            color={Colors.black}
          />
        </View> */}

        <SectionHeader title="Categories" />

        <CategoryList />
        <SectionHeader title="Featured Workouts" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          pagingEnabled
          snapToInterval={270 + Spacing.margin.lg}
        >
          {workouts.map((workout) => (
            <Workout
              onPress={() =>
                navigation.navigate('PlanOverview', { workout: workout })
              }
              workout={workout}
              key={workout.id}
            />
          ))}
        </ScrollView>
        <SectionHeader title="Trending Plans" />
        {workouts.map((plan) => (
          <TouchableOpacity
            style={{
              padding: Spacing.padding.sm,
              marginBottom: Spacing.margin.base,
              backgroundColor: Colors.primary,
              borderRadius: Spacing.borderRadius.base,
              flexDirection: 'row',
            }}
            onPress={() =>
              navigation.navigate('PlanOverview', { workout: plan })
            }
            key={plan.id}
          >
            <Image
              source={plan.image}
              style={{
                width: 100,
                height: 100,
                borderRadius: Spacing.borderRadius.base,
              }}
            />
            <View
              style={{
                marginLeft: Spacing.margin.base,
                justifyContent: 'space-between',
              }}
            >
              <AppText
                style={{
                  fontFamily: Font['poppins-semiBold'],
                }}
              >
                {plan.name}
              </AppText>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Ionicons
                  name="calendar-outline"
                  size={16}
                  color={Colors.text}
                />
                {/* <AppText
                  style={{
                    marginLeft: Spacing.margin.base,
                  }}
                >
                  {plan.duration} | {plan.location}
                </AppText> */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Rating
                  rating={plan.rating}
                  max={5}
                  iconWidth={20}
                  iconHeight={20}
                />
                <AppText
                  style={{
                    marginLeft: Spacing.margin.sm,
                  }}
                >
                  {plan.rating}
                </AppText>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Screen>
  );
}
