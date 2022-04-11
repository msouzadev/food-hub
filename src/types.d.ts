import { DefaultTheme } from "styled-components/native";
import { Theme } from "./styles/theme/theme.types";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
