import { AuthBaseScreen } from '@/components/AuthBaseScreen/AuthBaseScreen';
import { ThemeColors } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const KeyboardAvoidingComponent = () => {
  const [name, setName] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            className="rounded-xl bg-white"
            style={{
              width: wp(87),
              height: hp(6.5),
              marginLeft: wp(1.5),
              marginTop: hp(0.7),
            }}
          >
            <TextInput
              placeholder="Введи ім’я"
              className="p-3 text-center text-xl"
              value={name}
              onChangeText={setName}
            />
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const StepOne = () => {
  const router = useRouter();
  // const [name, setName] = useState('');
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
            <Text className="text-2xl">Привіт! Я Колмі</Text>
            <Text className="text-xl">Як до тебе звертатися?</Text>
          </View>
        </LinearGradient>
        <KeyboardAvoidingComponent />
        <TouchableOpacity onPress={() => router.push('/auth/register/stepTwo')}>
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

export default StepOne;
