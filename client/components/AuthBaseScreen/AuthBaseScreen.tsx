import { ThemeColors } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const AuthBaseScreen = ({ children }: React.PropsWithChildren) => {
  return (
    <View className="flex flex-1 justify-center">
      <StatusBar style="dark" />
      <LinearGradient
        colors={ThemeColors.bgGradient}
        style={{ width: wp(100), height: hp(120) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex space-y-8 pb-12"
      >
        {children}
      </LinearGradient>
    </View>
  );
};
