import { AuthBaseScreen } from '@/components/AuthBaseScreen/AuthBaseScreen';
import { ThemeColors } from '@/theme';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const StepTwo = () => {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
            <Text className="text-2xl">Радий знайомству!”name”</Text>
            <Text className="text-xl">Скільки тобі років?</Text>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={ThemeColors.borderBoxInputGradient}
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
            <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
              <Text className="text-center text-xl">
                {date.toLocaleDateString()}
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <TouchableOpacity
          onPress={() => router.push('/auth/register/stepThree')}
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

export default StepTwo;
