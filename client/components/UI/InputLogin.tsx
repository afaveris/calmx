import { inputValidation } from '@/utils/inputValidation';
import { useEffect, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const InputLogin = ({ ...props }: TextInputProps) => {
  const [valid, setValid] = useState(false);
  useEffect(() => {
    setValid(inputValidation(props.value as string, props.inputMode as string));
  }, [props.value]);

  return (
    <TextInput
      {...props}
      className={`mb-2 rounded-xl border-2 p-3 ${
        valid ? 'border-green-500' : 'border-red-500'
      }`}
      style={{
        width: wp(70),
        height: hp(6),
      }}
    />
  );
};
