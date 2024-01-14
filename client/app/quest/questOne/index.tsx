import { BaseScreen } from '@/components/BaseScreen/BaseScreen';
import { ThemeColors } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const items = [
  {
    id: 1,
    title: '1',
    description: 'Спробуйте себе на витривалість',
    routePath: '/quest/questOne/methodOnePartOne',
  },
  {
    id: 2,
    title: '2',
    description: 'В процесі',
    routePath: '/quest/questOne',
  },
  {
    id: 3,
    title: '3',
    description: 'В процесі',
    routePath: '/quest/questOne',
  },
  {
    id: 4,
    title: '4',
    description: 'В процесі',
    routePath: '/quest/questOne',
  },
  {
    id: 5,
    title: '5',
    description: 'В процесі',
    routePath: '/quest/questOne',
  },
  {
    id: 6,
    title: '6',
    description: 'В процесі',
    routePath: '/quest/questOne',
  },
];

const Cards = ({
  items,
}: {
  items: {
    id: number;
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
              <Text className="text-6xl font-bold">{item.title}</Text>
              <Text className="text-center text-xs">{item.description}</Text>
              <Text className="mt-2 text-xl font-semibold">Обрати</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Index = () => {
  return (
    <BaseScreen>
      <SafeAreaView className="mt-10">
        <View className="items-center">
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
              <Text className="text-center text-2xl">Арахнофобія</Text>
            </View>
          </LinearGradient>
        </View>
        <View>
          <Cards items={items} />
        </View>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default Index;
