// eslint-disable-next-line no-shadow
export enum Colors {
  orange = "#FE724C",
  orange80 = "#FE8160",
  orange50 = "#FEA58D",
  orange20 = "#FED2C7",
  yellow = "#FFC529",
  yellow80 = "#FFD050",
  yellow50 = "#FFDF8B",
  yellow20 = "#FFEFC3",
  dark = "#1A1D26",
  dark80 = "#2A2F3D",
  dark50 = "#4D5364",
  dark20 = "#6E7489",
  gray = "#9A9FAE",
  gray80 = "#A8ACB9",
  gray50 = "#C4C7D0",
  gray20 = "#EBEBEB",
}

export type ColorsTheme = typeof Colors;
export type ColorsType = keyof typeof Colors;
