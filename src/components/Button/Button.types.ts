import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: React.ReactElement;
  fullwidth?: boolean;
  variant?: string;
}
