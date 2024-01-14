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

const StepFour = () => {
  const router = useRouter();

  return (
    <BaseScreen>
      <SafeAreaView className="m-5 mt-24 flex h-screen justify-between">
        <View className="flex items-center">
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
              <Text className="text-2xl">Круто!</Text>
              <Text className="text-center text-xl">
                Нумо я тобі розповім трішки про функціонал!
              </Text>
            </View>
          </LinearGradient>
          <View className="mt-24">
            <ButtonAuth
              onPress={() => {
                router.push({
                  pathname: '/home',
                });
              }}
              textValue="Впораюся самотужки!"
            />
          </View>
        </View>
        <View className="flex items-center justify-center">
          <ButtonAuth
            onPress={() => {
              router.push({
                pathname: '/home',
              });
            }}
            textValue="Продовжити"
          />
        </View>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default StepFour;
