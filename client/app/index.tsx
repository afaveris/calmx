import { AuthBaseScreen } from '@/components/AuthBaseScreen/AuthBaseScreen';
import { ProfileDAO } from '@/data/profileDAO';
import { User } from '@/entities/user';
import { Redirect, useRouter } from 'expo-router';
import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Index = () => {
  const router = useRouter();
  const [isAthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    const db = new ProfileDAO(SQLite.openDatabase('db.db'));
    db.initUser();
    const user = new User(
      1,
      'test',
      'test',
      'test',
      1,
      { test: 'test' },
      new Date(2000, 1, 1),
      new Date(),
      new Date()
    );
    db.insertUser(user);

    const profile = db.getUser();
    if (profile !== null) {
    }
  }, []);
  if (isAthorized) {
    return <Redirect href="/home" />;
  }

  return (
    <AuthBaseScreen>
      <Image
        style={{ width: wp(100), height: hp(75) }}
        source={require('@/assets/images/logo.png')}
      />

      <Animated.View
        entering={FadeInDown.delay(100).springify()}
        className="flex items-center"
      >
        <Text
          style={{ fontSize: hp(5) }}
          className="font-bold tracking-wide text-white"
        >
          Найкращий <Text className="text-rose-500">асистент</Text>
        </Text>
        <Text
          style={{ fontSize: hp(5) }}
          className="font-bold tracking-wide text-white"
        >
          для Вас
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200).springify()}>
        <TouchableOpacity
          onPress={() => router.push('/auth/register/stepOne')}
          style={{ height: hp(7), width: wp(80) }}
          className="mx-auto flex items-center justify-center rounded-full border-[2px] border-neutral-200 bg-rose-500"
        >
          <Text
            style={{ fontSize: hp(3) }}
            className="font-bold tracking-widest text-white"
          >
            Почати роботу
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </AuthBaseScreen>
  );
};

export default Index;
