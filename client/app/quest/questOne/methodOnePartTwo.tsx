import { BaseScreen } from '@/components/BaseScreen/BaseScreen';
import { ButtonAuth } from '@/components/UI/ButtonAuth';
import { ThemeColors } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const MethodOnePartTwo = () => {
  const router = useRouter();
  const [stopWatch, setstopWatch] = useState(0);

  const stopWatchId = setTimeout(() => {
    setstopWatch(stopWatch + 1);
  }, 1000);

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
          <LinearGradient
            colors={ThemeColors.borderBoxWindowGradient}
            style={{
              width: wp(80),
              height: hp(50),
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
                height: hp(48),
                borderRadius: 10,
                transform: [{ rotate: '-180deg' }],
              }}
            >
              <Image
                className="rounded-xl"
                style={{ width: wp(60), height: hp(30) }}
                source={require('@/assets/images/agriopa.jpg')}
              />
              <Text className="mt-8 text-4xl font-bold">
                {`${Math.trunc(stopWatch / 3600)}:` +
                  `${Math.trunc(stopWatch / 60)}` +
                  `:${stopWatch % 60}`}
              </Text>
            </View>
          </LinearGradient>
        </View>
        <View className="mt-5 items-center">
          <ButtonAuth
            onPress={() => {
              clearTimeout(stopWatchId);
              router.push({
                pathname: '/quest/questOne/methodOnePartThree',
                params: { stopWatch },
              });
            }}
            textValue="Зупинитися"
          />
        </View>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default MethodOnePartTwo;
