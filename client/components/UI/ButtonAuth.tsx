import { ThemeColors } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const ButtonAuth = ({
  onPress,
  textValue,
}: {
  onPress: () => void;
  textValue: string;
}) => {
  return (
    <TouchableOpacity onPress={onPress} className="bottom-5">
      <LinearGradient
        colors={ThemeColors.borderInputGradient}
        style={{
          width: wp(80),
          height: hp(8),
          borderRadius: 20,
          marginTop: hp(3),
        }}
      >
        <View
          className="flex items-center justify-center rounded-xl bg-white"
          style={{
            width: wp(77),
            height: hp(6.5),
            marginLeft: wp(1.5),
            marginTop: hp(0.7),
          }}
        >
          <Text className="text-center text-2xl font-semibold">
            {textValue}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
