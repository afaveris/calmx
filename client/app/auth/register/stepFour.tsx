import { BaseScreen } from '@/components/BaseScreen/BaseScreen';
import { ThemeColors } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const StepFour = () => {
  const router = useRouter();

  return (
    <BaseScreen>
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
            <Text className="text-2xl">Круто!</Text>
            <Text className="text-center text-xl">
              Нумо я тобі розповім трішки про функціонал!
            </Text>
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
            <TouchableOpacity onPress={() => router.push('')}>
              <Text className="text-center text-xl">Впораюся самотужки!</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
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
    </BaseScreen>
  );
};

export default StepFour;
