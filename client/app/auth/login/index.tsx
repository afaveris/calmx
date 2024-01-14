import { BaseScreen } from '@/components/BaseScreen/BaseScreen';
import { ButtonAuth } from '@/components/UI/ButtonAuth';
import { InputLogin } from '@/components/UI/InputLogin';
import { InputPassword } from '@/components/UI/InputPassword';
import { ThemeColors } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    login: '',
    password: '',
  });
  console.log(loginData);
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
              className="relative rounded-2xl"
            >
              <View
                className="m-2 mx-auto flex items-center justify-around rounded-2xl bg-white"
                style={{
                  width: wp(76),
                  height: hp(42),
                }}
              >
                <View>
                  <InputLogin
                    placeholder={'Введіть логін або email'}
                    value={loginData.login}
                    onChangeText={(text) =>
                      setLoginData({ ...loginData, login: text })
                    }
                    inputMode="text"
                  />
                  <InputPassword
                    placeholder={'Введіть пароль'}
                    value={loginData.password}
                    onChangeText={(text) =>
                      setLoginData({ ...loginData, password: text })
                    }
                    inputMode="text"
                  />
                </View>
                <View className="flex w-10/12 flex-col gap-2">
                  <View className="flex flex-row justify-between">
                    <Text>Немає акаунту?</Text>
                    <TouchableOpacity
                      onPress={() => router.push('/auth/register')}
                      className="flex items-center justify-center"
                    >
                      <Text
                        style={{
                          color: ThemeColors.lightBlue,
                        }}
                      >
                        Зареєструватися
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="flex flex-row justify-between">
                    <Text>Забули пароль?</Text>
                    <TouchableOpacity
                      onPress={() => console.log('register')}
                      className="flex items-center justify-center"
                    >
                      <Text
                        style={{
                          color: ThemeColors.lightBlue,
                        }}
                      >
                        Відновити
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </KeyboardAwareScrollView>
        <View className="flex items-center justify-center">
          <ButtonAuth onPress={() => console.log('login')} textValue="Увійти" />
        </View>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default Login;
