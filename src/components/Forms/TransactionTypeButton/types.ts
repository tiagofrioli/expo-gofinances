import { TouchableOpacityProps } from "react-native";

export interface TypeButtonProps extends TouchableOpacityProps {
  title: string;
  type: "income" | "outcome";
  isActive: boolean;
}
