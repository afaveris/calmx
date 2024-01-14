import { BaseScreen } from '@/components/BaseScreen/BaseScreen';
import { ButtonAuth } from '@/components/UI/ButtonAuth';
import { InputAuth } from '@/components/UI/InputAuth';
import { ThemeColors } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const StepOne = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [name, setName] = useState('');
  return (
    <BaseScreen>
      <SafeAreaView className="m-5 mt-24 flex h-screen justify-between">
        <KeyboardAwareScrollView>
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
                  <Text className="text-2xl">Привіт! Я Колмі</Text>
                  <Text className="text-xl">Як до тебе звертатися?</Text>
                </View>
              </LinearGradient>
              <InputAuth
                name={name}
                setName={setName}
                inputPlaceholder="Введіть ім'я"
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View className="flex items-center justify-center">
          <ButtonAuth
            onPress={() => {
              router.push({
                pathname: '/auth/register/stepTwo',
                params: { ...item, name },
              });
            }}
            textValue="Далі"
          />
        </View>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default StepOne;
