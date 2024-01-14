import { ThemeColors } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const InputAuth = ({
  name,
  setName,
  inputPlaceholder,
}: {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  inputPlaceholder: string;
}) => {
  return (
    <LinearGradient
      colors={ThemeColors.borderBoxInputGradient}
      style={{
        width: wp(80),
        height: hp(8),
        borderRadius: 20,
        marginTop: hp(3),
      }}
    >
      <View
        className="rounded-xl bg-white"
        style={{
          width: wp(77),
          height: hp(6.5),
          marginLeft: wp(1.5),
          marginTop: hp(0.7),
        }}
      >
        <TextInput
          placeholder={inputPlaceholder}
          className="p-3 text-center text-xl"
          value={name}
          onChangeText={setName}
        />
      </View>
    </LinearGradient>
  );
};
