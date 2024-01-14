import { BaseScreen } from '@/components/BaseScreen/BaseScreen';
import { ThemeColors } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Image, ImageProps, Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const items = [
  {
    id: 1,
    img: require('@/assets/images/spider.png'),
    title: 'Арахнофобія',
    description: 'Павуки не такі страшні як тобі здається',
    routePath: '/quest/questOne',
  },
  {
    id: 2,
    img: require('@/assets/images/plane.png'),
    title: 'Аерофобія',
    description: 'Літак є одним з найбезпечніших видів транспорту',
    routePath: '/quest/questTwo',
  },
  {
    id: 3,
    img: require('@/assets/images/peoples.png'),
    title: 'Соціофобія',
    description: 'Будь самим собою',
    routePath: '/quest/questThree',
  },
  {
    id: 4,
    img: require('@/assets/images/elevator.png'),
    title: 'Клаустрофобія',
    description: 'Будь спокійнішим',
    routePath: '/quest/questFour',
  },
  {
    id: 5,
    img: require('@/assets/images/drop.png'),
    title: 'Аквафобія',
    description: 'Людина складається на 80% з води',
    routePath: '/quest/questFive',
  },
  {
    id: 6,
    img: require('@/assets/images/mountains.png'),
    title: 'Акрофобія',
    description: 'Рівнинна частина України над рівнем моря становить 175м',
    routePath: '/quest/questSix',
  },
];

const Cards = ({
  items,
}: {
  items: {
    id: number;
    img: ImageProps['source'];
    title: string;
    description: string;
    routePath: string;
  }[];
}) => {
  const router = useRouter();
  return (
    <View className="flex h-screen w-screen flex-row flex-wrap items-center justify-center gap-2 overflow-hidden">
      {items.map((item) => (
        <TouchableOpacity
          onPress={() => router.push({ pathname: item.routePath })}
          key={item.id}
        >
          <LinearGradient
            key={item.id}
            colors={ThemeColors.borderBoxWindowGradient}
            style={{
              width: wp(40),
              height: hp(25),
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              key={item.id}
              className="flex flex-col items-center justify-center rounded-2xl bg-white"
              style={{
                width: wp(37),
                height: hp(23),
              }}
            >
              <Image
                source={item.img}
                className="mb-2"
                style={{ width: wp(15), height: hp(8) }}
              />
              <Text className="text-xs font-bold">{item.title}</Text>
              <Text className="text-center text-xs">{item.description}</Text>
              <Text className="mt-2 text-xl font-semibold">Обрати</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Home = () => {
  return (
    <BaseScreen>
      <SafeAreaView className="mt-10 flex flex-1">
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
              <Text className="text-center text-2xl">Чудово!</Text>
            </View>
          </LinearGradient>
        </View>
        <Cards items={items} />
      </SafeAreaView>
    </BaseScreen>
  );
};

export default Home;
