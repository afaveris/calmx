import { BaseScreen } from '@/components/BaseScreen/BaseScreen';
import { ButtonAuth } from '@/components/UI/ButtonAuth';
import { InputLogin } from '@/components/UI/InputLogin';
import { InputPassword } from '@/components/UI/InputPassword';
import { ThemeColors } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    login: '',
    password: '',
    repeatPassword: '',
  });
  return (
    <BaseScreen>
      <SafeAreaView className="mt-24 flex h-screen justify-between">
        <KeyboardAwareScrollView>
          <View className="mx-auto flex items-center justify-center">
            <Image
              className="block"
              source={require('@/assets/images/logo.png')}
              style={{ width: wp(100), height: hp(30) }}
            />
            <LinearGradient
              colors={ThemeColors.borderBoxWindowGradient}
              style={{ width: wp(80), height: hp(44), marginTop: hp(5) }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 0.8 }}
              className="relative rounded-2xl shadow-2xl"
            >
              <View
                className="m-2 mx-auto flex items-center justify-center rounded-2xl bg-white"
                style={{
                  width: wp(76),
                  height: hp(42),
                }}
              >
                <InputLogin
                  placeholder={'Введіть логін або email'}
                  value={registerData.login}
                  onChangeText={(text) =>
                    setRegisterData({ ...registerData, login: text })
                  }
                  inputMode="text"
                />
                <InputPassword
                  placeholder={'Введіть пароль'}
                  value={registerData.password}
                  onChangeText={(text) =>
                    setRegisterData({ ...registerData, password: text })
                  }
                  inputMode="text"
                />
                <InputPassword
                  placeholder={'Введіть повторно пароль'}
                  value={registerData.repeatPassword}
                  onChangeText={(text) =>
                    setRegisterData({ ...registerData, repeatPassword: text })
                  }
                  inputMode="text"
                />
                <View className="flex w-full flex-row justify-between gap-10 pt-5">
                  <Text>Є акаунт?</Text>
                  <TouchableOpacity
                    onPress={() => router.back()}
                    className="flex items-center justify-center"
                  >
                    <Text
                      style={{
                        color: ThemeColors.lightBlue,
                      }}
                    >
                      Увійти
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </View>
        </KeyboardAwareScrollView>
        <View className="flex items-center justify-center">
          <ButtonAuth
            onPress={() =>
              router.push({
                pathname: '/auth/register/stepOne',
                params: {
                  login: registerData.login,
                  password: registerData.password,
                },
              })
            }
            textValue="Зареєструватися"
          />
        </View>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default Register;
