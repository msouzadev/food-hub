import { TabNavigationState } from "@react-navigation/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export interface TabBarProps extends BottomTabBarProps {}

export interface TabBarItem {
  name: string;
  icon: any;
}
