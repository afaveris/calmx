import { BaseScreen } from '@/components/BaseScreen/BaseScreen';
import { ButtonAuth } from '@/components/UI/ButtonAuth';
import { ThemeColors } from '@/theme';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { CalendarIcon } from 'react-native-heroicons/solid';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const StepTwo = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  return (
    <BaseScreen>
      <SafeAreaView className="m-5 mt-24 flex h-screen justify-between">
        <View>
          <View className="flex w-full items-center">
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
                <Text className="text-xl">Радий знайомству! {item.name}</Text>
                <Text className="text-xl">Скільки тобі років?</Text>
              </View>
            </LinearGradient>
          </View>
          <View className="flex w-full items-center">
            <LinearGradient
              colors={ThemeColors.borderBoxInputGradient}
              style={{
                width: wp(80),
                height: hp(8),
                borderRadius: 20,
                marginTop: hp(3),
              }}
            >
              <View
                className="flex items-center justify-center rounded-xl bg-white"
                style={{
                  width: wp(77),
                  height: hp(6.5),
                  marginLeft: wp(1.5),
                  marginTop: hp(0.7),
                }}
              >
                {isDatePickerVisible && (
                  <RNDateTimePicker
                    mode="date"
                    display="default"
                    value={date}
                    maximumDate={new Date()}
                    onChange={(event, selectedDate) => {
                      const currentDate = selectedDate || date;
                      setDate(currentDate);
                      setDatePickerVisibility(false);
                    }}
                  />
                )}
                <TouchableOpacity
                  onPress={() => setDatePickerVisibility(true)}
                  className="absolute right-5 flex items-center justify-center"
                >
                  <CalendarIcon
                    className="h-full w-full"
                    color={ThemeColors.rose500}
                  />
                </TouchableOpacity>
                <Text className="text-center text-xl">
                  {date.toLocaleDateString()}
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>
        <View className="flex items-center justify-center">
          <ButtonAuth
            onPress={() => {
              router.push({
                pathname: '/auth/register/stepThree',
                params: { ...item, date },
              });
            }}
            textValue="Продовжити"
          />
        </View>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default StepTwo;
