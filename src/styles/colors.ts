import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  indigo,
  indigoDark,
} from "@radix-ui/colors"

export type Colors = typeof colors.light & typeof colors.dark

export const colors = {
  light: {
    primary: "#FF7101",
    ...indigo,
    ...gray,
    ...blue,
    ...red,
    ...green,
  },
  dark: {
    primary: "#FF7101",
    ...indigoDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
}
