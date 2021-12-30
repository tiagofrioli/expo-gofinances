import { TouchableOpacityProps } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}
