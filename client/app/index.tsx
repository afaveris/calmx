import { BaseScreen } from '@/components/BaseScreen/BaseScreen';
import { ButtonAuth } from '@/components/UI/ButtonAuth';
import { ProfileDAO } from '@/data/profileDAO';
import { Redirect, useRouter } from 'expo-router';
import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  const router = useRouter();
  const [isAthorized, setisAthorized] = useState(false);

  const db = new ProfileDAO(SQLite.openDatabase('database.db'));
  useEffect(() => {
    // db.dropUser();
    db.initUser();
    db.getUser().then((user) => {
      if (user) {
        setisAthorized(true);
      }
    });
  }, []);

  if (isAthorized) {
    return <Redirect href="/home" />;
  }

  return (
    <BaseScreen>
      <SafeAreaView className="flex h-full justify-between">
        <View>
          <Image
            style={{ width: wp(100), height: hp(65) }}
            source={require('@/assets/images/logo.png')}
            className="block items-center"
          />

          <Animated.View
            entering={FadeInDown.delay(100).springify()}
            className="flex items-center"
          >
            <Text
              style={{ fontSize: hp(4) }}
              className="font-bold tracking-wide text-white"
            >
              Найкращий <Text className="text-rose-500">асистент</Text>
            </Text>
            <Text
              style={{ fontSize: hp(4) }}
              className="font-bold tracking-wide text-white"
            >
              для Вас
            </Text>
          </Animated.View>
        </View>

        <View className="bottom-5 flex items-center justify-center">
          <Animated.View entering={FadeInDown.delay(200).springify()}>
            <ButtonAuth
              onPress={() => router.push('/auth/login')}
              textValue="Початок роботи"
            />
          </Animated.View>
        </View>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default Index;
