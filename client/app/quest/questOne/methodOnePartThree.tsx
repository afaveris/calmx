import { BaseScreen } from '@/components/BaseScreen/BaseScreen';
import { ButtonAuth } from '@/components/UI/ButtonAuth';
import { ThemeColors } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const caseEndingSeconds = (seconds: number) => {
  const lastDigit = seconds % 10;
  if (lastDigit === 1) {
    return 'секунду';
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'секунди';
  }
  return 'секунд';
};

const MethodOnePartThree = () => {
  const router = useRouter();
  const items = useLocalSearchParams();
  console.log(items);
  return (
    <BaseScreen>
      <SafeAreaView className="mt-10">
        <View className="flex items-center justify-center">
          <LinearGradient
            colors={ThemeColors.borderBoxWindowGradient}
            style={{
              width: wp(50),
              height: hp(10),
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="mb-5 mt-5 rounded-2xl"
          >
            <View
              className="flex justify-center bg-white"
              style={{
                width: wp(47),
                height: hp(8),
                borderRadius: 10,
              }}
            >
              <Text className="text-center text-2xl">Витривалість</Text>
            </View>
          </LinearGradient>
        </View>
        <View className="flex items-center justify-center">
          <Image
            className="h-44 w-44"
            source={require('@/assets/images/hero.png')}
          />

          <LinearGradient
            colors={ThemeColors.borderBoxWindowGradient}
            style={{
              width: wp(80),
              height: hp(30),
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
                height: hp(28),
                borderRadius: 10,
                transform: [{ rotate: '-180deg' }],
              }}
            >
              <View className="flex flex-col gap-2">
                <Text className="text-center text-2xl">Молодець!</Text>
                <Text className="mt-10 text-center text-base">
                  Ти протримався {items.stopWatch}{' '}
                  {caseEndingSeconds(Number(items.stopWatch))}.
                </Text>
                <Text className="mt-10 text-center text-base">
                  Це твій новий рекорд
                </Text>
                <Text className="mt-10 text-center text-base">
                  +500 EXP/+1500{' '}
                  <Image
                    source={require('@/assets/images/coin.png')}
                    style={{ width: 20, height: 20 }}
                  />
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View className="mt-5 items-center">
          <ButtonAuth
            onPress={() => router.push('/home')}
            textValue="Продовжити"
          />
        </View>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default MethodOnePartThree;
