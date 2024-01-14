import { BaseScreen } from '@/components/BaseScreen/BaseScreen';
import { ButtonAuth } from '@/components/UI/ButtonAuth';
import { ThemeColors } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const MethodOnePartOne = () => {
  const router = useRouter();
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
              <Text className="text-center text-xl">
                Тобі потрібно протриматися як найдовше дивлячись на картинку з
                павучком
              </Text>
              <Text className="mt-10 text-center text-base">
                Переконайтеся, що ви готові. Зупинитися можна в будь який момент
              </Text>
            </View>
          </LinearGradient>
        </View>
        <View className="mt-5 items-center">
          <ButtonAuth
            onPress={() => router.push('/quest/questOne/methodOnePartTwo')}
            textValue="Почати"
          />
        </View>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default MethodOnePartOne;
