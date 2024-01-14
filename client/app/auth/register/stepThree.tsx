import { BaseScreen } from '@/components/BaseScreen/BaseScreen';
import { ButtonAuth } from '@/components/UI/ButtonAuth';
import { ProfileDAO } from '@/data/profileDAO';
import { User } from '@/entities/user';
import { ThemeColors } from '@/theme';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as SQLite from 'expo-sqlite';
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
  const [interactionDate, setinteractionDate] = useState(new Date());
  const [interactionTime, setinteractionTime] = useState(new Date());
  const [isDatePickerVisibleDate, setDatePickerVisibilityDate] =
    useState(false);
  const [isDatePickerVisibleTime, setDatePickerVisibilityTime] =
    useState(false);

  const item = useLocalSearchParams();
  const db = new ProfileDAO(SQLite.openDatabase('database.db'));

  return (
    <BaseScreen>
      <SafeAreaView className="m-5 mt-24 flex h-screen justify-between">
        <View className="flex items-center justify-center">
          <View className="w-full">
            <Image
              className="h-44 w-44"
              source={require('@/assets/images/hero.png')}
            />
          </View>

          <LinearGradient
            colors={ThemeColors.borderBoxWindowGradient}
            style={{
              width: wp(80),
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
                width: wp(77),
                height: hp(13),
                borderRadius: 10,
                transform: [{ rotate: '-180deg' }],
              }}
            >
              <Text className="text-2xl">Чудово!</Text>
              <Text className="text-xl">Тепер обери час для взаємодії</Text>
            </View>
          </LinearGradient>
        </View>
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
                    value={interactionDate}
                    maximumDate={new Date()}
                    onChange={(event, selectedDate) => {
                      const currentDate = selectedDate || interactionDate;
                      setinteractionDate(currentDate);
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
                    value={interactionTime}
                    maximumDate={new Date()}
                    onChange={(event, selectedTime) => {
                      const currentTime = selectedTime || interactionTime;
                      setinteractionTime(currentTime);
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
        <View className="flex items-center justify-center">
          <ButtonAuth
            onPress={async () => {
              const user = User.fromJSON({
                id: 0,
                login: item.login,
                password: item.password,
                name: item.name,
                date_of_birth: item.date,
                interaction_time:
                  interactionTime.getHours() * 60 +
                  interactionTime.getMinutes(),
                interaction_date: interactionDate.getTime(),
              });
              db.insertUser(user);
              router.push({
                pathname: '/auth/register/stepFour',
              });
            }}
            textValue="Продовжити"
          />
        </View>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default StepThree;
