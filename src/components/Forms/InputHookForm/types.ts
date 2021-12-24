import { TextInputProps } from "react-native";
import { Control } from "react-hook-form";

export interface InputHookProps extends TextInputProps {
  control: Control;
  name: string;
}
