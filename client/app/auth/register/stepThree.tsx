import { AuthBaseScreen } from '@/components/AuthBaseScreen/AuthBaseScreen';
import { ThemeColors } from '@/theme';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { CalendarDaysIcon } from 'react-native-heroicons/solid';
import { ClockIcon } from 'react-native-heroicons/solid';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const StepThree = () => {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isDatePickerVisibleDate, setDatePickerVisibilityDate] =
    useState(false);
  const [isDatePickerVisibleTime, setDatePickerVisibilityTime] =
    useState(false);

  return (
    <AuthBaseScreen>
      <SafeAreaView className="m-5 mt-24">
        <Image
          className="h-44 w-44"
          source={require('@/assets/images/hero.png')}
        />

        <LinearGradient
          colors={ThemeColors.borderBoxWindowGradient}
          style={{
            width: wp(90),
            height: hp(15),
            borderRadius: 20,
            transform: [{ rotate: '-180deg' }],
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            className="flex flex-col items-center justify-center bg-white"
            style={{
              width: wp(86),
              height: hp(13),
              borderRadius: 10,
              transform: [{ rotate: '-180deg' }],
            }}
          >
            <Text className="text-2xl">Чудово!</Text>
            <Text className="text-xl">Тепер обери час для взаємодії</Text>
          </View>
        </LinearGradient>
        <View className="m-10 flex flex-row justify-between">
          <View>
            <LinearGradient
              colors={ThemeColors.borderBoxInputGradient}
              style={{
                width: wp(25),
                height: hp(8),
                borderRadius: 20,
                marginTop: hp(3),
              }}
            >
              <View
                className="flex items-center justify-center rounded-xl bg-white"
                style={{
                  width: wp(22),
                  height: hp(6.5),
                  marginLeft: wp(1.5),
                  marginTop: hp(0.7),
                }}
              >
                {isDatePickerVisibleDate && (
                  <RNDateTimePicker
                    mode="date"
                    display="default"
                    value={date}
                    maximumDate={new Date()}
                    onChange={(event, selectedDate) => {
                      const currentDate = selectedDate || date;
                      setDate(currentDate);
                      setDatePickerVisibilityDate(false);
                    }}
                  />
                )}
                <TouchableOpacity
                  onPress={() => setDatePickerVisibilityDate(true)}
                >
                  <CalendarDaysIcon
                    className="h-8 w-8"
                    size={24}
                    color={'black'}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
            <Text className="text-normal mt-2 text-center">Обрати день</Text>
          </View>
          <View>
            <LinearGradient
              colors={ThemeColors.borderBoxInputGradient}
              style={{
                width: wp(25),
                height: hp(8),
                borderRadius: 20,
                marginTop: hp(3),
              }}
            >
              <View
                className="flex items-center justify-center rounded-xl bg-white"
                style={{
                  width: wp(22),
                  height: hp(6.5),
                  marginLeft: wp(1.5),
                  marginTop: hp(0.7),
                }}
              >
                {isDatePickerVisibleTime && (
                  <RNDateTimePicker
                    mode="time"
                    display="default"
                    value={time}
                    maximumDate={new Date()}
                    onChange={(event, selectedTime) => {
                      const currentTime = selectedTime || time;
                      setTime(currentTime);
                      setDatePickerVisibilityTime(false);
                    }}
                  />
                )}
                <TouchableOpacity
                  onPress={() => setDatePickerVisibilityTime(true)}
                >
                  <Text className="text-center text-xl">
                    <ClockIcon className="h-8 w-8" size={24} color={'black'} />
                  </Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
            <Text className="text-normal mt-2 w-[100px] text-center">
              Обрати тривалість (год/хв)
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.push('/auth/register/stepFour')}
        >
          <LinearGradient
            colors={ThemeColors.borderInputGradient}
            style={{
              width: wp(90),
              height: hp(8),
              borderRadius: 20,
              marginTop: hp(3),
            }}
          >
            <View
              className="flex items-center justify-center rounded-xl bg-white"
              style={{
                width: wp(87),
                height: hp(6.5),
                marginLeft: wp(1.5),
                marginTop: hp(0.7),
              }}
            >
              <Text className="text-center text-2xl font-semibold">
                Продовжити
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
    </AuthBaseScreen>
  );
};

export default StepThree;
