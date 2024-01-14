import { ThemeColors } from '@/theme';
import { inputValidation } from '@/utils/inputValidation';
import { useEffect, useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const InputPassword = ({ ...props }: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [valid, setValid] = useState(false);
  useEffect(() => {
    setValid(inputValidation(props.value as string, props.inputMode as string));
  }, [props.value]);

  return (
    <View className="relative">
      <TextInput
        {...props}
        className={`mb-2 rounded-xl border-2 p-3 ${
          valid ? 'border-green-500' : 'border-red-500'
        }`}
        style={{
          width: wp(70),
          height: hp(6),
        }}
        secureTextEntry={!showPassword}
      />
      <View
        className="absolute right-0 flex items-center justify-center"
        style={{ width: wp(11), height: hp(6) }}
      >
        {showPassword ? (
          <EyeIcon
            className="h-full w-full"
            color={ThemeColors.rose500}
            onPress={() => setShowPassword(false)}
          />
        ) : (
          <EyeSlashIcon
            className="h-full w-full"
            color={ThemeColors.rose500}
            onPress={() => setShowPassword(true)}
          />
        )}
      </View>
    </View>
  );
};
